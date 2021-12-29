import {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Bgimg, Bgimg2, Box, Container, Quadrado, SubTitle, Title } from "../../css/global";


import Header from "../../components/Header";
import Footer from "../../components/Footer";

import estudanteverm from '../../Assents/estudanteverm.jpg'
import professora from '../../Assents/professora.jpg'
import professor1 from '../../Assents/professor1.jpg'
import professor2 from '../../Assents/professor2.jpg'
import professor3 from '../../Assents/professor3.jpg'
import professor4 from '../../Assents/professor4.jpg'
import number1 from '../../Assents/number1.svg'
import number2 from '../../Assents/number2.svg'
import number3 from '../../Assents/number3.svg'
import number4 from '../../Assents/number4.svg'
import direitora from '../../Assents/direitora.jpg'

import elipse from '../../Assents/Elipse.svg'
import circle from '../../Assents/circul.svg'
import circleblue from '../../Assents/circleblue.svg'
import quadrado from '../../Assents/quadrado.svg'
import poligono2 from '../../Assents/Polígono2.svg'
import poligono3 from '../../Assents/Polígono3.svg'
import poligono4 from '../../Assents/Polígono4.svg'
import poligonoverm from '../../Assents/Polígonoverm.svg'
import retangulorosa from '../../Assents/Retângulorosa.svg'
import retangulorosa2 from '../../Assents/Retângulorosa2.svg'
import retangulo3 from '../../Assents/Retângulo3.svg'




const Home = () =>{
useEffect(()=>{
Aos.init({duration: 2000})
}, [])

const Handlewhats =() =>{
   window.location.href="https://api.whatsapp.com/send?phone=5566984018920&text=ol%C3%A1%20%2C%20tudo%20bem%3F%20quero%20saber%20mais%20sobre%20o%20m%C3%A9todo%20de%20ingl%C3%AAs"
}
return(
   <>
   <Header/>
   
    <Container row top={3} className="containehome" >
       <Box data-aos="fade-right"   left={-3} top={-3}>
     

          <img src={estudanteverm} height={200} width={170} className="estudanteverm" />
       
       </Box>
       <Box left={5} top={-3}  data-aos="fade-left"  > 


          <Title color="blue" size={15} className="titleestudanteverm" >Sobre a <br/> Wizer School</Title>
          <SubTitle  size={8} className="subtitleestudanteverm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
<br/>
<br/>
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. is simply dummy text of the printing and typesetting industry.</SubTitle>
       
       </Box>
     
    </Container>



<Container row >
   <Container   >

<Box left={2} top={-3} data-aos="fade-right"  >
<img className="poligono2"  src={poligono2} />
<img className="quadrado2"  src={quadrado} />
<img className="circle"  src={circle} />
   <img className="elipse"  src={elipse} />


   <Title color="blue" size={15} className="titleprofessor" >Nossos <br/>Professores</Title>
   <SubTitle  size={6}  className="subtitleprofessor" >
   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. is simply dummy text of the printing and typesetting industry.
<br/>
<br/>
</SubTitle>
   
</Box>
<Container row   >
<Box  > 


   <Box data-aos="fade-left" >
      <img  src={professor1}  className="imgteacher"/>
   </Box>
   <Box data-aos="fade-left">
   <SubTitle size={4} text="center"  className="teachername">Robert Smith</SubTitle>
   </Box>

 
</Box>

<Box  data-aos="fade-left"> 

   <Box>
      <img src={professor2}   className="imgteacher"/>
   </Box>
   <Box>
   <SubTitle  size={4} text="center"  className="teachername">Helena Wilson</SubTitle>
   </Box>

 
</Box>

<Box data-aos="fade-left"  > 

   <Box>
      <img src={professor3}   className="imgteacher"/>
   </Box>
   <Box>
   <SubTitle   size={4} text="center" className="teachername"  >Norah Davis</SubTitle>
   </Box>
 

</Box>

<Box   data-aos="fade-left">

   <Box>
      <img src={professor4}   className="imgteacher"/>
   </Box>
   <Box>
   <SubTitle   size={4} text="center"  className="teachername" >Michael Miller</SubTitle>
   </Box>

</Box>
</Container>

   
   </Container>

<Box  right={-2} top={-2}>
  

   <img src={professora} height={200} width={148.9} className="professora" />
   
</Box>
</Container>


<Container row >
<Box  left={-3} top={-1.5}>
   <img  src={retangulorosa} className="retangulorosa"/>
   <img  src={retangulorosa2} className="retangulorosa2"/>
   <img  src={poligonoverm} className="poligonoverm"/>
   <Bgimg index={-3} height={293} width={170.5} className="bgimg" data-aos="fade-right" >
   <br/>
   <br/>
    <Quadrado  color="transparent" height={190} width={140} className="bgquadrado"  >
  
       <Title color="blueclare" data-aos="fade-right"  size={20}   text="left" className="textbgimg">

       Conheça um pouco sobre nossas aulas e metodologia de ensino
       </Title>
    
    </Quadrado>

     

   </Bgimg>

   
  
</Box >
<Box left={5} top={8} >
<img src={circleblue}  className="circleblue"/>
<img src={poligono3}  className="poligono3"/>
<img src={poligono4}  className="poligono4"/>
<img src={retangulo3}  className="retangulo3"/>
   <Box >
      <Title data-aos="fade-down"  color="blueclare" className="textnumber1">Você se <br/> cadastra na <br/> plataforma </Title>
  <img src={number1}  className="number1"/>

   </Box>

   <Box>
  <img src={number2}  className="number2"/>
  <Title data-aos="fade-down"  color="blueclare" className="textnumber2">Você   <br/>realiza um  <br/> teste de nível</Title>
   </Box>

   <Box>
  <img src={number3}  className="number3"/>
  <Title data-aos="fade-down"  color="blueclare" className="textnumber3">Você marca <br/> as aulas ao vivo<br/> de acordo com <br/> o seu nível</Title>
   </Box>

   <Box>
  <img src={number4}  className="number4"/>
  <Title data-aos="fade-down"  color="blueclare" className="textnumber4">Após <br/>concluir um<br/>  nível, você ganha <br/> o seu Certificado </Title>
   </Box>
  
</Box>

</Container>
<Container row >


   <Bgimg2 width={160} height={170.5} className="bgimg2" data-aos="fade-left"  >
     <Title size={11}  className="titleinput"> Gostou ?<br/> entre em contato.</Title>

    <input placeholder=" Nome completo" className="input1"/>
    <input placeholder=" Email" className="input1"/>
    <Box row>
       <Box>
          <input placeholder=" (00) 0 0000-0000" className="input2"/>
       </Box>
       <Box>
          <input placeholder=" Cidade" className="input2"/>
       </Box>

    </Box>
    <button className="btn-input" onClick={Handlewhats}>enviar mensagem</button>
   </Bgimg2>
 

   <img data-aos="fade-right"  src={direitora}  width={162} height={170.5}  className="direitora"/>
   
  
</Container>


<Footer/>
</>
)


}



export default Home;