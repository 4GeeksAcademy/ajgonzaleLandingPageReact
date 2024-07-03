import React from "react";
import PropTypes from 'prop-types';

//include images into your bundle
import image from "../../img/500x325.png";

const Card = (props) => {

   let height = {
    height: "230px"
   }
    
  return (
    <div className="card text-center">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body justify-content-center" style={height} >
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
        </div>
        <div className="card-footer text-body-secondary bg-white">            
            <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
    </div>
  );
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default Card;