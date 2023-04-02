const { Quiz } = require("../models");

const quizController = {

    async renderOneQuiz(req, res) {
        const quizById = await Quiz.findByPk(req.params.id, {
            include: [
                "author", "tags",
                {
                    association: "questions",
                    include: ["level", "propositions", "good_answer"]
                },
            ],
        });
        console.log(JSON.stringify(quizById, null, 2));
        res.render("oneQuiz", {quizById});
    },
};



module.exports = quizController;
