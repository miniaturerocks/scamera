import React from "react";
import {styled} from '@mui/material/styled';


const ContentDiv = styled('div')(()=>({
      width:'100vw',
      height:'100vh',
      overflow:'hidden',
      maxWidth:'100vw',
      maxHeight:"100vh",
}))

const Top = ()=>{

  return(
    <ContentDiv>
    <h1>{"TEST"}</h1>
    </ContentDiv>
  )
}

export default Top;