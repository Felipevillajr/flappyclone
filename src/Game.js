import React, { Component } from "react";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      bird: {
        x: 50,
        y: 50 / 2,
        radius: 20,
      },
    };
  }

  draw = () => {
    const ctx = this.myRef.canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(
      this.state.bird.x,
      this.state.bird.y,
      this.state.bird.radius,
      0,
      2 * Math.PI
    );
    ctx.fill();
    ctx.stroke();
  };

  render() {
    return (
      <div>
        <canvas ref="canvas" width={450} height={650} />
      </div>
    );
  }
}
