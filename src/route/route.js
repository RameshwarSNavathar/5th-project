const express=require("express")
const router=express.Router()

const collegeCon=require('../controller/collegeContro')
const internController=require("../controller/internContro")



router.post('/functionup/colleges',collegeCon.createCollege)
router.get("/functionup/collegeDetails",collegeCon.getcollegedetails)
router.post("/functionup/interns",internController.createIntern)


router.all("/*",function(req,res){
return res.status(404).send({status:false,msg:"path not found"})
})




module.exports=router