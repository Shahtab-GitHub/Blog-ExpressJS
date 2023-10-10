const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router()


router.get('/', (req, res)=>{
    // res.sendFile(path.join(__dirname, '../templates/homepage.html'))
    res.render('home');
})

router.get('/blogs', (req, res)=>{
    // res.sendFile(path.join(__dirname, '../templates/blogHome.html'))
    res.render('blogHome', { blogs : blogs});
})

router.get('/blogpost/:slug', (req, res)=>{
    myblog = blogs.filter((e) =>{
        return e.slug == req.params.slug
    })
    // res.sendFile(path.join(__dirname, '../templates/blogPage.html'))
    // res.render('blogPage', { myblog : myblog});

    res.render('blogPage', { 
        title : myblog[0].title,
        content : myblog[0].content,
        slug : myblog[0].slug,
    });
})

module.exports = router