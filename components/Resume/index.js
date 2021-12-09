import React from "react";
import { Page, Text, View, Link, Document, Canvas, Font } from "@react-pdf/renderer";

export const ResumeTemplate = ({ userPersonalInfo, userSummary }) => {
  Font.register({
    family: "OpenSans",
    fonts: [
      {
        src: `/OpenSans-Regular.ttf`,
      },
      {
        src: `/OpenSans-Bold.ttf`,
        fontWeight: "bold",
      },
    ],
  });
  return (
    <Document>
      <Page size="A4" style={{ fontSize: "10px", padding: "30px", fontFamily: "OpenSans" }}>
        <View>
          <View>
            <Text style={{ textAlign: "center", fontSize: "14px", fontFamily: "OpenSans", fontWeight: "bold" }}>
              {userPersonalInfo.name}
            </Text>
            <Text style={{ textAlign: "center" }}>{userPersonalInfo.jobTitle}</Text>
          </View>
          <View>
            <Text style={{ textAlign: "center" }}>
              <Link src={`mailto:${userPersonalInfo.email}`}>{userPersonalInfo.email}</Link>
              <Text style={{ display: "inline" }}> · </Text>
              <Link src={`tel:${userPersonalInfo.contactNumber}`}>{userPersonalInfo.contactNumber}</Link>
            </Text>
          </View>
          <View>
            <Text style={{ textAlign: "center" }}>
              <Link src={userPersonalInfo.linkedInUrl}>{userPersonalInfo.linkedInUrl}</Link>
              <Text style={{ display: "inline" }}> · </Text>
              <Link src={userPersonalInfo.gitHubUrl}>{userPersonalInfo.gitHubUrl}</Link>
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{ marginTop: "16px", marginBottom: "2px", fontSize: "12px", fontFamily: "OpenSans", fontWeight: "bold" }}
          >
            Summary
          </Text>
          <Canvas style={{ width: "100%", height: "0.5px", backgroundColor: "black", marginBottom: "4px" }}></Canvas>
          <Text style={{ fontSize: "9px" }}>{userSummary}</Text>
        </View>
      </Page>
    </Document>
  );
};
