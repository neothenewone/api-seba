const express=require('express');
const router=express.Router();
const {getDetail,
    getList,
    deleteItem,
    createItem,
    updateItem}=require('../controllers/videos');
const{checkSession}=require('../middleware/origin');
router.get("/",getList)
router.get("/:id",getDetail)
router.post("/",createItem)
router.delete("/:id",checkSession,deleteItem)
router.put("/:id",updateItem)

module.exports=router;
