const{getAllVideos}=require('../services/videos')

const getList=(req,res)=>{
res.send({data:getAllVideos()})
}

const getDetail=(req,res)=>{
    res.send({data:"detail"})
}

const updateItem=(req,res)=>{
    res.send({data:"Actualizando"})
}

const createItem=(req,res)=>{
    res.send({data:"Creando"})
}
const deleteItem=(req,res)=>{
    res.send({data:"Eliminando"})
}

module.exports={getDetail,getList,updateItem,createItem,deleteItem};