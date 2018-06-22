import React from 'react';

import { BannerLayout } from './../styles/components';

const Banner = props => (
  <BannerLayout background={require(`./../assets/images/${props.img}`)}>
    {props.children}
  </BannerLayout>
);

export default Banner;
