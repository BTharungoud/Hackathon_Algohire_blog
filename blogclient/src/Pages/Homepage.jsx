import React, { useEffect, useState } from 'react'
import { auth, provider, } from '../Components/firebaseconfig'
import {signInWithPopup} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import ActionAreaCard from '../Components/reactcard';
export const Homepage = () => {
    const [cards , setCards] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        setCards([
            {
                title:"Cooking Blog",
                img:'./undraw_breakfast_psiw.png',
                text:'Upload your Passion Start a Food Blog by signing up in the web app. start showing you knowledge',
            },
            {
                title:"Tech Blog",
                img:'./Techpng',
                text:'Upload your Passion Start a tech Blog by signing up in the web app. start showing you Tech knowledge',
            }
        ])
    },[])

    async function handleauth(){
        await signInWithPopup(auth,provider).then((data)=>{
            localStorage.setItem("username",data.user.displayName);
            localStorage.setItem("logo",data.user.photoURL)
            if (data.user.displayName.length >= 2) {
                navigate('/dashboard');
              }
        })
    }
    
  return (
    <div
        style={{
            display:'flex',
            alignItems:'center',
            width:'100%',
            height:'97vh',
            boxSizing:'border-box',
            flexDirection:'column'
        }}
    >
        <nav
        style={{
            display:'flex',
            width:'100%',
            justifyContent:'space-between',
        }}
        >
            <h3
            onClick={()=>navigate('/')}
            >
                Blog
            </h3>
            <button onClick={handleauth}>
                Signin
            </button>
        </nav>
        <h3>Start A blog, Follow your passion share your knowledge.</h3>

        <div style={{
            display:'flex',
            justifyContent:'flex-start',
            alignSelf:'center',
            marginTop:'3%',
            gap:'5%'
        }}>
            {cards.map((item)=>{
                return(<ActionAreaCard props = {item}/>)
            })}
        </div>
    </div>
  )
}
