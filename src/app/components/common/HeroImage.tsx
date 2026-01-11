import imgImage7 from "figma:asset/ad238b7b70c9f951e40c530180cf073a994ff9a7.png";

export function HeroImage() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Hero image">
      {/* White background shape */}
      <div className="absolute bg-white h-[88%] left-0 rounded-[30px] lg:rounded-[50px] top-1/2 translate-y-[-50%] w-[75%]" />
      
      {/* Temple image */}
      <div className="absolute left-0 w-[113%] h-full top-0" data-name="image 7">
        <img 
          alt="Hindu Temple at sunset" 
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" 
          src={imgImage7} 
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-full left-0 to-[#000000] top-0 w-full" />
    </div>
  );
}