const { Quiz } = require("../models");
const mainController = {

    async renderHomePage(req, res) {

        // Récupérer les quizs dans la base de données !!
        const quizs = await Quiz.findAll({
            include: ["author", "tags"]
        });

        res.render("home", { quizs });

    },
};

module.exports = mainController;
