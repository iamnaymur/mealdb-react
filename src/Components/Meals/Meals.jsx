import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import SingleMeal from "../SingleMeal/SingleMeal";
import "./Meals.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [order, setOrder] = useState([]);
  console.log(order);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  const mealAdd = (meal) => {
    // console.log(meal);
    // if (!order.includes(meal.strMeal)) {
    //    const newOrder = [...order, meal.strMeal];
    //    setOrder(newOrder);
    // }

    const alreadyAdded = order.find((md) => md.idMeal === meal.idMeal);
    if (!alreadyAdded) {
      const newOrder = [...order, meal];
      setOrder(newOrder);
    } else {
      toast("already added,try a new one");
    }
  };
  return (
    <div className="shop-container d-flex">
      <div className="foods-container row row-cols-1 row-cols-md-3 g-4">
        {meals.map((meal) => (
          <SingleMeal
            meal={meal}
            mealAdd={mealAdd}
            key={meal.idMeal}
          ></SingleMeal>
        ))}
      </div>
      <div className="order-container">
        <h4>order summary</h4>

        {/* <p>Item name:{order}</p> */}
        {order.map((meal) => (
          <div>
            <p className="text-danger border">Meal name: {meal.strMeal}</p>
            <p>Order Id: {meal.idMeal}</p>
          </div>
        ))}
        <button className="btn btn-info">
          Order Checkout <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
    </div>
  );
};

export default Meals;
