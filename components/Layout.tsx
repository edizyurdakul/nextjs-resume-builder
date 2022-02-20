import React from "react";
import { Container, Text, Center } from "@mantine/core";

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <>
      <Center
        sx={{
          background: "#5F3DC4",
          padding: "0.5rem 0.5rem",
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: "1",
        }}
      >
        <Text size={"xs"}>Currently under development</Text>
      </Center>
      <Container mt={64}>{children}</Container>
    </>
  );
}

export default Layout;
