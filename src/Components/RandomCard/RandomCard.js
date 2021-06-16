import React from 'react';
import '../RandomCard/RandomCard.css';
import testImg from './test_img.jpg';

const RandomCard = () => {
    return (
        <div className='random-card'>
            <img className='random-drink-img' src={testImg} alt='test drink' />
            <h1 className='random-drink-name'>Drink Name</h1>
            <h2 className='ingrediants-title drink-info'>Ingrediants:</h2>
            <ul className='ingrediants-list drink-info'>
                <li>Ingrediant 1</li>
                <li>Ingrediant 2</li>
                <li>Ingrediant 3</li>
            </ul>
            <h2 className='directions-title drink-info'>Directions:</h2>
            <p className='directions drink-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem risus, finibus ac pretium vitae, auctor et justo. Ut fermentum.

</p>
        </div>
    );
}

export default RandomCard;