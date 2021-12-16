import styled from "styled-components";

export const Container = styled.div`
  width:610px; 
  padding:10px;
  background-color:#FFF;
  border-radius:15px;
  box-shadow:0 3px 6px rgba(0, 0, 0, 0.16);
  color:#136713;
  display:flex;
  flex-direction:column;

  @media(max-width:670px) {
    width:500px;
  }

  @media(max-width:550px) {
    width:400px;
  }

  @media(max-width:450px) {
    width:300px;
  }
  `;
  
export const ProductAreaModal = styled.div`
  display:flex;
`;

export const ProductButtonsModal = styled.div`
  margin:10px 0 5px 0;
  display:flex;
  justify-content:flex-end;  
  align-items:flex-end;  
`;

export const ProductPhotoModal = styled.img`
  width:310px;
  border-radius:10px;

  @media(max-width:670px) {
    width:250px;
  }

  @media(max-width:550px) {
    width:180px;
  }

  @media(max-width:450px) {
    width:130px;
  }
`;

export const ProductInfoAreaModal = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  margin-left:10px;

`;

export const ProductDetails = styled.div`
  line-height:30px;

  @media(max-width:550px) {
    line-height:25px;
  }

  @media(max-width:450px) {
    line-height:20px;
  }
`;


export const ProductQuantityAreaModal = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

export const ProductPriceModal = styled.div`
  color:#073C07;
  font-weight:bold;
  font-size:20px;
  margin:0 10px;

  @media(max-width:450px) {
    font-size:15px;
  }
`;

export const ProductNameModal = styled.div`
  font-size:30px;
  font-weight:bold;

  @media(max-width:550px) {
    font-size:25px;
  }

  @media(max-width:450px) {
    font-size:20px;
  }
`;

export const ProductIngredientsModal = styled.div`
  font-size:14px;
`;

export const ProductButton = styled.button`
  border:${props => props.small ? '1px solid #999' : '0' };
  background-color:${props => props.small ? 'transparent' : '#073C07' };
  box-shadow:4px 5px 0px #999;
  color:${props => props.small ? '#999' : '#FFF' };
  font-size:22px;
  font-weight:bold;
  padding:${props => props.small ? '3px 10px' : '10px 20px' };
  margin-left:10px;
  border-radius:5px;
  cursor:pointer;

  @media(max-width:450px) {
    padding:${props => props.small ? '2px 5px' : '10px 14px' };
    font-size:16px;
  }
`;

export const ProductQtModal = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:#073C07;
  box-shadow:4px 5px 0px #999;
  width:90px;
  height:30px;
  border-radius:5px;


  @media(max-width:450px) {
    width:70px;
    height:22px;
    font-size:14px;
  }
`
export const ProductMinusQt = styled.img`
  width:20px;
  cursor:pointer;

  @media(max-width:450px) {
    width:16px;
  }
`;

export const ProductPlusQt = styled.img`
  width:20px;
  cursor:pointer;

  @media(max-width:450px) {
    width:16px;
  }
`;

export const ProductTextQt = styled.div`
  color:#FFF;
  font-weight:bold;
  font-size:20px;
  margin:0 10px;


  @media(max-width:450px) {
    font-size:16px;
  }
`;

         