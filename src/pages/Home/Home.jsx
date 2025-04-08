import { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import Navbar from "../../components/Navbar/Navbar";
// import {news} from "../../Datas.js"
import { getAllPosts } from "../../services/userServices.js";

export default function(){

    const [news, setNews] = useState([])

    async function findAllNews(){
        const response = await getAllPosts()
        setNews(response.data.results)
    }

    useEffect(() => {
        findAllNews()
    }, [])

    return (
        <div className="w-full">
            <Navbar />
            <div className=" flex flex-wrap justify-center  px-10 bg-[#F1F1F1] gap-2 ">
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