import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/pacman-25805.webp";

function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
}

export default NavBar;
