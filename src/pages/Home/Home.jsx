import Card from "../../components/Cards/Card";
import Navbar from "../../components/Navbar/Navbar";
import {news} from "../../Datas.js"

export default function(){
    return (
        <div className="w-full">
            <Navbar />
            <div className=" flex flex-wrap justify-center  px-10 bg-[#F1F1F1] gap-2 ">
                {news.map((ele, index) =>{
                    return  <Card key={index} news={ele}/>
                })}
             </div>
        </div>
    )
}