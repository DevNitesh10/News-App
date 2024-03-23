/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const API_KEY = import.meta.env.VITE_API_KEY;
                const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, [category]);

    // 
    return (
        <div className="container">
            <h2 className="text-center mb-4">Latest <span className="badge bg-danger">News</span></h2>
            <div className="row">
                {articles.map((article, index) => (
                    <NewsItem
                        key={index}
                        title={article.title}
                        description={article.description}
                        image={article.urlToImage}
                        url={article.url}
                    />
                ))}
            </div>
        </div>
    );

};

export default NewsBoard;
