const { Router } = require("express");
const mainController = require("./controllers/mainController");
const quizController = require("./controllers/quizController");

const router = Router();


router.get("/", mainController.renderHomePage);
router.get("/quiz/:id", quizController.renderOneQuiz);


module.exports = router;
