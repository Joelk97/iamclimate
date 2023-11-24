import React from "react";

interface OrangeBannerProps {
  content: string;
}

const OrangeBanner: React.FC<OrangeBannerProps> = ({ content }) => {
  return (
    <div className="text-xl sm:text-3xl md:text-4xl py-[40px] sm:py-[140px] px-5 text-center w-full bg-orange flex flex-row justify-center mt-24">
      {content}
    </div>
  );
};
export default OrangeBanner;
