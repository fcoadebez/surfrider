import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const colors = {
  primary: '#0072bc',
  secondary: '#183b4f',
  dark: '#161616',
  yellow: '#ffcd3a',
};

export const fonts = {
  title: 'Roboto Condensed',
  courant: 'Open Sans',
};

const line = keyframes`
  0%   {
    bottom: 150px;
    opacity: 0;
    height: 0;
  }
  50%  {
    opacity: 1;
  }
  100% {
    bottom: 50px;
    opacity: 0;
    height: 52px;
  }
`;

const lineCollection = keyframes`
  0%   {
    bottom: 0px;
    opacity: 0;
    height: 0;
  }
  50%  {
    opacity: 1;
  }
  100% {
    bottom: -100px;
    opacity: 0;
    height: 52px;
  }
`;

export const AppLayout = styled.div`
width: 96%;
margin: 0 auto;
`;

export const Wrapper = styled.div.attrs({
  width: props => props.width || 100,
})`
width: ${props => (props.width)}%;
margin: 0 auto;
position: relative;
`;

export const BannerLayout = styled.div`
background: url(${props => (props.background)}) no-repeat center;
-webkit-background-size:cover;
background-size:cover;
height: 600px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 40px;
position: relative;
`;

export const ProductItem = styled(Link)`
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${colors.secondary};
  height: 800px;
`;

export const ProductImage = styled.img`
position: relative;
max-width:600px;
max-height:600px;
width: auto;
height: auto;
background-position: 50% 50%;
background-repeat:   no-repeat;
background-size:     cover;
transform: rotate(${props => (props.rotate ? props.reverse ? '10' : '-10' : '0')}deg);
`;

export const ProductImageSmall = ProductImage.extend`
width: 100%;
height: 300px;
object-fit: contain;
`;

export const FormLayout = styled.form`

`;

export const Column = styled.div.attrs({
  col: props => props.col || 6,
  align: props => props.align || 'left',
  gutter: props => props.gutter || 0,
})`
position: relative;
width: ${props => (((props.col / 12) * 100) - props.gutter)}%;
text-align: ${props => (props.align)};
margin: 0px ${props => (props.gutter / 2)}%;
`;

export const FooterText = styled.div`
display: flex;
justify-content: center;
border-top: 1px solid ${colors.secondary};
padding: 20px 0px;
`;

export const InputGroup = styled.div`
display: flex;
flex-direction: column;
max-width: 300px;
`;

export const Label = styled.label`
color: ${colors.secondary};
font-family: ${fonts.title};
margin: 10px 0px;
`;

export const Input = styled.input`
outline: none;
border: 1px solid ${colors.secondary};
padding: 15px;
font-size: 16px;
color: ${colors.secondary};
font-family: ${fonts.title};
&::placeholder {
  font-style: italic;
  color: ${colors.dark};
  opacity: 0.5;
}
`;

export const TextArea = styled.textarea`
outline: none;
border: 1px solid ${colors.secondary};
padding: 15px;
font-size: 16px;
color: ${colors.secondary};
font-family: ${fonts.title};
resize: none;
min-height: 100px;
&::placeholder {
  font-style: italic;
  color: ${colors.dark};
  opacity: 0.5;
}
`;

export const Title = styled.div.attrs({
  size: props => props.size || '24px',
  align: props => props.align || 'left',
})`
font-family: ${fonts.title};
text-align: ${props => props.align};
font-weight: ${props => (props.bold ? 'bold' : 'normal')};
color: ${props => (props.light ? 'white' : colors.dark)};
display: ${props => (props.inline ? 'inline' : 'block')};
font-size: ${props => (props.size)};
text-transform: uppercase;
`;

export const CollectionSubtitle = styled.p`
font-family: ${fonts.courant};
text-align: center;
font-size: 18px;
white-space: pre-wrap;
`;

export const TextBackground = styled.span`
  color: ${colors.primary};
  opacity: 0.1;
  font-size: 12em;
  font-family: ${fonts.title};
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -65%);
`;

export const TextBackgroundImage = TextBackground.extend`
  font-size: 6em;
  left: 0;
  top: 20%;
  right: 0;
  bottom: 0;
  transform: translate(0, 0);
`;

export const Text = styled.div.attrs({
  size: props => props.size || '18px',
  width: props => props.width || 100,
})`
font-family: ${fonts.courant};
font-weight: ${props => (props.bold ? 'bold' : 'normal')};
font-size: ${props => (props.size)};
width: ${props => (props.width)}%;
margin: 20px 0px;
display: inline-block;
`;

export const Nav = styled.nav.attrs({
  direction: props => props.direction || 'row',
  align: props => props.align || 'center',
})`
  display: flex;
  justify-content: space-between;
  flex-direction:  ${props => (props.direction)};
  align-items: ${props => (props.align)};
  font-family: ${fonts.title};
  padding: 30px 0;
`;

export const CollectionLink = styled(Link)`
  color: ${colors.secondary};
  text-decoration: none;
  font-size: 20px;
  padding: 10px 0;
  position: relative;
  transition: all 0.5s ease;
  ${props => (props.reverse ? 'margin-left: 40px' : 'margin-right: 40px')};
  &:hover {
    ${props => (props.reverse ? 'margin-left: 120px' : 'margin-right: 120px')};
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 50px;
    height: 1px;
    ${props => (props.reverse ? 'right: -70px' : 'left: -70px')};
    background-color: ${colors.secondary};
    transition: all 0.5s ease;
  }
  &:hover:after {
    width: 0px;
    ${props => (props.reverse ? 'right: 0' : 'left: 0')};
  }
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    height: 1px;
    background-color: ${colors.secondary};
    width: 0px;
    transition: all 0.5s ease;
    ${props => (props.reverse ? 'left: 0' : 'right: 0')};
  }
  &:hover:before {
    ${props => (props.reverse ? 'left: -70px' : 'right: -70px')};
    width: 50px;
  }
`;

export const NavLinkSecond = styled(Link)`
  color: ${colors.dark};
  text-decoration: none;
  padding: 10px 0;
`;

export const NavLink = styled(Link)`
  color: ${colors.dark};
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
  padding: 10px 0;
`;

export const NavAnchor = styled.a`
  color: ${colors.dark};
  text-decoration: none;
  font-size: 20px;
  text-transform: uppercase;
  padding: 10px 0;
`;

export const PrimaryLink = styled(Link)`
  background-color: ${colors.secondary};
  color: white;
  padding: 20px 40px;
  text-decoration: none;
  margin: 20px 0px;
  font-size: 20px;
  font-family: ${fonts.title};
  font-weight: normal;
  display: inline-block;
`;

export const SecondaryLink = PrimaryLink.extend`
background-color: ${colors.yellow};
color: ${colors.dark};
`;

export const LightLink = PrimaryLink.extend`
background-color: white;
color: ${colors.secondary};
`;

export const PrimaryButton = styled.button`
  background-color: ${colors.secondary};
  color: white;
  padding: 20px 40px;
  margin: ${props => (props.noMargin ? '0px' : '20px 0px')};
  font-size: 20px;
  font-family: ${fonts.title};
  font-weight: normal;
  display: inline-block;
  outline: none;
  cursor: pointer;
  border: none;
`;

export const SecondaryButton = PrimaryButton.extend`
  background-color: ${colors.yellow};
  color: ${colors.secondary};
`;

export const LightButton = PrimaryButton.extend`
  background-color: white;
  color: ${colors.secondary};
`;

export const SimpleButton = styled.button.attrs({
  size: props => props.size || '24px',
})`
  padding: 10px 0px;
  background-color: ${colors.title};
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  font-family: ${fonts.title};
  outline: none;
  cursor: pointer;
  font-size: ${props => props.size};
  span {
    vertical-align: middle;
  }
`;

export const InputButton = PrimaryButton.extend`
margin: 0px;
padding: 14px 15px;
border: none;
vertical-align: bottom;
font-size: 19px;
`;

export const Logo = styled.img.attrs({
  size: props => props.size || '200px',
})`
width: ${props => (props.size)};
`;

export const VerticalLine = styled.span`
  position: absolute;
  height: 200px;
  width: 2px;
  background-color: ${colors.secondary};
  left: 49%;
  bottom: -250px;
  animation: ${props => (props.collection ? lineCollection : line)} 2s infinite linear;
`;

export const SizeSelect = styled.span`
  padding: 5px;
  box-sizing: border-box;
  margin: 10px;
  ${props => (props.selected ? `padding: 4px;border: 1px solid ${colors.secondary};` : '')};
  cursor: pointer;
  &:hover {
    padding: 4px;
    border: 1px solid ${colors.secondary};
  }
`;

export const FlexLayout = styled.div.attrs({
  vertical: props => props.vertical || 'center',
})`
padding: 20px 0px;
display: flex;
justify-content: space-between;
align-items: ${props => props.vertical};
flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
margin: 0 auto;
${props => (props.width ? (`width: ${props.width}`) : '')};
`;

export const ProductLayout = FlexLayout.extend`
margin: 300px 0px;
justify-content: space-around;
`;

export const CatalogLayout = FlexLayout.extend`
margin: 100px 0px;
justify-content: flex-start;
align-items: flex-start;
flex-wrap: wrap;
`;
