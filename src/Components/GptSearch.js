import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
       <div className='absolute -z-10'>
        <video 
          className='' 
          src={`${process.env.PUBLIC_URL}/bg-video-gptSearch.mp4`} 
          autoPlay 
          loop 
          muted 
          type="video/mp4"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
