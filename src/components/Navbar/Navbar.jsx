import logo from "../../images/LogoBN.png"
import { IoSearchOutline } from "react-icons/io5";


export default function Navbar(){
    return (
        <>
            <nav className="flex justify-between items-center h-28 px-4  border-b-1 border-gray-400">
                <div className="flex justify-end items-center relative">
                    <i className="absolute text-[#AAAAAA] bg-[#F1F1F1] mr-2"> <IoSearchOutline size={23}/></i>
                    <input 
                        placeholder="Pesquise por um título"
                        type="text" 
                        className="w-56 h-10 p-3 
                        text-[#AAAAAA] bg-[#F1F1F1]
                        border-1 outline-none border-[#F1F1F1] 
                        rounded-md focus:border-[#0bade3] " />
                </div>

                <img src={logo} alt="Imagen Logo Breaking News" className="cursor-pointer w-[145px] h-[145px]" />

                <button 
                    className="cursor-pointer w-34 h-12 rounded-md font-medium tracking-widest outline-none
                    bg-[#2C8AB4] text-white  hover:bg-[#0a86af]
                    transition-colors duration-200
                ">
                    ENTRAR
                </button>
            </nav>
        </>
    )
}