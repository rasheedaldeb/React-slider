import React, {useState} from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { images } from '../Data';
import { LuDot } from "react-icons/lu";
const Slider = () => {
    const [currentindex, setcurrentindex] = useState(0)
    const prev = ()=>{
        const previuseIndex = currentindex === 0 ? images.length -1 : currentindex -1
        setcurrentindex(previuseIndex)
    }
    const next = ()=>{
        const nextIndex = currentindex === images.length -1 ? 0 : currentindex +1
        setcurrentindex(nextIndex)
    }
    const goToSlide = (slideIndex)=>{
        setcurrentindex(slideIndex)
    }
    return (
        <>
        <h1 className='text-5xl font-bold pb-5'>Nature</h1>
        <div className=" w-2/4 relative h-1/2 rounded border-2  transition-all" style={{backgroundImage: `url(${images[currentindex].url})`,
        backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <IoIosArrowBack size={50} className='absolute top-1/2
        -translate-y-1/2 cursor-pointer text-white' onClick={prev}/>
        <IoIosArrowForward size={50}  className='absolute top-1/2
        -translate-y-1/2 right-1 cursor-pointer text-white' onClick={next}/>
        </div>
        <div className='flex top-4 justify-center items-center py-2'>
        {images.map((slide, slideIndex)=>(
            <div key={slideIndex} onClick={()=> goToSlide(slideIndex)} className='text-3xl cursor-pointer'>
                <LuDot />
            </div>
        ))}
        </div>
        </>
    )
}

export default Slider
