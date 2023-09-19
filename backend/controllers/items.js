// handler functions that will be executed 

const Todo = require("../models/blog")

const getBlogs = async (req, res) => {
    // find all items from a mongoose Model method 
    const items = await Blog.find({})
    // respond with an object that has a message and the items from the DB
    res.json({
        message: "all items",
        todos: items
    })
}

const getBlog = async (req, res) => {
    // get id from ':id' param from the route (the :id in the route path)
    const { id } = req.params
    // find todo with Model.findById()
    const blog = await Blog.findById(id)
    // response (res) with .json with the todo found
    res.status(200).json(blog)
}

const createBlog = async (req, res) => {
    // get the text from the req.body
    const { text } = req.body
    console.log(text)
    // create new todo object with model
const todoObj = new Blog({
    text,
})
    // await for it to be saved
    const newBlog = await todoObj.save()
    // respond with json()
    res.status(200).json(newBlog)
}

const editBlog = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndUpdate
    let blog = await Blog.findByIdAndUpdate(id, { text: req.body.text })

    res.status(200).json(blog)
}

const deleteBlog = async (req, res) => {
    // get id from ':id' param from the route
    const { id } = req.params
    // use mongoose model method findByIdAndDelete
   let blog = await Blog.findByIdAndDelete(id)

    res.status(200).json(blog)
   
}

module.exports = {
    createBlog,
    getBlogs,
    editBlog,
    deleteBlog,
    getBlog
}