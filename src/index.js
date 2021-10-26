import React from 'react';
import ReactDom from 'react-dom';
//components
import Picture from "./Components/Picture";
import Description from "./Components/Description";
//const
import DATA from './data';
//styles
import './styles.css';

const renderItems = (items) => {
    //used index as key, since items is a static array (items would not change indexes)
     return items.map((item, index) => {
        const {src, alt, description, location, name} = item;
        return (
            <article key={index} className={"item"}>
                <Picture src={src} alt={alt}/>
                <Description
                    description={description}
                    location={location}
                    name={name}
                />
            </article>
        )
    })
}

const RecommendationSection = () => {
    return (
        <>
            <header>
                <div className={"header-info"}>
                    <h2>This is a clone of Anbefalinger section at FINN.no </h2>
                    <small>Iryna Kresinska, 23.10.2021</small>
                </div>
            </header>
            <section className={"recommendations"}>
                {renderItems(DATA)}
            </section>
        </>
    )
};

ReactDom.render(<RecommendationSection/>, document.getElementById('root'));