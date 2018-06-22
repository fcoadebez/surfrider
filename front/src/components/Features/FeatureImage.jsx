import React, { Component } from "react";
import "./feature.less";
import Plx from "react-plx";

export default class FeatureImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: []
    };
  }

  componentWillMount = () => {};

  render() {
    console.log(this.props.image)
    return (
      <div className="feature_images">
        {this.props.image && this.props.image.map((image, index) => {
          let blocElements = [];
          if (index == 0) {
            blocElements.push(
              <Plx
                className="imageParallax"
                key={index}
                parallaxData={[
                  {
                    start: this.props.scrollTop-400,
                    end: this.props.scrollTop,
                    properties: [
                      {
                        startValue: 0,
                        endValue: 1,
                        property: "opacity"
                      },
                      {
                        startValue: 130,
                        endValue: 80,
                        property: "translateY"
                      }
                    ]
                  }
                ]} // your parallax effects, see beneath
              >
                <img src={image.image.url} />
              </Plx>
            );
          } else {
            blocElements.push(
              <Plx
                key={index}
                className="imageParallax"
                parallaxData={[
                  {
                    start: this.props.scrollTop-400,
                    end: this.props.scrollTop,
                    properties: [
                      {
                        startValue: 0,
                        endValue: 1,
                        property: "opacity"
                      },
                      {
                        startValue: 80,
                        endValue: 120,
                        property: "translateY"
                      }
                    ]
                  }
                ]} // your parallax effects, see beneath
              >
                <img src={image.image.url} />
              </Plx>
            );
          }

          return blocElements;
        })}
      </div>
    );
  }
}
