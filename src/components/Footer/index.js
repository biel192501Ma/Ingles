import { Box, Container, SubTitle, Title } from "../../css/global";


import mouse from '../../Assents/mouse.svg'
import time from '../../Assents/time.svg'
import phone from '../../Assents/phone.svg'
import whatsverm from '../../Assents/whatsverm.svg'
import instaverm from '../../Assents/instaverm.svg'
import faceverm from '../../Assents/faceverm.svg'
import emailverm from '../../Assents/emailverm.svg'
import bordasocial from '../../Assents/bordasocial.svg'
import bordasocial2 from '../../Assents/bordasocial.svg'
import bordasocial3 from '../../Assents/bordasocial.svg'
import bordasocial4 from '../../Assents/bordasocial.svg'




const Footer =()=>{
    const Handlewhats =()=>{
        window.location.href="https://api.whatsapp.com/send?phone=5566984018920&text=ol%C3%A1%20%2C%20tudo%20bem%3F%20quero%20saber%20mais%20sobre%20o%20m%C3%A9todo%20de%20ingl%C3%AAs"
    }
return(
    
    <Container color="blue" height={70} width={107.9} className="ContainerFooter"  row>
        <Box left={4} top={5}>
            <Title color="danger" className="Titlefooter" size={3} >WISER SCHOOL</Title>
            <SubTitle color="gray" className="Titlefooter" size={3}>TODOS OS DIREITOS RESERVADOS</SubTitle>
        </Box>
        <Box left={5} top={5} className="box1titlefooter2"  >
            <Box row  aling="center">
        <img src={mouse}  height={7} width={7}  className="imgfooter"/>
          <Title color="gray" className="Titlefooter2" size={3} paddingLeft={5}>www.wiserschool.com.br</Title>
            </Box>
            <Box row top={5}  aling="center" className="boxtitlefooter2"  >
        <img src={time} height={7} width={7} className="imgfooter" />
          <Title color="gray" className="Titlefooter2" size={3}  paddingLeft={5}>Estamos online 24h, 7 dias da semana</Title>
            </Box>
            <Box row  top={5} aling="center"  className="boxtitlefooter2"  >
        <img src={phone} height={7} width={7}  className="imgfooter"/>
          <Title color="gray" className="Titlefooter2" size={4}  paddingLeft={5}>(00) 0 0000-0000</Title>
            </Box>
        </Box>
        <Box >
            <img src={bordasocial} className="bordasocial"/>
            <img src={bordasocial2} className="bordasocial2" />
            <img src={bordasocial3}  className="bordasocial3"/>
            <img src={bordasocial4}  className="bordasocial4"/>

            <img src={faceverm} className="faceverm"/>
            <img src={instaverm} className="instaverm" />
            <img src={whatsverm}  className="whatsverm" onClick={Handlewhats} />
            <img src={emailverm}  className="emailverm"/>
        </Box>
        

    </Container>
)
}

export default Footer;