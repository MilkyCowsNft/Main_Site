import styled from "styled-components";
export const RmCont = styled.div `
display:flex;
flex-direction:column;
width:85%;
align-items:left;
background: var(--color6);
box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
border-radius:10px;
margin:30px;
padding:10px;
padding-bottom:10px;
min-height:50px
justify-content:space-between;
fontFamily:"Zen Kurenaido, sans-serif";
`
export const RmPer=styled.p`
color:#d92546;
font-size:30px;
margin:30px;
`
export const Rmtxt=styled.div`
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
line-height: 200%;
color:var(--color3);
margin:20px;
font-size:20px;
`

const Roadmap = ({per,text,title}) => {
    return (
            <RmCont>
                <RmPer>{'Phase '+per+' : '+title}</RmPer>
                <Rmtxt>
                    {text}
                </Rmtxt>
            </RmCont>

    );
}

export default Roadmap;