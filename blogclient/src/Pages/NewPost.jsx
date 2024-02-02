import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbartop } from '../Components/Navbartop';



export const NewPost = () => {
    const [username,setUserName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription]  = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        const user = localStorage.username
        if(user){
            setUserName(user);
        }
        // handlenewPost()
    },[])
    const handlenewPost =async ()=>{
        console.log(username,title,description);
        if(username.length>0 && title.length>0 && description.length>0 ){
            const obj = {
                username: username,
                title: title,
                description:description
            }
            console.log(obj)
            const res = await fetch("http://localhost:9000/blog/newpost",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(obj)
            })
            const data = await res.json()
            console.log(data)
        }
    }
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
    
    <div 
        style={{
            display:'flex',
            alignSelf:'center',
            marginTop:'3%',
            width:'100%',
            height:'80vh',
            justifyContent:'flex-start',
            gap:'5%'
        }}
    >
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
            width:'70%',
            height:'70%',
            border:'2px solid white',
            borderRadius:'15px',
        }}
        >
            <form 
            style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center'
            }}
            >
                <label>
                    Title:-
                </label>
                <input id='title' onChange={(e)=>setTitle(e.target.value)} style={{padding:'1%',width:'70%'}}/>
                <label>Blog description:-</label>
                <textarea id='description' onChange={(e)=>setDescription(e.target.value)} style={{padding:'1%',width:'70%'}} />
            </form>
            <button onClick={()=>handlenewPost()} style={{width:'20%'}}>Submit</button>
           
        </div>
       
    </div>
</div>
  )
}