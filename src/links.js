import {StyledLink2 , Container} from "./styles/globalStyles"
const Links = () => {
    return (  
        <Container fd={"row"} 
          style={{color:"var(--color3)",fontSize:"30px" }}>
          <StyledLink2 href="https://discord.gg/DvuPmwgN5h" target="_blank" ><i class="fab fa-discord"></i></StyledLink2>
          <StyledLink2 href="https://www.instagram.com/milkycowsnft/?hl=en" target="_blank"><i className="fab fa-instagram" target="_blank"></i></StyledLink2>
          <StyledLink2 href="https://twitter.com/Milky_cows" target="_blank"><i className="fab fa-twitter" target="_blank"></i></StyledLink2>
          
          </Container>
    );
}
 
export default Links;