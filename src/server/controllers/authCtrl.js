module.exports = {
    login: (req, res, next) => {
        console.log(req.body)
        
        if(req.body.username) {
            req.session.user.username = req.body.username
            console.log(req.session)
            res.status(200).send(req.session.user)
        } else {
            res.status(500).send('unauth')
        }
    },

    signout: (req, res, next) => {
        const { session } = req;
        session.destroy()
        res.status(200).send(req.session)
    },




}