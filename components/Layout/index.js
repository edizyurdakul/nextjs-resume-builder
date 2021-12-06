import Head from "next/head";
import { Container } from "@chakra-ui/react";

export default function Layout({ children }) {
  return <Container maxW={"container.lg"}>{children}</Container>;
}
