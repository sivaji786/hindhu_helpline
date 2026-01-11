import imgGhhfLogo1 from "../../../assets/42cc9add3efc5f0f8207b6a0b18b4e5ee4a87edd.png";

export function Logo() {
  return (
    <div className="flex flex-col items-center gap-3 w-full">
      {/* Original Figma Logo Image */}
      <div className="h-[50px] w-[52px] relative">
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt="GHHF Logo"
            className="absolute h-[176.99%] left-[-13.5%] max-w-none top-[-35.69%] w-[126.58%]"
            src={imgGhhfLogo1}
          />
        </div>
      </div>

      {/* Logo Text */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-lg font-bold text-[#800000] leading-tight">
          Global Hindu Help Line
        </h1>
        <p className="text-xs text-black opacity-80">
          Towards Restoring of Hindu Heritage
        </p>
      </div>
    </div>
  );
}
