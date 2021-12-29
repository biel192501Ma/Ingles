import { Box, Container, SubTitle, Title } from "../../css/global";

import homemheader from '../../Assents/homemheader.png'

import meialua from '../../Assents/meialua.png'
import elipse from '../../Assents/Elipse.svg'
import elipse2 from '../../Assents/Elipse.svg'
import elipsegray from '../../Assents/Elipsegray.png'
import poligonowhite from '../../Assents/Poligonowhite.png'
import retanguloblue from '../../Assents/Retanguloblue.png'
import circlewhite from '../../Assents/circlewhite.png'
import circlewhite2 from '../../Assents/circlewhite.png'
import circlewhite3 from '../../Assents/circlewhite.png'
import face from '../../Assents/facebook.png'
import insta from '../../Assents/insta.png'
import whats from '../../Assents/whats.svg'
import poligonoleft from '../../Assents/poligonoleft.svg'
import poligonorigth from '../../Assents/poligonorigth.svg'
import retanguloverm from '../../Assents/Retanguloverm.svg'
import retangulogray from '../../Assents/Retangulogray.svg'


const Header = () =>{
    const Handlewhats =() =>{
       window.location.href="https://api.whatsapp.com/send?phone=5566984018920&text=ol%C3%A1%20%2C%20tudo%20bem%3F%20quero%20saber%20mais%20sobre%20o%20m%C3%A9todo%20de%20ingl%C3%AAs"
    }
  return(




  <Container  row top={2} className="boxwhiteheader" >
      <Box   className="boxtitleheader"  >
      <img src={elipse2} className="elipse2"  />
          <img src={poligonoleft} className="poligonoleft"  />
          <img src={poligonorigth} className="poligonorigth"  />
          <img src={retangulogray} className="retangulogray"  />
          <img src={retanguloverm} className="retanguloverm"  />
         <Title size={13} color="danger" className="titleheader" >Seu inglês <br/> sem limites !</Title>
         <Box  >
             <SubTitle size={7}  color="blue"  className="subtitleheader">
             Aqui na Wiser School você aprenderá na prática como interagir em inglês com outras pessoas, com aulas 100% focadas em conversação.
             </SubTitle>
             <button className="btnHeader" onClick={Handlewhats}  >Desejo saber mais!</button>
         </Box>
      </Box >
      <Box id="linearHeade" >
      <img src={homemheader} className="homemheader" />
      <img src={meialua} className="meialua" />
      <img src={elipse} className="elipseheader" />
      <img src={elipsegray} className="elipsegray" />
      <img src={poligonowhite} className="poligonowhite" />
      <img src={retanguloblue} className="retanguloblue" />
      <img src={circlewhite} className="circlewhite" />
      <img src={circlewhite2} className="circlewhite2" />
      <img src={circlewhite3} className="circlewhite3"/>
      <img src={face} className=" face" />
      <img src={insta} className=" insta" />
      <img src={whats} className=" whats " onClick={Handlewhats}  />

       <Box row top={-90} left={-110}  className="boxmenu" >
           <Title size={5} color="danger" className="menu" >Inicio</Title>
           <Title size={5} paddingLeft={7} color="gray"  className="menu"  >Sobre</Title>
           <Title size={5}  paddingLeft={7} color="gray" className="menu"  >Professores</Title>
           <Title size={5}  paddingLeft={7} color="gray"  className="menu" >Aulas</Title>
           <Title size={5}  paddingLeft={7} color="gray" className="menu"  >Contatos</Title>
       

       </Box>

      </Box>

  </Container>
  )
}

export default Header;