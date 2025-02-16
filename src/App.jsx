import React from 'react';
import {useState,useRef,useEffect} from 'react';
import {createRoot}  from 'react-dom/client';
import { Button,Paper,Stack,Box,TextField } from '@mui/material';
import {styled} from '@mui/material/styled';
import Top from './Top';


export const AuthContext = React.createContext();

const RootDiv = styled('div')(()=>({
      position:'absolute',
      left:'0',
      top:'0',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      backgroundColor:'#889ba8',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily:'Meiryo,sans-serif'
}))

const LoginDiv = styled('div')(()=>({
      width:'300px',
      height:'auto',
      backgroundColor:'#ccc',
}))

const ContentDiv = styled('div')(()=>({
      width:'100vw',
      height:'100vh',
      overflow:'hidden',
      maxWidth:'100vw',
      maxHeight:"100vh",
}))

const App = ()=>{

  const [auth,setAuth] = useState({auth:false,id:'',name:''});

  return(
    <RootDiv>
    <AuthContext.Provider value={{auth,setAuth}}>
    {!auth.auth ?
    <LoginDiv>
    <Paper>
    <h1>{"LOGIN"}</h1>
    </Paper>
    </LoginDiv>
    :
    <ContentDiv>
    <Top/>
    </ContentDiv>
    }
    </AuthContext.Provider>
    </RootDiv>
  )
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App/>);