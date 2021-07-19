const express = require("express");
const { animalList, User, Comment } = require('../models');
const app = express();

// const Comments = require('../models/comment');
// const { Op } = require('sequelize');
const router = express.Router();
// const authMiddleware = require('../middlewares/authMiddleware');



//1. 테이블에서 animalId column 없애고 기본 id값으로 대체하기

//동물 등록하기
router.post("/animals", async (req, res) => {
  try {
    const { userId, title, animalName, animalSpecies, animalBreed, animalAge, animalGender, animalStory, animalPhoto } = req.body;
    console.log('asdfasdf', userId, title, animalName, animalSpecies);
    // const { user } = res.locals;
    // const userId = user.id;

    await User.create({ nickname: 'hi', password: "asdf", name: 'hyunsu' })
    await animalList.create({ UserId: userId, title: title, animalName: animalName, animalSpecies: animalSpecies, animalBreed: animalBreed, animalAge: animalAge, animalGender: animalGender, animalStory: animalStory, animalPhoto: animalPhoto });
    res.status(200).send({
      "ok": true,
      message: '동물 등록 성공',
    });
  } catch (error) {
    console.error('동물 등록 에러', error);
    res.status(400).send({
      "ok": false,
      message: '동물 등록 실패',
    })
  }
});

//모든 동물 리스트 보여주기
router.get("/animals", async (req, res) => {
  try {
    const animals = await Animals.findAll({});
    res.status(200).send({
      'ok': true,
      result: animals,
    })
  } catch (err) {
    console.error(err);
    res.status(400).send({
      'ok': false,
      message: '동물 리스트 불러오기 실패',
    })
  }
});

//동물 상세정보 불러오기
router.get("/animals/:animalId", async (req, res) => {
  try {
    const { animalId } = req.params;
    animal = await Animals.findOne({
      where: {
        id: animalId
      }
    });
    res.status(200).send({
      'ok': true,
      result: animal,
    })
  } catch (err) {
    console.error(err);
    res.status(400).send({
      'ok': false,
      message: '동물 상세정보 불러오기 실패',
    })
  }
});

//동물 정보 수정하기
router.put("/animals/:animalId", async (req, res) => {
  try {
    const { animalId } = req.params;

    const { user } = res.locals;
    const userId = user.id;
    const { title, animalName, animalSpecies, animalBreed, animalAge, animalGender, animalStory, animalPhoto } = req.body;
    const target = await Animals.findOne({
      where: {
        id: animalId
      }
    });
    console.log('target', target);

    if (target.userId != userId) {
      res.status(400).send({
        'ok': false,
        message: '이 동물의 주인이 아닙니다',
      });
      return;
    }

    await target.update(
      {
        title: title, animalName: animalName, animalSpecies: animalSpecies,
        animalBreed: animalBreed, animalAge: animalAge, animalGender: animalGender,
        animalStory: animalStory, animalPhoto: animalPhoto,
      });

    res.status(200).send({
      'ok': true,
      message: '동물 수정 성공',
    })
  } catch (err) {
    console.error('동물 수정 에러 메세지: ', err);
    res.status(400).send({
      'ok': false,
      message: '동물 수정 실패',
    })
  }
});




router.post("/delete", async (req, res, next) => {
  try {
    const { contentId, password } = req.body;
    await Posts.deleteOne({ 'contentId': contentId, 'password': password });
    res.send({ result: "success" });
  } catch (err) {
    console.error(err);
    next(err);
  }



});


module.exports = router;