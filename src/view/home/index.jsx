import React, { useState, useRef, useEffect } from "react";
import Slider from "../slider/slider";
import beerData from "../../data/topThreeBeerData";

export default function Home() {
    return (
        <>
            <Slider />
            <p className="h4 text-center mt-5 fw-bold">The most popular beers</p>
            <div class="d-flex justify-content-evenly flex-wrap mt-5">
                {
                    beerData.topThree.map((item, i) => {
                        return (
                            <div key={i} className='beer-layout mb-5 mx-4'>
                                <p className='h5 fw-bold'>{item.name}</p>
                                <img className='beer-img' src={item.image_url} /> <br /> <br />
                                <p>{item.brewers_tips}</p>
                                <a href={`beer/${item.id}`} rel="noreferrer" className="text-bottom">See more...</a>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}