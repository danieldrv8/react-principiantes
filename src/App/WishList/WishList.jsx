import React from "react";
import PropTypes from 'prop-types';
import WishItem from "./WishItem";

const WishList = ({ wishes, onWishesChange }) => (
    <ul className="wish-list">
      {wishes.map(({ done, text }, i) => (
        <WishItem 
        done={done} 
        text={text} 
        id={`wish${i}`} 
        key={text} 
        onDoneChange={(value) => {
          const updatedWishes = {...wishes};
          updatedWishes[i].done = value;
          onWishesChange(updatedWishes);
        }}/>
      ))}
    </ul>
)

WishList.propTypes = {
    wishes: PropTypes.arrayOf(PropTypes.shape(WishItem)),
    onWishesChange: PropTypes.func,
}

WishList.defaultProps = {
    wishes: [],
    onWishesChange: () => {},
}

export default WishList;