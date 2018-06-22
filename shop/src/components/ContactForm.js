import React, { Component } from 'react';

import { FlexLayout, FormLayout, InputGroup, Label, Input, TextArea, PrimaryButton } from './../styles/components';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        surname: '',
        email: '',
        message: '',
      },
    };
  }

  handleContactForm(e) {
    const { form } = this.state;
    e.preventDefault();
    return form;
  }

  render() {
    const { form } = this.state;
    return (
      <FormLayout>
        <InputGroup>
          <Label>
            Nom
          </Label>
          <Input name="name" placeholder="Ex : Dupont" value={form.name} onChange={e => this.setState({ form: { ...form, name: e.target.value } })} />
        </InputGroup>
        <InputGroup>
          <Label>
            Prénom
          </Label>
          <Input name="surname" placeholder="Ex : Jean" value={form.surname} onChange={e => this.setState({ form: { ...form, surname: e.target.value } })} />
        </InputGroup>
        <InputGroup>
          <Label>
            E-mail
          </Label>
          <Input name="email" placeholder="Ex : prenom@email.com" value={form.email} onChange={e => this.setState({ form: { ...form, email: e.target.value } })} />
        </InputGroup>
        <InputGroup>
          <Label>
            Message
          </Label>
          <TextArea name="message" placeholder="Texte" value={form.message} onChange={e => this.setState({ form: { ...form, message: e.target.value } })} />
        </InputGroup>
        <FlexLayout>
          <PrimaryButton onClick={e => this.handleContactForm(e)}>
            Envoyer
          </PrimaryButton>
        </FlexLayout>
      </FormLayout>
    );
  }
}

export default ContactForm;
