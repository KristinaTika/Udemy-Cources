import React, { Component } from "react";
import "./Recipe.css";
import PropTypes from "prop-types";

class RecipeItem extends Component {
    render() {
        const { title, img, instructions } = this.props;
        const ingredients = this.props.ingredients.map((ing, i) => {
            return <li key={i}>{ing}</li>
        })
        return (
            <div className="recipe-card">
                <div className="recipe-card-image">
                    <img src={img} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title"> {title} </h3>
                    <h4> Ingredients: </h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4> Instructions: </h4>
                    <p>{instructions} </p>
                </div>
            </div>
        );
    }
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    ingredients:PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default RecipeItem;