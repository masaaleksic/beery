import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./scss/index.scss";
import "../common/scss/style.scss";
import Config from "../../config/config";

export default function Beer() {
    const [beers, setBeers] = useState(null);
    const [beerItem, setBeerItems] = useState(null);
    const url = window.location.href.split('/');
    const id = url[url.length - 1];

    useEffect(() => {
        axios.get(`${Config.api.baseUrl}/beers`)
            .then(resp => {
                if (resp.status === 200) {
                    setBeers(resp.data);
                }
            });
    }, []);

    useEffect(() => {
        beers && beers.forEach(element => {
            if (element.id == id) {
                setBeerItems(element);
            }
        })
    }, [beers])  
    return (<>
        {
            beerItem && (
                <div className="d-flex justify-content-center align-items-center my-5 flex-wrap">
                    <div className='mx-5'>
                        <img className='beer-overview-img' src={beerItem.image_url} />
                    </div>
                    <div className='mx-5 beer-info'>
                        <p className='h5 fw-bold mb-0'>{beerItem.name}</p>
                        <hr />
                        <p className="mb-0">Ingredients: </p>
                        <ul>
                        {beerItem.ingredients.malt.map((item, i)=>{
                            return(
                                <li key={i}>
                                    {item.name}
                                </li>
                            )
                        })}
                        </ul>
                        <p>First brewed: {beerItem.first_brewed}</p>
                        <p>Atenuation level: {beerItem.attenuation_level}</p>
                        <p>pH: {beerItem.ph}</p>
                        <p className="mb-0">Goes good with: </p>
                        <ul>
                        {beerItem.food_pairing.map((item, i)=>{
                            return(
                                <li key={i}>
                                    {item}
                                </li>
                            )
                        })}
                        </ul>
                        <p>Description: {beerItem.description}</p>
                    </div>
                </div>
                )
        }</>
    );

}
