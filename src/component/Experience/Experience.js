import './Experience.css'
import React from 'react';
import { useEffect, useState } from 'react';
// import PortfolioList from './component/PortfolioList/PortfolioList';
import {
    design,
    vanillaJs,
    APIs,
    reactJs
} from './data'
import PortfolioList from './PortfolioList';
const Experience = () => {

    const [selected, setSelected] = useState('webDesign');
    const [data, setData] = useState([]);

    const lists = [

        {
            id: "webDesign",
            title: "Design"
        },
        {
            id: "js-design",
            title: "VanillaJs"
        },
        {
            id: "API",
            title: "APIs"
        },
        {
            id: "react",
            title: "ReactJs"
        }
    ];

    useEffect(() => {
        switch (selected) {
            case "webDesign":
                setData(design);
                break;
            case "js-design":
                setData(vanillaJs);
                break;
            case "API":
                setData(APIs);
                break;
            case "react":
                setData(reactJs);
                break;
            default:
                setData(design);
        }
    }, [selected])
    return (
        <div className="portfolio" id="experience">
            <h1 className="experience-h1">Experience</h1>
            <ul>
                {
                    lists.map(lists => <PortfolioList
                        title={lists.title}
                        activee={selected === lists.id}
                        setSelected={setSelected}
                        id={lists.id}
                        key={lists.id}
                    />)
                }
            </ul>
            <div className="portfolio-container">
                {
                    data.map((data) => (
                        <div className="items">
                            <img className="img-wrapping" src={data.img} alt="" />
                            <p className="portfolio-title">{data.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Experience;