// handler functions that will be executed 

const User = require("../models/users")

const getUsers = async (req, res) => {
    // find all items from a mongoose Model method 
    const items = await User.find({})
    // respond with an object that has a message and the items from the DB
    res.json({
        message: "all items",
        users: items
    })
}

const getUser = async (req, res) => {
    // get id from ':id' param from the route (the :id in the route path)
    const { id } = req.params
    // find todo with Model.findById()
    const user = await User.findById(id)
    // response (res) with .json with the todo found
    res.status(200).json(user)
}

const createUser = async (req, res) => {
    // get the text from the req.body
    const { username, password, email } = req.body
    // create new todo object with model
const userObj = new User({
    username,
    password,
    email
})
    // await for it to be saved
    const newUser = await userObj.save()
    // respond with json()
    res.status(200).json(newUser)
}

const editUser = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndUpdate
    let user = await User.findByIdAndUpdate(id, { username: req.body.username,password: req.body.password, email: req.body.email})

    res.status(200).json(user)
}

const deleteUser = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndDelete
   let user = await User.findByIdAndDelete(id)

    res.status(200).json(user)
   
}

module.exports = {

    createUser,
    getUsers,
    editUser,
    deleteUser,
    getUser
}