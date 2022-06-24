import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./scss/index.scss";
import "../common/scss/style.scss";

export default function Beers() {
    const [beers, setBeers] = useState(null);

    useEffect(() => {
        axios.get('https://api.punkapi.com/v2/beers')
            .then(resp => {
                console.log(resp);
                if (resp.status === 200) {
                    setBeers(resp.data);
                }
            });
    }, []);
    return (
        <>
            <div className='mt-5 px-5'>
                <section className="d-flex flex-wrap justify-content-evenly mx-md-5">
                    {
                        beers &&
                        beers.map((item, i) => {
                            return (
                                <div key={i} className='beer-layout mb-5 mx-md-4'>
                                    <p className='h5 fw-bold'>{item.name}</p>
                                    <img className='beer-img' src={item.image_url} /> <br /> <br />
                                    <p>{item.brewers_tips}</p>
                                    <a href={`beer/${item.id}`} rel="noreferrer" className="text-bottom">See more...</a>
                                </div>
                            );
                        })
                    }
                </section>
            </div>
        </>
    );
}
