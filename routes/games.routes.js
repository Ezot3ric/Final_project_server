const router = require("express").Router()

const Game = require('./../models/Game.model')


router.get("/getAllGames", (req, res) => {

    Game
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get("/getOneGame/:game_id", (req, res) => {

    const { game_id } = req.params

    Game
        .findById(game_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/addGame", (req, res) => {

    Game
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/updateGame/:game_id", (req, res) => {

    const { game_id } = req.params

    Game
        .findByIdAndUpdate(game_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post("/deleteGame/:game_id", (req, res) => {

    const { game_id } = req.params

    Game
        .findByIdAndDelete(game_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router
