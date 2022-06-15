import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./scss/index.scss";
import "../common/scss/style.scss";
import { Link } from "react-router-dom";
import Blog from "../blog";

//API KEY: 84b9262f33ef46d89909d67451264ef5
export default function Blogs() {
    const [news, setNews] = useState(null);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=84b9262f33ef46d89909d67451264ef5')
            .then(resp => {
                if (resp.status === 200) {
                    setNews(resp.data.articles);
                }
            });
    }, []);
    return (
        <div className='mt-3'>
            <section className="d-flex flex-wrap justify-content-evenly">
                {
                    news &&
                    news.map((item, i) => {
                        return (
                                <div key={i} className='blog-layout mb-3  mx-auto'>
                                    <p className='h5 fw-bold'>{item.title}</p>
                                    <img className='blog-img' src={item.urlToImage} /> <br />
                                    <a href={`blog/${item.title}`} rel="noreferrer" className="text-start">See more...</a>
                                </div>
                        );
                    })
                }
            </section>
        </div>
    );
}

{/* <div>
    <h3>All Shoes</h3>
    <section style="display: flex">
        {allShoes.map(item => {
            return (
                <div key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>{item.subTitle}</p>
                    <p>{item.price}</p>
                </div>)
        })}
    </section>
</div> */}