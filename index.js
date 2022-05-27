import 'dotenv/config';
import express from 'express';
import filerConfig from './filerconfig.js';
import Filer from "lf-filer";

// const express = require("express");
// const dotenv = require("dotenv");
// const filerConfig = require("./src/filerconfig")
// const Filer = require("lf-filer");
// dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => res.send('Hello World!'));
console.log("filer:", Filer);
const filer = new Filer({...filerConfig});

filer.upload(filerConfig.storageProviderConfig.bucket,"Bipin dai","C:/Users/Ashwin/Desktop/filer-test-npm/index.js")
.then(success => {console.log(success);
});
filer.download(filerConfig.storageProviderConfig.bucket,"a.txt","C:/make/")
.then(resp => console.log(resp))
// .error(err => console.log({ err}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

