
import styled from 'styled-components';

const Nav = styled.div`
position:sticky;
width:100%;
height:30%;

display:flex;
align-items:center;
justify-content:space-between;

background-color:#eae7c4;
padding:10px;
top:0;
z-index:10;
`
const Title = styled.span`
font-weight:600px;
margin-left:20px;
font-size:larger;
`
const CartContainer = styled.div`
position:relative;
cursor:pointer;

`

const CartImg = styled.img`
width:40px;
height:40px;
margin-right:20px;
`
const CartCount = styled.div`
position:absolute;
font-size:smaller;
display:${(props)=>props.show?"flex":"none"};
align-items:center;
justify-content:center;
background-color:white;
width:15px;
height:15px;
border-radius:50%;
padding:2px;
left:50%;
top:0;

`
function Navbar (props){

        const {show , count} = props;
        return(
            <>
                <Nav>
                <Title>title</Title>
                <CartContainer>
                    <CartImg src="https://cdn-icons-png.flaticon.com/128/1170/1170576.png"/>
                    <CartCount show={show}>{count}</CartCount>
                </CartContainer>
                </Nav>
            </>
        )
    
}

export default Navbar;