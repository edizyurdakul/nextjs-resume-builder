import React, { useState, useEffect } from "react";
import { ResumeTemplate } from "../components/Resume";
import { useDataLayerValue } from "../context/resumeContext";
import { PDFViewer } from "@react-pdf/renderer";

function resumeTemplate() {
  const [isClient, setIsClient] = useState(false);
  const [{ userPersonalInfo, userSummary }, dispatch] = useDataLayerValue();

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {isClient && (
        <PDFViewer height="1920" width="100%">
          <ResumeTemplate userPersonalInfo={userPersonalInfo} userSummary={userSummary} />
        </PDFViewer>
      )}
    </div>
  );
}

export default resumeTemplate;
