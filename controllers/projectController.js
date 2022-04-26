const Project = require('../models/projectModel');

// exports.createProject = function (req, res) {
//     let project = new Project(
//         {
//             name: req.body.name,
//             price: req.body.price
//         }
//     );
//     project.save(function (err) {
//         if (err) {
//             return next(err);
//         }
//         res.send('Product Created successfully')
//     })
// };

exports.getProject = function (req, res) {
    Project.find().exec(function (err, projects) {
        if (err)  return next(err);
        res.send(projects)
    })
};

exports.saveProject = function (req, res){
    
    let project = new Project(req.body)
    project.isNew=true
    project.created_at = new Date().getTime()
    project.save(function(err, result){
        if(err) return next (err)
        res.send(project)
    })
}

exports.updateProject = function (req, res){
    Project.findById(req.body.id).exec((err, result)=>{
        if (err)  return next(err);
        if(result.watchlist==true)result.watchlist=false
        else result.watchlist=true
        result.isNew=false
        Project.updateOne({_id:req.body.id},result).exec((err1,result1)=>{
            if (err1)  return next(err1);
            res.send(result)
        })
    })
}


exports.updateProjectApprove = function (req, res){
    Project.findById(req.body.id).exec((err, result)=>{
        if (err)  return next(err);
        if(result.approved)result.approved=false
        else result.approved=true
        result.isNew=false
        Project.updateOne({_id:req.body.id},result).exec((err1,result1)=>{
            if (err1)  return next(err1);
            res.send(result)
        })
    })
}

exports.updateProjectDead = function (req, res){
   Project.findById(req.body.id).exec((err, result)=>{
       if (err)  return next(err);
       if(result.dead)result.dead=false
       else result.dead=true
       result.isNew=false
       Project.updateOne({_id:req.body.id},result).exec((err1,result1)=>{
           if (err1)  return next(err1);
           res.send(result)
       })
   })
}

exports.updateProjectRug = function (req, res){
   Project.findById(req.body.id).exec((err, result)=>{
       if (err)  return next(err);
       if(result.ruged)result.ruged=false
       else result.ruged=true
       result.isNew=false
       Project.updateOne({_id:req.body.id},result).exec((err1,result1)=>{
           if (err1)  return next(err1);
           res.send(result)
       })
   })
}

exports.editProject = function (req, res){
    let project = req.body
    project.isNew = false
    Project.updateOne({_id:req.body._id},req.body).exec((err, result)=>{
       if(err) return next(err)
        Project.findById(req.body._id).exec((err1, result1)=>{
            if(err1) return next(err1)
                res.send(result1)
        })
   })
}

exports.removeProject = function (req, res){
   Project.deleteOne({_id:req.body.id}).exec((err, result)=>{
       if(err) return next(err)
       res.send(req.body.id)
   })
}

exports.saveImage = function (req, res){
    console.log(req)
}
