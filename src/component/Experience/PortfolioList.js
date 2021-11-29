import React from 'react';
import './Experience.css'
const PortfolioList = ({ title, activee, setSelected, id }) => {
    return (
        <div>
            <li className={activee ? "portfolioList activee" : "portfolioList"}
                onClick={() => setSelected(id)
                }>
                {title}
            </li>
        </div>
    );
};

export default PortfolioList;