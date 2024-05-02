const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, getProfile, getUser, updateUserScore, getUserRanking, getBestScore } = require('../controllers/authController');
const { createQuestion, getQuestionsByCategoryAndSubCategory, getRandomFootballQuestion, getRandomTennisQuestion, getRandomBasketballQuestion, getRandomCinemaQuestion, getRandomHistoireQuestion, getRandomSciencesQuestion, getRandomArtsQuestion, getRandomCultureGeneraleQuestion, submitAnswer, getCorrectAnswer } = require('../controllers/questionsController');

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (origin === 'https://quoiz.onrender.com' || origin === 'http://localhost:3000') {
      callback(null, origin);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

router.use(cors(corsOptions));

router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);
router.get('/user', getUser);
router.post('/update-score', updateUserScore);
router.get('/user-ranking', getUserRanking);
router.get('/best-score', getBestScore);

router.post('/questions', createQuestion);
router.get('/questions', getQuestionsByCategoryAndSubCategory);
router.get('/questions/football/random', getRandomFootballQuestion);
router.get('/questions/tennis/random', getRandomTennisQuestion);
router.get('/questions/basketball/random', getRandomBasketballQuestion);
router.get('/questions/cinema/random', getRandomCinemaQuestion);
router.get('/questions/histoire/random', getRandomHistoireQuestion);
router.get('/questions/science/random', getRandomSciencesQuestion);
router.get('/questions/arts/random', getRandomArtsQuestion);
router.get('/questions/culture-generale/random', getRandomCultureGeneraleQuestion);
router.post('/questions/:questionId/answers', submitAnswer);
router.get('/questions/:questionId/correct-answer', getCorrectAnswer);

module.exports = router;
