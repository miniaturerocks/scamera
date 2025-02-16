import React from 'react';
import {useState,useRef,useEffect} from 'react';
import {createRoot}  from 'react-dom/client';
import Top from './Top';


export const AuthContext = React.createContext();



const App = ()=>{

  const [auth,setAuth] = useState({auth:false,id:'',name:''});

  return(
    <div>
    <AuthContext.Provider value={{auth,setAuth}}>
    {!auth.auth ?
    <div>
    <div>
    <h1>{"LOGIN"}</h1>
    </div>
    </div>
    :
    <div>
    <Top/>
    </div>
    }
    </AuthContext.Provider>
    </div>
  )
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App/>);