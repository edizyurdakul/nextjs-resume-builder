import React from "react";
import { Container } from "@mantine/core";

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return <Container mt={16}>{children}</Container>;
}

export default Layout;
