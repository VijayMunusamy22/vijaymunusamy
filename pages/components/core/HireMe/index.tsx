import { Box, Button, Center, Flex, Heading, Image } from "@chakra-ui/react";

const HireMe = () => {
  return (
    <Flex width="100%">
      <Image
        src="/Illustrations/hireMe.svg"
        alt="Hire Me!"
        width="60%"
        marginTop={24}
      />
      <Box
        padding={24}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          textAlign="center"
          width="100%"
          fontFamily="monospace"
          fontSize={36}
        >
          Hire Me!
        </Heading>
        <Button
          background="#229954"
          color="#ffffff"
          fontSize={18}
          fontFamily="monospace"
          border="none"
          padding="12px 18px"
          marginTop={12}
          cursor="pointer"
          borderRadius={24}
        >
          <Image src="/icons/paperclip.svg" alt="Paper Clip" marginRight={8} />
          Resume
        </Button>
      </Box>
    </Flex>
  );
};

export default HireMe;
