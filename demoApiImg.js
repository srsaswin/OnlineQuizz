const express = require('express');
const cors = require('cors');
const multer = require('multer')
const path = require('path')
const app = express();  
const date = new Date();


app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON request bodies

const port = 8090;
let count1 = 0;
let count2 = 0;

app.post('/001/:id',(req,res)=>{
    const{num,data} = req.body
    const{id} = req.params
    if(!data) return res.status(418).send({error : 'data not found'});
    return res.send({message : `requst from id ${id} to the name ${data} and num ${num}`})
})

app.get('/image',(req,res)=>{
    res.download('./upload/images/undefined_.png')
})

app.get('/hi', (req, res) => {
    console.log(req);
    
    count1++;
    res.status(200).json({
        message: "Hello, World!",
        count: count1
    });
});

app.post('/hello', (req, res) => {
    count2++;
    const { name1 } = req.body;
    if (!name1) {
        return res.status(400).json({ message: "Missing required field: name1" });
    }
    console.log(count2);
    
    res.status(200).json({
        message: `How are you, ${name1}`,
        count: count2,
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));



const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now(); // Generate a fresh timestamp
        const ext = path.extname(file.originalname); // Get the correct extension
        cb(null, `${file.fieldname}_${uniqueSuffix}${ext}`);
    }
});


const upload = multer({
    storage:storage
})
c = 0;

app.post('/upload',upload.single('profile'),(req,res)=>{
    c+=1
    const{name1} = req.body
    console.log(name1);
    
    res.status(200).json({message : `image is resived ${name1}`})
})
