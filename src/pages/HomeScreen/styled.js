import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  padding:15px;
  `;
  
export const CategoryArea = styled.div`
  color:#FFF;
  margin-top:20px;
`;

export const CategoryList = styled.div`
  display:flex;
  margin-top:10px;

  @media(max-width:460px) {
    display:grid;
    grid-template-columns:100px 100px;
    grid-gap:15px;
    justify-content:center;
  }

`;

export const ProductArea = styled.div`
  margin-top:20px;
  margin-bottom:20px;

  @media(max-width:910px) {
    margin-bottom:20px;
  }

  @media(max-width:630px) {
    max-width:80vw;
    display:flex;
    justify-content:center;
  }

  @media(max-width:460px) {
    max-width:30vw;
    display:flex;
    justify-content:left;
  }
`;

export const ProductList = styled.div`
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  grid-gap:15px;

  @media(max-width:910px) {
    grid-template-columns:repeat(2, 1fr);
  }

  @media(max-width:630px) {
    grid-template-columns:1fr;
  }
`;

export const ProductPaginationArea = styled.div`
  display:flex;
  flex-wrap:wrap;
  margin-top:20px;
`;
  
export const ProductPaginationItem = styled.div`
  background-color:${props => props.active === props.current ? '#CCC': '#FFF'};
  padding:5px 10px;
  border-radius:5px;
  box-shadow:0 3px 6px rgba(0, 0, 0, 0.16);
  cursor:pointer;
  margin-right:10px;

  @media(max-width:910px) {
    margin-bottom:40px;
  }

  @media(max-width:410px) {
    margin-bottom:70px;
  }
`;