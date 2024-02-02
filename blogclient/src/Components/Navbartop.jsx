import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbartop = () => {
    const [username,setUserName] = useState('');
    const [photoURL,setPhotourl] = useState('');
    const [logoutbool,setLogoutbool] = useState(false);

    useEffect(()=>{
        const user = localStorage.username;

        if (user) {
            setUserName(user);
            setPhotourl(localStorage.logo);
        }
    },[])
    const navigate = useNavigate();
    function handlelogout(){
        localStorage.clear();
        navigate('/')
    }
  return (
    <nav
                    style={{
                        display:'flex',
                        width:'95%',
                        justifyContent:'space-between',
                    }}
                    >
                        <h3
                        onClick={()=>navigate('/')}
                        >
                            Blog
                        </h3>
                        <div 
                        style={{
                            display:'flex',
                        }}
                        >
                            <h4>Hi {username}</h4>&nbsp;
                                <img
                                    onClick={() => setLogoutbool(!logoutbool)}
                                    style={{ width: '40px', height: '40px', borderRadius: '10px' }}
                                    src={photoURL}
                                    alt="G"
                                />
                        </div>
                        {logoutbool && (
                                    <h4
                                        onClick={handlelogout}
                                        style={{
                                            position: 'fixed',
                                            zIndex: '3',
                                            border: '2px solid white',
                                            borderRadius: '10px',
                                            top: '12%',
                                            right: '2%',
                                            backgroundColor: '#242424',
                                            padding: '1%',
                                        }}
                                    >
                                        Logout
                                    </h4>
                                )}
                    </nav>
  )
}
