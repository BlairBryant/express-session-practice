module.exports = {

    readUsers: (req, res) => {
        const db = req.app.set('db')
        db.readUsers()
        .then((users) => res.status(200).send(users))
        .catch(() => res.status(500).send())
    },

    checkLogin: (req, res) => {
        const db = req.app.set('db')
        db.checkLogin(req.body.username)
        .then((username) => res.status(200).send(username))
        .catch(() => res.status(500).send())
    },

    register: (req, res) => {
        const db = req.app.set('db')
        db.register(req.body.username, req.body.password)
        .then(() => res.status(200).send())
        .catch(() => res.status(500).send())
    }
}