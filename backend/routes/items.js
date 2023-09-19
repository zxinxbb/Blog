const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items')

// routes to controllers
// the '/items' route will run the getTodos controller
// which will fetch the data from your database
router.get('/', itemsController.getBlogs)
router.get('/:id', itemsController.getBlog)
router.post('/item', itemsController.createBlog)
router.patch('/:id', itemsController.editBlog)
router.delete('/:id', itemsController.deleteBlog)
module.exports = router