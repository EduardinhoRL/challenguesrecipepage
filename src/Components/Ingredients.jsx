import React from 'react'
import ListIngredient from './ListIngredient'

import styled from 'styled-components'

const Wrapper = styled.div`

    @media only screen and (max-width: 1024px) {
        grid-template-areas: ingredients;      
    }

    h2 {
        font-family: 'Playfair Display', serif;
    }

    i {
        font-family: 'Playfair Display', serif;
        font-weight: normal;
        color: #333333;
        margin: 30px 0;
        display: block;
    }

`

const Ingredients = () => {

    const GrahamIngredient = [
        {txt: '1 and 1/2 cups (150g) graham cracker crumbs (about 10 full sheet graham crackers)', id: 1},
        {txt: '5 Tablespoons (70g) unsalted butter, melted', id: 2},
        {txt: '1/4 cup (50g) granulated sugar', id: 3},
    ] 

    const CheesecakeIngredient = [
        {txt: 'four 8-ounce blocks (904g) full-fat cream cheese, softened to room temperature', id: 1},
        {txt: '1 cup (200g) granulated sugar', id: 2},
        {txt: '1 cup (240g) full-fat sour cream, at room temperature', id: 3},
        {txt: '1 teaspoon pure vanilla extract', id: 4},
        {txt: '2 teaspoons fresh lemon juice (optional, but recommended)', id: 5},
        {txt: '3 large eggs, at room temperature', id: 6},
        {txt: 'amel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes)', id: 7},
    ] 

    return ( 
        <Wrapper>
            <h2>Ingredients</h2>

            <i>Graham Cracker Crust</i>

            {GrahamIngredient.map((Ingredient => (
                <ListIngredient 
                    key={Ingredient.id}
                    Ingredient={Ingredient.txt}
                />
            )))}

            <i>Cheesecake</i>

            {CheesecakeIngredient.map((Ingredient => (
                <ListIngredient 
                    key={Ingredient.id}
                    Ingredient={Ingredient.txt}
                />
            )))}

        </Wrapper>
     );
}
 
export default Ingredients;