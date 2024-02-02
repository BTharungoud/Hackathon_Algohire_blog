import React,{useState,useEffect} from 'react';
import { Navbartop } from '../Components/Navbartop';
import { useNavigate } from 'react-router-dom';

export const Posts = () => {
    const navigate = useNavigate();
    const [blogsdata, setBlogsdata] = useState([]);
    useEffect(()=>{
        
        setBlogsdata([
            {
                heading:"BlogHead",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit culpa consectetur nam perspiciatis minima voluptatum quasi, delectus aperiam provident adipisci! Reiciendis hic quas totam vero quis. Vero esse tempore perferendis?"
            },
            {
                heading:"BlogHead",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit culpa consectetur nam perspiciatis minima voluptatum quasi, delectus aperiam provident adipisci! Reiciendis hic quas totam vero quis. Vero esse tempore perferendis?"
            },
            {
                heading:"BlogHead",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit culpa consectetur nam perspiciatis minima voluptatum quasi, delectus aperiam provident adipisci! Reiciendis hic quas totam vero quis. Vero esse tempore perferendis?"
            },
            {
                heading:"BlogHead",
                content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit culpa consectetur nam perspiciatis minima voluptatum quasi, delectus aperiam provident adipisci! Reiciendis hic quas totam vero quis. Vero esse tempore perferendis?"
            }   
        ])
    },[])
return (
    <div
    style={{
        display:'flex',
        alignItems:'center',
        width:'100%',
        height:'90vh',
        boxSizing:'border-box',
        flexDirection:'column'
    }}
>
    <Navbartop/>
    
    <div style={{
        display:'flex',
        alignSelf:'center',
        marginTop:'3%',
        width:'100%',
        height:'80vh',
        justifyContent:'flex-start',
        gap:'5%'
    }}>
        <div
        style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            width:'15%',
            height:'100%',
            borderRight:"2px solid #e6e6fa"

        }}
        >
           <div 
                onClick={()=>navigate('/newpost')}
                style={{
                    borderBottom:'2px solid #e6e6fa'
                }}
            >
                NewPost
            </div>
           <div
                onClick={()=>navigate('/posts')}
                style={{
                    borderBottom:'2px solid #e6e6fa'
                }}
            >
                Posts
            </div>
            <div 
                onClick={()=>navigate('/dashboard')}
                style={{
                    borderBottom:'2px solid #e6e6fa'
                }}
            >
             viewblogs
            </div>
        </div>
        <div
        style={{
            display:"flex",
            flexDirection:'column',
            width:'80%',
            height:'97%',
            overflowY : blogsdata.length>4?"scroll":"auto",
            scrollbarWidth:'thin',
            scrollbarColor: '#6b6b6b #f5f5f5',
        }}
        >
            {
                blogsdata.map((item)=>(
                    <div
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        width:'100%'
                    }}
                    >
                        <span
                        style={{
                            display:'flex',
                            justifyContent:'space-between'
                        }} 
                        >
                            <h3>{item.heading}</h3>
                            <span
                                style={{display:'flex',gap:'1%'}}
                            >
                                <button>Edit</button>
                                <button>Delete</button>
                            </span>
                        </span>
                        <span>
                            {item.content}
                        </span>

                    </div>
                ))
            }
        </div>
       
    </div>
</div>
  )
}
  
