import Blogmodel from "../Models/Blogmodel.js";

export const postBlog = async(req,res)=>{
    const name = req.params.username;
    const namedBlogs  = await Blogmodel.find({username:name});
    res.send(namedBlogs)
}

export const newBlog = async(req,res)=>{
    const blog = req.body;
    const saveBlog = new Blogmodel(blog);
    await saveBlog.save();
    res.send(saveBlog)

}

export const allBologs = async(req,res)=>{
    const blog = await Blogmodel.find();
    res.send(blog)
}

