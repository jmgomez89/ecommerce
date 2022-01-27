import express from 'express'
import multer from 'multer'

const router = express.Router()

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, 'public/uploads')
    },
    filename: function(req,file,cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage})

/* Router POST */
router.post('/', upload.single('foto') , (req,res,next) =>{
    const file = req.file

    if(!file) {
        const error = new Error('Error subiendo archivo')
        error.httpStatusCode = 400
        next(error)
    }

    res.json({ nombre: file.filename })
})

/*
const middleware1 = (req,res,next) => {
    next()
}

const middleware2 = (req,res,next) => {
    next()
}

// Router POST 
router.post('/', middleware1, middleware2, (req,res) =>{

})
*/

//exports
export default router