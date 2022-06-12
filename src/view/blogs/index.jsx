import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./scss/index.scss";

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
            {
                news && 
                news.map((item, i) => {
                    return (
                      <div key={i} className='blog-layout mb-3  mx-auto'>
                        <p className='h5 fw-bold'>{item.title}</p>
                        <img className='blog-img' src={item.urlToImage} />
                      </div>
                    );
                  })
            }
        </div>
    );
}