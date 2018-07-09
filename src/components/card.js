import React, {Component} from 'react';
import CardLeft from './card-left';
import CardRight from './card-right';

class Card extends Component {
  render() {
    return (
      <div className="app-card">
        <CardLeft />
        <CardRight/>
      </div>
    );
  }
}

export default Card;
