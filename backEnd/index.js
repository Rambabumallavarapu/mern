const express = require('express');
const { config } = require('dotenv');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

config();

const app = express();
const port = 1995;

// In-memory user storage (for demonstration purposes)
const users = [];

// Create upload directory if it doesn't exist
const uploadDir = './upload';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

app.use('/upload', express.static(uploadDir));
app.use(express.json());
app.use(cors({ origin: '*' }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // Limit file size to 1MB
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
});

// Route to handle user registration with single file upload
app.post('/register', upload.single('avathar'), (req, res) => {
    // console.log(req.protocol)
    console.log("req",req)
    // const details = req.body;
    // const file = req.file;

    // if (!file) {
    //     return res.status(400).json({ success: false, error: 'No file uploaded' });
    // }

    // console.log(details, file);

    // // Construct the user object
    // const user = {
    //     firstName: details.firstName,
    //     lastName: details.lastName,
    //     phone: details.phone,
    //     email: details.email,
    //     password: details.password,
    //     conformPassword: details.conformPassword,
    //     avathar: file.filename
    // };

    // // Store the user
    // users.push(user);

    // // Construct file URL
    // const fileUrl = `${req.protocol}://${req.get('host')}/upload/${file.filename}`;

    // // Response object
    // const responseDetails = {
    //     ...details,
    //     avathar: file.filename,
    //     avatharUrl: fileUrl
    // };

    // res.json({ success: true, responseDetails });
});

// GET route to list all users
app.get('/users', (req, res) => {
    const userList = users.map(user => {
        return {
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            email: user.email,
            avatharUrl: `${req.protocol}://${req.get('host')}/upload/${user.avathar}`
        };
    });

    res.json({ success: true, users: userList });
});
console.log("user",users)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
