import imgTemple from "../../../assets/ad238b7b70c9f951e40c530180cf073a994ff9a7.png";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-[85vw] h-[85vh] max-w-[1100px] bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row h-full">
          {/* Hero Image Section - Original Figma Temple Image */}
          <div className="hidden md:block md:w-[58%] relative h-full">
            <img
              src={imgTemple}
              alt="Hindu Temple"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-[42%] p-6 md:p-10 flex items-center justify-center overflow-y-auto">
            <div className="w-full max-w-[380px]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
