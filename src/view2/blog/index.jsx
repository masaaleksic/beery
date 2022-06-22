import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./scss/index.scss";
import "../common/scss/style.scss";

export default function Blog() {
    const [news, setNews] = useState(null);
    const [newsItem, setNewsItems] = useState(null);

    const url = window.location.href.split('/');
    const var1 = url[url.length - 1];
    const title = var1.replaceAll('%20', ' ');

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=84b9262f33ef46d89909d67451264ef5')
            .then(resp => {
                if (resp.status === 200) {
                    setNews(resp.data.articles);
                }
            });
    }, []);

    useEffect(() => {
        news && news.forEach(element => {
            if (element.title === title) {
                setNewsItems(element);
            }
        })
    }, [news])
    return (<>
        {
            newsItem && (
                <div className='blog-layout mb-3  mx-auto'>
                    <p className='h5 fw-bold'>{newsItem.title}</p>
                    <img className='blog-img' src={newsItem.urlToImage} /> <br />
                </div>)
        }</>
    );
}