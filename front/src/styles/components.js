import styled from 'styled-components';

const colors = {
  primary: '#861657',
  white: '#f2f2f2',
  dark: '#464545',
};

export const FilterButton = styled.div.attrs({
  bg: props => props.bg || 'transparent',
})`
padding: 7px 15px;
border-radius: 25px;
font-weight: 300;
border: 1px solid #ddd;
box-shadow: 0 3px 0 #ddd;
cursor: pointer;
transition: all .2s ease;
color: ${props => (props.selected ? colors.white : colors.dark)};
background-color: ${props => props.bg};
`;

export const MarkerDetails = styled.span`
font-weight: bold};
`;

export const MarkerDetailsContainer = styled.span`
display: block;
`;

export const MarkerDetailsButton = styled.span`
display: flex;
justify-content: flex-end;
margin-top: 20px;
color: ${colors.primary};
font-weight: bold;
cursor: pointer;
font-size: 18px;
`;
