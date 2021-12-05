import styled from "styled-components";
import * as s from "./styles/globalStyles"

const GridContainer=styled.div `
width:100%;
height:500px;
display:grid;
grid-template-columns:repeat(3, minmax(0px, 1fr));
grid-gap:15px;
${'' /* grid-template-rows:auto auto auto ; */}
`
const Row = styled.div `
display:flex;
flex-grow:1;
transition:transform .6s ease-out;
&:hover{
    transform:rotate(5deg);
   
}
`
const GridPhotos = () => {
    return (
        
        <GridContainer>
                <Row>
                <img
                 src={"/config/images/1.png"}
                 width={'100%'}
                 style={{
                     borderRadius:"10%"
                 }}
                 />
                </Row>
                <Row>
                <img
                 src={"/config/images/2.png"}
                 width={'100%'}
                 style={{
                     borderRadius:"10%"
                 }}
                 />
                </Row>
                <Row>
                <img
                 src={"/config/images/3.png"}
                 width={'100%'}
                 style={{
                     borderRadius:"10%"
                 }}
                 />
                </Row>
                <Row>
                <img
                 src={"/config/images/19.png"}
                 width={'100%'}
                 style={{
                     borderRadius:"10%"
                 }}
                 />
                </Row>
                <Row>
                <img
                 src={"/config/images/solana logo.png"}
                 width={'100%'}
                 style={{
                     borderRadius:"10%"
                 }}
                 />
                </Row>
                <Row>
                <img
                 src={"/config/images/21.png"}
                 width={'100%'}
                 style={{
                     borderRadius:"10%"
                 }}
                 />
                </Row>
                <Row>
                <img
                 src={"/config/images/22.png"}
                 width={'100%'}
                 style={{
                     borderRadius:"10%"
                 }}
                 />
                </Row>
                <Row>
                <img
                 src={"/config/images/23.png"}
                 width={'100%'}
                 style={{
                     borderRadius:"10%"
                 }}
                 />
                </Row>
                <Row>
                <img
                 src={"/config/images/35.png"}
                 width={'100%'}
                 style={{
                     borderRadius:"10%"
                 }}
                 />
                </Row>
            
         
        </GridContainer>

     );
}
 
export default GridPhotos;