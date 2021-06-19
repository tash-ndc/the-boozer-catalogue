import React from 'react';
import '../Categories/CategoriesMenu.css';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';

const CategoriesMenu = () => {
    return (
        <div className='categories-menu'>
            <CategoryCard />
        </div>
    );
}

export default CategoriesMenu;