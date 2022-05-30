import 'dotenv/config';
import express from 'express';
import filerConfig from './filerconfig.js';
import Filer from "lf-filer";
const app = express();
const port = process.env.PORT;


const filer = new Filer(filerConfig);
app.get('/', (req, res) =>{
    res.send('Hello World!')
});
app.get('/upload', (req, res) =>{
    filer.upload(filerConfig.storageProviderConfig.bucket,"Browsertest","D:/Leapfrog/filer-test-npm/index.js")
.then(success => {
    res.send(success);
});
});
app.get('/uploadMulti', (req, res) =>{
    filer.uploadMultipleFiles(filerConfig.storageProviderConfig.bucket,[{ filePath: "D:/Leapfrog/Projects/filer-test/filertest.js", key: "multiple1" },
    { filePath: "D:/Leapfrog/Projects/filer-test/filertest.js", key: "multiple2" },{ filePath: "D:/Leapfrog/Projects/filer-test/filertest.js", key: "multiple3" },
    ])
.then(success => {
    res.send(success);
});
});

app.get('/uploadFolder', (req, res) =>{
    filer.upload(filerConfig.storageProviderConfig.bucket,"Browsertest","D:/Leapfrog/filer-test-npm/index.js")
.then(success => {
    res.send(success);
});
});

// filer.download(filerConfig.storageProviderConfig.bucket,"a.txt","C:/make/")
// .then(resp => console.log(resp))
// .error(err => console.log({ err}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

