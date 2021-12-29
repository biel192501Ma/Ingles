import styled from 'styled-components'
import theme from '../Assents/theme.json'

import comunicacao from '../Assents/comunicacao.jpg'
import bg2 from '../Assents/bg2.png'

export  const Container = styled.div`
background-color:${({color}) => theme.colors[color || 'primary']  };
 width :${({width}) =>  width ? width : 'auto'   }%;
 height :${({height}) =>  height ? height : 'auto'   }px;
 margin-Left: ${({left}) =>  left ? 8 : 0  }%;
 margin-right: ${({right}) =>  right ? 8 : 0   }%;
 margin-top: ${({top}) =>  top ? top : 0  }%;
 padding-top: ${({paddingTop}) =>  paddingTop ? paddingTop : 0  }px;
 display:${({row}) =>  row ? "flex" : "colum"  } ;
 justify-content:${({justify}) =>  justify ? justify : ""  } ;
`;
export  const Quadrado = styled.div`
background-color:${({color}) => theme.colors[color || 'dark']  };
 width :${({width}) =>  width ? width : 'auto'   }px;
 height :${({height}) =>  height ? height : 'auto'   }px;
 margin-Left: ${({left}) =>  left ? left : 0  }%;
 margin-top: ${({top}) =>  top ? top : 0  }%;
 margin-right: ${({right}) =>  right ? right : 0   }%;
 padding-top: ${({paddingTop}) =>  paddingTop ? paddingTop : 0  }px;
 display:${({row}) =>  row ? "flex" : "colum"  } ;
 justify-content:${({justify}) =>  justify ? justify : ""  } ;
 align-items:${({aling}) =>  aling ? aling : ""  } ;
 border: 1px solid #f3f3f3;
 opacity: 0.5;
 
 transition: 0.9s  ease;
 
 z-index: ${({index}) =>  index ? index : ''   } ;
`;
export const Bgimg= styled.div`
 width :${({width}) =>  width ? width : 'auto'   }px;
 height :${({height}) =>  height ? height : 'auto'   }px;
 margin-top: ${({top}) =>  top ? top : 0  }%;
background-image: url(${comunicacao}) ;
 background-size: cover;

`;
export const Bgimg2= styled.div`
 width :${({width}) =>  width ? width : 'auto'   }px;
 height :${({height}) =>  height ? height : 'auto'   }px;
 margin-top: ${({top}) =>  top ? top : 0  }%;
background-image: url(${bg2}) ;
 background-size: cover;

`;


export  const Box = styled.div`
background-color:${({color}) => theme.colors[color || 'primary']  };
 width :${({width}) =>  width ? width : 'auto'   }px;
 height :${({height}) =>  height ? height : 'auto'   }px;
 margin-Left: ${({left}) =>  left ? left : 0  }%;
 margin-top: ${({top}) =>  top ? top : 0  }%;
 margin-right: ${({right}) =>  right ? right : 0   }%;
 padding-top: ${({paddingTop}) =>  paddingTop ? paddingTop : 0  }px;
 display:${({row}) =>  row ? "flex" : "colum"  } ;
 justify-content:${({justify}) =>  justify ? justify : ""  } ;
 align-items:${({aling}) =>  aling ? aling : ""  } ;
 transition: 0.9s  ease;
 
 z-index: ${({index}) =>  index ? index : ''   } ;
`;
export const Title = styled.h1`
color:${({color}) => theme.colors[color || 'dark']  };
font-size:${({size}) =>  size ? size : ''   }px; 
padding-left: ${({paddingLeft}) =>  paddingLeft ? paddingLeft : 0  }px;
font-family:'Ubuntu';
margin-Left: ${({left}) =>  left ? left : 0  }%;
text-align:${({text}) =>  text ? text : ""  } ;

`;
export const SubTitle = styled.h5`
opacity: 0.5;
color:${({color}) => theme.colors[color || 'blue']  };
font-size:${({size}) =>  size ? size : ''   }px; 
font-family:'Ubuntu ';
margin-Left: ${({left}) =>  left ? left : 0  }%;
text-align:${({text}) =>  text ? text : ""  } ;

`;