import { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import Navbar from "../../components/Navbar/Navbar";
// import {news} from "../../Datas.js"
import { getAllPosts, getTopPost } from "../../services/userServices.js";
import CardTop from "../../components/Cards/CardTop.jsx";

export default function(){

    const [news, setNews] = useState([])
    const [topNews, setTopNews] = useState({})

    async function findAllNews(){
        const response = await getAllPosts()
        setNews(response.data.results)
    }

    async function findTopNew(){
        const response = await getTopPost()
        setTopNews(response.data.news)
    }

    useEffect(() => {
        findAllNews()
        findTopNew()
    }, [])

    return (
        <div className="w-full">
            <Navbar />
            <div className=" w-full flex flex-wrap justify-center px-10 bg-[#F1F1F1] gap-4 ">
                <CardTop 
                    key={topNews.id} 
                    title={topNews.title}
                    text={topNews.text}
                    banner={topNews.banner}
                    likes={topNews.likes}
                    comments={topNews.comments}
                />
                {news.map((ele) =>{
                    return  <Card 
                                key={ele.id} 
                                title={ele.title}
                                text={ele.text}
                                banner={ele.banner}
                                likes={ele.likes.length}
                                comments={ele.comments.length}
                            />
                })}
             </div>
        </div>
    )
}