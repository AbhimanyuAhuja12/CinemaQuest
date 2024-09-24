import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"

const GptSearchBar = () => {

    const langkey=useSelector((store)=>store.config.lang);

  return (
    <div className='pt-[6%] flex justify-center'>
      <form className=' bg-black w-1/2 grid grid-cols-12'>
        <input type="text" className='p-4 m-4 col-span-9' placeholder={lang[langkey].gptSearchPlaceholder} />
        <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'>{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
