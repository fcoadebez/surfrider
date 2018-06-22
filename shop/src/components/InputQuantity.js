import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Input, colors } from './../styles/components';

const Container = styled.div`
  position: relative;
  padding: 0px 20px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const Button = styled.button`
  background-color: ${colors.secondary};
  color: white;
  outline: none;
  border: none;
  height: 50%;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
`;

class InputQuantity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }

  handleChangeQuantity(qte = null) {
    const { quantity } = { quantity: qte } || this.state;
    const { changeQuantity } = this.props;
    if (Number.isInteger(quantity)) {
      changeQuantity(quantity);
    } else {
      this.setState({ quantity: 1 });
      changeQuantity(1);
    }
  }

  handleInputChange(e) {
    const value = parseInt(e.target.value, 10);
    this.setState({ quantity: value });
    this.handleChangeQuantity(value);
  }

  handleButtonQuantity(qte) {
    if (this.state.quantity + qte > 0) {
      this.setState({ quantity: (this.state.quantity + qte) });
      this.handleChangeQuantity(this.state.quantity + qte);
    }
  }

  render() {
    const { quantity } = this.state;
    return (
      <Container>
        <Input style={{ maxWidth: '50px', padding: '22px' }} min={1} name="quantity" type="number" value={quantity} onChange={e => this.handleInputChange(e)} />
        <ButtonContainer>
          <Button onClick={() => this.handleButtonQuantity(1)}>
            +
          </Button>
          <Button onClick={() => this.handleButtonQuantity(-1)}>
            -
          </Button>
        </ButtonContainer>
      </Container>
    );
  }
}

InputQuantity.propTypes = {
  changeQuantity: PropTypes.func.isRequired,
};

export default InputQuantity;
