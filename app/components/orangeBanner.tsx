import React from "react";

interface OrangeBannerProps {
  content: string;
}

const OrangeBanner: React.FC<OrangeBannerProps> = ({ content }) => {
  return (
    <div className="text-5xl py-[140px] w-full bg-orange flex flex-row justify-center mt-24">
      {content}
    </div>
  );
};
export default OrangeBanner;
