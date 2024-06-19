import { Box, Text, Link, HStack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" width="100%" py={4} bg="gray.800" color="white" textAlign="center">
      <Text mb={2}>© {new Date().getFullYear()} My Web Application. All rights reserved.</Text>
      <HStack spacing={4} justify="center">
        <Link href="https://facebook.com" isExternal>
          <Icon as={FaFacebook} boxSize={6} />
        </Link>
        <Link href="https://twitter.com" isExternal>
          <Icon as={FaTwitter} boxSize={6} />
        </Link>
        <Link href="https://instagram.com" isExternal>
          <Icon as={FaInstagram} boxSize={6} />
        </Link>
      </HStack>
    </Box>
  );
};

export default Footer;