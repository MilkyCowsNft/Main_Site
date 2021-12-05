
import Banner from "./banner";
import * as s from "./styles/globalStyles";
import Blocks from "./blocks";
import GridPhotos from "./gridphotos";
import Links from "./links";
import Roadmap from "./roadMap";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import styled from "styled-components";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

  export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 500px;
  }
  transition: width 0.5s;
`;


function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);
  return (
    <>
      <s.Screen>
        <Banner
        side={<GridPhotos></GridPhotos>}
        title={
          <s.TextTitle style={{ fontSize:'60px',fontWeight:'bold',color:'#DBFE87',fontFamily:"Zen Kurenaido, sans-serif" ,marginBottom:"20px"}}>
           MILKY COWS 
      </s.TextTitle>
        }
        text={ <s.TextDescription style={{color:'var(--color3)' ,fontWeight:'bold',fontSize:"23px" }}>
            Milky Cows are a collection of 
          <span style={{color:'var(--primary)'}}> 8888 </span>
            unique Cows and their journey is to bring value to their owners and feed them with<span style={{color:'var(--primary)'}}> $MILK  </span> 
            on the Solana Blockchain<br/>
            <br/>
          </s.TextDescription>
          
          }
          
          sub={<s.TextSubTitle style={{color:"var(--color4)" , fontSize:"18px"} }>
              Metaverse || Genesis || DAO Membership & Voting Rights
            </s.TextSubTitle>}
          link={<Links></Links>}
        >
        </Banner>
        
        {/* start box  */}

        

        {/* end box  */}
        
        <Banner
        dir='row-reverse'
        al="center"
        side={<StyledImg
          alt={"Milky Cows"}
          src={"/config/images/preview.gif"}
          style={{ transform: "scaleX(-1)" ,borderRadius:"30px"/*,border: "4px solid var(--secondary)"*/}}
        />}
        title={
          <s.TextTitle style={{ fontWeight:'bold',color:'var(--primary)',fontFamily:"Zen Kurenaido, sans-serif" ,fontSize:"60px",margin:"20px auto",textAlign:"center"}}>
           What are Milky Cows?
          </s.TextTitle>
        }
        text={ <s.TextDescription style={{color:'var(--color3)' ,fontSize:"21px" , lineHeight: '200%'  }}>
            Milky Cows is as a collection of 8888 utility , unique and randomly generated non-fungible tokens (NFTs) 
            on the Solana Blockchain with Two Generation.
            <br/>
            <br/>
            The $MILK token is the utility token that fuels the Milky Cows Ecosystem 
            and presented fractional shares of NFT's held in the vault. Each Milky Cow NFT 
            earns 5 $MILK  per day and Genesis Cows earn 20 $MILK per day from staking.
            
          </s.TextDescription>
          }
        >
        </Banner>
        <Blocks></Blocks>
        
        <Banner
        dir='row'
        al="center"
        side={<s.StyledImg2 src="/config/images/sandbox.png"
                  
        />}

        title={
          <s.TextTitle style={{ fontWeight:'bold',color:'var(--primary)',fontFamily:"Zen Kurenaido, sans-serif" ,fontSize:"60px",margin:"20px auto",textAlign:"center"}}>
           Metaverse
          </s.TextTitle>
        }
        text={ <s.TextDescription style={{color:'var(--color3)' ,fontSize:"22px", lineHeight: '200%' }}>
            What is the metaverse? It's a combination of multiple elements of technology, including virtual reality, 
            augmented reality and video where users "live" within a digital universe.
             <br/>
             The Milky Cows DAO begins utilizing the community vault to buy Land in Metaverse Projects like Sandbox, Decentraland, Bloktopia, etc .
          </s.TextDescription>
          }
        >
        </Banner>
        <s.divider/>
        <Banner
        dir='row'
        al="center"
        title={
          <s.TextTitle style={{ fontWeight:'bold',color:'var(--color3)',fontFamily:"Zen Kurenaido, sans-serif" ,margin:"2% auto",textAlign:"center" ,fontSize:"40px"}}>
           STAKING
          </s.TextTitle>
        }
        text={ <s.TextDescription style={{color:'var(--color3)' ,fontSize:"20px",textAlign:"center" , lineHeight: '200%' }}>
             Milky Cows is the first DAO on Solana Blockchain that purchases and fractionalizes Land 
            in Metaverse and blue chip NFTs like Cyber Kongs , Cool Cats, CryptoPunks
            and more to be distributed to its members.
            <br/>
            In addition, each Milky Cow NFT grants access to the exclusive DAO community and voting rights over the DAO's assets.
            The Milky Cow DAO will provide holders with exclusive access to NFT drops, periodically claimable NFTs, and much more future utility.
            <br/>
            <br/>
          </s.TextDescription>
          }
        >
        </Banner>
      
        <s.divider/>
        <Banner
        dir='row'
        al="center"
        title={
          <s.TextTitle style={{ fontWeight:'bold',color:'var(--color3)',fontFamily:"Zen Kurenaido, sans-serif" ,margin:"0% auto",textAlign:"center" ,fontSize:"40px"}}>
           ROADMAP
          </s.TextTitle>
        }
        >
        </Banner>
        <Roadmap
        per={1}
        title="Genesis"
        text="1000 Genesis Cows will be born. These Cows in the next phases will be able 
        to produce 20 $MILK tokens per day. Utility of the $MILK token will include the 
        following but will not be limited to: Voting Right, Breeding, Vault, Metaverse Lands. 
        next is to Build a Strong Community and talk to the Top Solana Marketplaces to list collection. 
        Furthermore, collaborations with other projects will be one of the top priorities in order to provide more 
        value to the Milky Cows collection . "
        />
         <Roadmap
        per={2}
        title="METAVERSE"
        text="Metaverse is a world in which our day-to-day lives transcend a single reality and includes virtual reality as well . After the Mint time we will buy some lands and items in Metaverse projects like Sandbox, 
        Decentraland, bloktopia and etc . every Milky Cow holder has share in vault .
        Basically the more MILK token you hold, the more weight you have on your votes. We are very glad to see a 
        lot of talented people and those that just want to help this community grow, and Milky Cows DAO will facilitate in 
        getting their voices heard and contributing more to the community. With that said, 50% of secondary sales will be 
        sent to a DAO wallet for the improvement and expansion of the Milky Cows Metaverse ."
        />
         <Roadmap
        per={3}
        title="Staking"
        text="Each Genesis Cow will be able to produce 20 $MILK token per day and the rest of the 
        collection will be able to produce 5 $MILK token per day by Staking. The $MILK token is the utility token that fuels 
        the Milky Cows Ecosystem and presented fractional shares of NFT's held in the vault .  "
        />
         <Roadmap
        per={4}
        title="Breeding"
        text="Milky Cows will be able to breed and give birth to Baby Cows, 
        which will play a role in the scalability of the project. Holders of the Baby Cows will have the 
        same priviledges of the Genesis Cows except for the fact Baby Cows won't produce $MILK tokens .
        Created from mutating the fuzed DNA of two Genesis Cows. Although Baby Cows requires DNA from 
        two separate Genesis Cows to be created, they do not inherit traits from them. Instead, Baby Cows 
        mutate traits of their own, and can even be born with belly and horn colors that are different from 
        their body colors. More will be revealed about Baby Cows as continues studying them over time."
        />
         <Roadmap
        per={"5"}
        title="Beyond"
        text=" As the Milky Cows DAO grows, so will the ideas of the Cows within. 
        The future of the project lies in the hands of its holders.
        new drops for all holders, Metaverse Items, project developments to expand 
        the Milky Cows empire - the possibilities are limitless! Grab your Cow and sit down on 
        your Farm, it’s time to rule the world, MILKY COWS! "
        />
        <s.Container
        flex={2}

        jc={'center'}>
        <img src="./config/images/cow-banner.jpg"
          width='100%'
         
          style={{ paddingTop:"50px"}}
        />
       </s.Container>
       <s.Container 
       flex={2}
       fd={'row'}
        jc={'space-between'}
        ai={'center'}
        test={'var(--color1)'}
        style={{ color:'var(--color3)', height:'150px',padding:'30px'} }>
          
          made by Milky Cows developer team
        
          <Links></Links>
        </s.Container>
      </s.Screen>
    </>
  );
}

export default App;
