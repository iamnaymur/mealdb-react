import React from 'react';
import './SingleMeal.css'

const SingleMeal = (props ) => {
  // console.log(props)
  const { strMeal, strMealThumb, strInstructions } = props.meal;
  const mealAdd = props.mealAdd;
  

    return (
      <div className="col">
        <div className="card">
          <img className="food-image img-fluid" src={strMealThumb} alt="" />
          <div className="card-body ">
            <h5 className="card-title">{strMeal}</h5>
            <p className="card-text">{strInstructions.slice(0, 300)}...</p>
            <a href="#" className="btn btn-primary" onClick={()=>mealAdd(props.meal)}>
              Add to cart button.
            </a>
          </div>
        </div>
      </div>
    );
};

export default SingleMeal;