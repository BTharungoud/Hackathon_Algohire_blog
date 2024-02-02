import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbartop } from '../Components/Navbartop';
export const Dashboard = () => {
    const navigate = useNavigate();
    const [blogsdata, setBlogsdata] = useState([]);
    useEffect(()=>{
        const user = localStorage.username
        const handlepostname = async() =>{
            if(user.length>0 ){
                const res = await fetch(`https://blogserver-c37z.onrender.com/blog/`,{
                    method:"GET",
                })
                const data = await res.json()
                setBlogsdata(data);
            }
        }
        handlepostname()
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
                borderRight:"2px solid #e6e6fa",
                cursor:'pointer'

            }}
            >
                <h4 
                        onClick={()=>navigate('/newpost')}
                        style={{
                            borderBottom:'2px solid #e6e6fa'
                        }}
                >
                    NewPost
                </h4>
                <h4
                        onClick={() => navigate('/allblogs')}
                        style={{
                            borderBottom:'2px solid #e6e6fa'
                        }}
                    >
                        Posts
                    </h4>
                    <h4 
                        onClick={() => navigate('/dashboard')}
                        style={{
                            borderBottom:'2px solid #e6e6fa'
                        }}
                    >
                    viewblogs
                    </h4>

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
                            <h3>{item.title}</h3>
                            <span>
                                {item.description}
                            </span>

                        </div>
                    ))
                }
            </div>
           
        </div>
    </div>
  )
}
