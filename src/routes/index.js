const express=require('express');
const router =express.Router();
const fs =require('fs');

const PATH_ROUTHER=__dirname;

const cleanFileName=(fileName)=>{
    const clean=fileName.split(".").shift();//TODO [VIDEO]
    return clean;
}

//TODO [index.js]
fs.readdirSync(PATH_ROUTHER).filter((fileName)=>{
const prefixRoute=cleanFileName(fileName);
if(prefixRoute!=="index"){
    console.log(`Cargando la ruta...${prefixRoute}`);
    router.use(`/${prefixRoute}`,require(`./${prefixRoute}.js`));
}
});


module.exports={router};