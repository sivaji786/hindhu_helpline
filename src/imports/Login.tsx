import svgPaths from "./svg-xl6mdry0nc";
import imgGhhfLogo1 from "figma:asset/42cc9add3efc5f0f8207b6a0b18b4e5ee4a87edd.png";
import imgImage7 from "figma:asset/ad238b7b70c9f951e40c530180cf073a994ff9a7.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[normal] not-italic pb-[4px] pt-0 px-0 relative shrink-0 text-nowrap">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#800000] text-[24px]">Global Hindu Help Line</p>
      <p className="font-['Poppins:Regular',sans-serif] opacity-80 relative shrink-0 text-[14px] text-black">Towards Restoring of Hindu Heritage</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[152px] items-center relative shrink-0" data-name="Logo2">
      <div className="h-[76.287px] relative shrink-0 w-[80px]" data-name="ghhf logo 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[176.99%] left-[-13.5%] max-w-none top-[-35.69%] w-[126.58%]" src={imgGhhfLogo1} />
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-center leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Title">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center relative shrink-0 text-[#313030] text-[36px] w-full">
        <p className="leading-[60px]">Welcome back</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#797676] text-[16px] w-full">
        <p className="leading-[30px]">Enter your details to login</p>
      </div>
    </div>
  );
}

function LabelTextContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label text container">
      <p className="basis-0 font-['Poppins:Regular',sans-serif] grow leading-[30px] min-h-px min-w-px not-italic relative shrink-0 text-[#797676] text-[20px]">Mobile number</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
      <LabelTextContainer />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
      <div className="size-full">
        <div className="content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#c9c6c5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer />
    </div>
  );
}

function TextFieldMobileNumber() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field - Mobile number">
      <TextField />
    </div>
  );
}

function LabelTextContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label text container">
      <p className="basis-0 font-['Poppins:Regular',sans-serif] grow leading-[30px] min-h-px min-w-px not-italic relative shrink-0 text-[#797676] text-[20px]">Password</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[48px] items-start justify-center min-h-px min-w-px px-0 py-[4px] relative shrink-0" data-name="Content">
      <LabelTextContainer1 />
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="State-layer">
      <div className="size-full">
        <div className="content-stretch flex items-start pl-[16px] pr-0 py-[4px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function TextField1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[4px] shrink-0 w-full" data-name="Text field">
      <div aria-hidden="true" className="absolute border border-[#c9c6c5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <StateLayer1 />
    </div>
  );
}

function TextFieldPassword() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full" data-name="Text field - Password">
      <TextField1 />
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="state-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-nowrap text-white">
            <p className="font-['Poppins:Bold',sans-serif] leading-[30px] text-[20px]">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="bg-[#f93] content-stretch flex flex-col h-[56px] items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Login">
      <StateLayer2 />
    </div>
  );
}

function CheckBoxOutlineBlank() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check_box_outline_blank">
          <path d={svgPaths.p3b4f0880} fill="var(--fill-0, #797676)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function RememberMe() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="remember me">
      <CheckBoxOutlineBlank />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#797676] text-[16px] text-nowrap">
        <p className="leading-[30px]">Remember me</p>
      </div>
    </div>
  );
}

function RememberMe1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="remember me">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#797676] text-[16px] text-nowrap">
        <p className="leading-[30px]">Forgot Password?</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <RememberMe />
      <RememberMe1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Login />
      <Frame1 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="Form">
      <TextFieldMobileNumber />
      <TextFieldPassword />
      <Frame2 />
    </div>
  );
}

function FormContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-start relative shrink-0 w-full" data-name="Form-container">
      <Title />
      <Form />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black text-center w-full">
        <p className="leading-[30px] text-[16px]">
          <span className="text-[#797676]">Don’t have an account?</span> <span className="[text-underline-position:from-font] decoration-solid font-['Poppins:Regular',sans-serif] not-italic text-[#313030] underline">Signup here</span>
        </p>
      </div>
    </div>
  );
}

function FormArea() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] h-[1117px] items-center justify-center left-[calc(58.33%-12px)] px-[150px] py-[368px] top-0 w-[732px]" data-name="Form Area">
      <Logo />
      <FormContainer />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="absolute h-[1117px] left-0 overflow-clip top-0 w-[996px]" data-name="Hero image">
      <div className="absolute bg-white h-[985px] left-0 rounded-[50px] top-1/2 translate-y-[-50%] w-[752px]" />
      <div className="absolute left-0 size-[1128px] top-0" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[1117px] left-0 to-[#000000] top-0 w-[996px]" />
    </div>
  );
}

export default function Login1() {
  return (
    <div className="bg-[#fff6ed] relative size-full" data-name="login">
      <FormArea />
      <HeroImage />
    </div>
  );
}