import { FaRegHeart, FaRegCommentDots  } from "react-icons/fa";

export default function Card(props) {
    return (
       
            <div className="w-[700px] flex h-auto flex-col py-5 px-10 bg-white mt-4 rounded-md shadow-custom-card">

                <div className="flex flex-col  w-full  gap-5">

                    <div className="w-full flex items-center justify-between">
                        <h2 className="font-bold mb-5 mt-8 text-4xl">{props.title}</h2>
                        <img className="w-[200px] h-[200px] object-cover" src={props.banner} alt="imagen da Noticia" />
                    </div>

                    <div className="w-full flex justify-center">
                        <p className="line-clamp-2">{props.text}</p>
                    </div>
                </div>

                <div className="flex justify-start items-center mt-2 gap-4 ">
                    <div className="flex items-center gap-1">
                        <FaRegHeart />
                        <span>{props.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaRegCommentDots />
                        <span>{props.comments}</span>
                    </div>
                </div>
            </div>
       
    )
}