import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

import { Column, Title, FlexLayout, NavLink, NavLinkSecond, NavAnchor, Nav, FooterText, InputGroup, Label, Input, InputButton } from './../styles/components';
import ContactForm from './ContactForm';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleEmailNewsletter() {
    const { email } = this.state;
    console.log(email);
  }

  render() {
    const { email } = this.state;
    return (<footer>
      <FlexLayout vertical="baseline">
        <Column col={4} gutter={8}>
          <Title bold>Site</Title>
          <Nav direction="column" align="left">
            <NavLink to="/hommes">
              Homme
            </NavLink>
            <NavLink to="/femmes">
              Femme
            </NavLink>
            <NavLink to="/accessoires">
              Accessoires
            </NavLink>
            <NavLink to="/nos-engagements">
              Nos engagements
            </NavLink>
          </Nav>
          <Nav>
            <NavAnchor href="https://facebook.com">
              <FontAwesome.FaFacebook size={26} />
            </NavAnchor>
            <NavAnchor href="https://twitter.com">
              <FontAwesome.FaTwitter size={26} />
            </NavAnchor>
            <NavAnchor href="https://youtube.com">
              <FontAwesome.FaYoutube size={26} />
            </NavAnchor>
            <NavAnchor href="https://google.com">
              <FontAwesome.FaGooglePlus size={26} />
            </NavAnchor>
            <NavAnchor href="https://instagram.com">
              <FontAwesome.FaInstagram size={26} />
            </NavAnchor>
          </Nav>
        </Column>
        <Column col={4} gutter={8}>
          <Title inline>Nous
            <Title bold inline> contacter</Title>
          </Title>
          <ContactForm />
        </Column>
        <Column col={4} gutter={8}>
          <Title inline>{'S\'inscrire'} à notre
            <Title bold inline> newsletter</Title>
          </Title>
          <InputGroup>
            <Label>
              Adresse e-mail
            </Label>
            <div>
              <Input name="email" placeholder="Ex : prenom@email.com" value={email} onChange={e => this.setState({ email: e.target.value })} />
              <InputButton onClick={() => this.handleEmailNewsletter()}>
                OK
              </InputButton>
            </div>
          </InputGroup>
        </Column>
      </FlexLayout>
      <FooterText>
        <span>
          <NavLinkSecond to="/mentions-legales">
            Mentions légales
          </NavLinkSecond>
        </span>
        <span>
          <NavLinkSecond to="/cgv">
            - CGV
          </NavLinkSecond>
        </span>
        <span>
           - Surfrider Foundation Europe © 2018
        </span>
      </FooterText>
    </footer>
    );
  }
}

export default Footer;
