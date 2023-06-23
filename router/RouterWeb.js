const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('inicio',{
        titulo:'Pagina principal'
    })
})


module.exports = router