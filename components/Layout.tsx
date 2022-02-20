import React from "react";
import { Container, Text, Center } from "@mantine/core";

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <>
      <Center sx={{ background: "#5F3DC4", padding: "0.5rem 0.5rem" }}>
        <Text size={"xs"}>Currently under development</Text>
      </Center>
      <Container mt={32}>{children}</Container>
    </>
  );
}

export default Layout;
