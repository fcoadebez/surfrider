import React from 'react';
import Lottie from 'react-lottie';
import styled, { keyframes } from 'styled-components';

import * as animationData from './../assets/loader.json';
import { colors, fonts } from './../styles/components';

const dot = keyframes`
  0%   {
    opacity: 0.8;
  }
  50%  {
    opacity: 0.2;
  }
  100% {
    opacity: 0.8;
  }
`;

const DotContainer = styled.div`
  display: flex;
  margin: 20px 0px;
`;

const Dot = styled.span`
  background-color: ${colors.secondary};
  height: 10px;
  width: 10px;
  border-radius: 100%;
  animation: ${dot}  2s infinite linear;
  animation-delay: ${props => (props.start ? props.start : '0')}s;
  margin: 0px 10px;
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextLoader = styled.span`
  width: 100%;
  font-family: ${fonts.title};
  color: ${colors.secondary};
  text-align: center;
  font-size: 24px;
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Loader = () => (
  <LoaderContainer>
    <Lottie
      options={defaultOptions}
      height={300}
      width={300}
    />
    <TextLoader>
      Chargement
    </TextLoader>
    <DotContainer>
      <Dot />
      <Dot start={0.4} />
      <Dot start={0.8} />
    </DotContainer>
  </LoaderContainer>
);

export default Loader;
