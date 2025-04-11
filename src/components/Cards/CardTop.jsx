import { FaRegHeart, FaRegCommentDots } from "react-icons/fa";

export default function CardTop(props) {
  return (
    <div className="h-[300px] flex w-[98.5%] bg-white mt-4 pl-8 gap-4 rounded-md shadow-custom-card">
        
        <div className="w-[70%] h-auto flex flex-col">
            <div className="w-full h-full flex flex-col mt-2 gap-10">
                <h2 className="font-bold text-4xl">{props.title}</h2>
                <p className="line-clamp-3">{props.text}</p>
            </div>

            <div className="h-auto flex mb-2 gap-4 ">
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

        
        <div className="w-[30%] h-auto">
            <img
            className="w-full h-full object-cover rounded-r-lg"
            src={props.banner}
            alt="imagen da Noticia"
            />
        </div>
        
    </div>
  );
}
