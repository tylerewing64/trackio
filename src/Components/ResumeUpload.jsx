import React from "react";
import UploadIcon from "@mui/icons-material/Upload";
function ResumeUpload({ colorOne, colorTwo, iconColor, textColor }) {
  return (
    <div
      className={`rounded-lg border-2 ${colorOne} border-dotted h-24 flex-col flex items-center 
        justify-center cursor-pointer  ${colorTwo}`}
    >
      <div className="flex items-center ">
        <UploadIcon sx={{ color: iconColor }} />
        <div className={`ml-4 ${textColor}`}>Upload Resume </div>
      </div>
    </div>
  );
}

export default ResumeUpload;
