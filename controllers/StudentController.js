import student from "../models/studentModel.js"

const addStudents = async(req, res) => {
    try{
         const data = req.body;
    console.log(data);
    const addeddata = await student.create(data);
    // const addeddata = await student.insertMany(data);
    console.log(addeddata);
    res.status(201).json("data added");
    }catch(error){
        res.status(500).json({error: error.message})
    }
};

const getStudents = async(req,res)=>{
    //data which is getting from database
    try{
    const data = await student.find();
    //sending the response with status code
    res.status(201).json(data);
    }
    catch{
        res.status(500).json({error: error.message});
    }
}

const getStudentById= async (req,res)=>{
    try{
    const id = req.params.userid;
    const data = await student.findById(id);
    res.status(200).json(data);
    }
    catch(error)
    {
       res.status(500).json({error:error.message});
    }
}

export{getStudents,addStudents,getStudentById};