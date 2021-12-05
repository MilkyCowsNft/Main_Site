import * as s from "./styles/globalStyles"
const Banner = (props) => {
  var side =props.side
  var sub=props.sub
  function hasSide(side) {
    if(side){
      return <s.Container flex={1} style={{ padding:"5%" }} ai={"center"}> {side}</s.Container>
    }
  }
    return (
      <> 
      
        <s.Container
    id="koon"
    fd={"row"}
    ai={"center"}
    jc={"space-between"} 
    test={"#1f2833"}
    style={{
      padding:"40px 20px",
      height:'100vh'
    }}>


<s.ResponsiveWrapper flex={1} dir={props.dir}>
    <s.Container flex={1} fd={"column"} style={{ width:"100%" , padding:'5%'}} jc={props.al}>
        
        {props.title?props.title:null}
        {props.text?props.text:null}
        {props.sub?props.sub:""}
        {props.link?props.link:""}
    </s.Container>
    <s.SpacerLarge />
    {hasSide(side)}
    </s.ResponsiveWrapper>
    
    </s.Container>
    
    </>
     );
}
 
export default Banner;