import * as s from "./styles/globalStyles";
import styled from "styled-components";

const ColorBlocks=styled.div `
background-color:${({bgc})=>(bgc)};
height:50px;
width:100%;
color:#fff;
display:flex;
font-size:35px;
align-items:center;
justify-content:center;
flex-direction:column;
border-radius:15px;
@media (min-width: 767px) {
    width:25%;
    height:100px;
  }

`

const Blocks = () => {
    return (
       <s.ResponsiveWrapper 
       style={{
           backgroundColor:'var(--color2)',
           padding:'20px',
           fontsize:'80px',
       }}>
            <ColorBlocks bgc={'#e643a7'}>+170 traits</ColorBlocks>
            <s.SpacerMedium/>
            <ColorBlocks bgc={'#e6aaa7'}>Staking</ColorBlocks>
            <s.SpacerMedium/>
            <ColorBlocks bgc={'#97e6a7'}>Metaverse</ColorBlocks>
            <s.SpacerMedium/>
            <ColorBlocks bgc={'#32a2a8'}>8888 supply</ColorBlocks>
       </s.ResponsiveWrapper>
    );
}

export default Blocks;