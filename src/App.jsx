import React from 'react';
import {createRoot}  from 'react-dom/client';


const App = ()=>{
  const hello = "Hello World!";
  return(
    <>
    <h1>{hello}</h1>
    <h1>{hello}</h1>
    <h1>{hello}</h1>
    <h1>{hello}</h1>
    <h1>{hello}</h1>
    </>
  )
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App/>);