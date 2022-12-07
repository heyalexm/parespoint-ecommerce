import { Facebook, Instagram, Mail, MailOutline, Phone, Room } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    display: flex;

`

const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;`

const SocialIcon = styled.div`
width: 40px;
height:40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
    flex:1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;    
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;    
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
margin-bottom: 20px;
display:flex;
align-items: center;
width: 50%;
`
const Payment =styled.img`
height: 80px;`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ParesPoint.</Logo>
            <Desc>We have the BEST BEEF PARES in TOWN
            We are serving our delectable menus
            at AL FRESCO DINING
            24 HOURS FROM MONDAY- SATURDAY</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon  color="E440BF">
                    <Instagram/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>

            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>
                2172 Chino Roces Ave., Pio del Pilar , Makati City 1230 Makati, Philippines
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/>
                099113123913
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>
                parespoint@gmail.com
            </ContactItem>
            <Payment src="https://www.pngkey.com/png/detail/398-3987066_payment-methods-transparent-trust-badges-shopify.png" />
        </Right>
    </Container>
  )
}

export default Footer