import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Paperclip } from "lucide-react";
import styles from "./hireme.module.css";

const HireMe = () => {
  return (
    <Flex
      width="60%"
      background="rgba(255,0,0,0.4)"
      padding={12}
      margin={12}
      borderRadius={20}
      className={styles.hiremeContainer}
    >
      <Box
        padding={24}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={styles.hireMeBox}
      >
        <Flex alignItems="center" justifyContent="space-between" width="100%">
          <Image
            src="/Illustrations/hireMe.svg"
            alt="Hire Me!"
            width="50%"
            marginTop={24}
            className={styles.hiremeImage}
          />
          <Flex
            flexDirection="column"
            padding={12}
            marginLeft={24}
            background="rgba(255,255,255,0.4)"
            borderRadius={12}
            className={styles.hiremeInfo}
          >
            <Center>
              <Heading
                textAlign="center"
                width="max-content"
                fontFamily="sans-serif"
                fontSize={24}
                color="#229954"
              >
                Hire Me!
              </Heading>
            </Center>
            <Text
              fontSize={18}
              margin={16}
              padding={12}
              color="rgba(0,0,0,0.6)"
              fontFamily="sans-serif"
              lineHeight={1.5}
            >
              Experienced Full Stack Developer, specializing in both Frontend
              and Backend technologies. Let us build something incredible
              together. Hire me today!
            </Text>
            <Center>
              <Button
                background="#229954"
                color="#ffffff"
                fontSize={18}
                fontFamily="sans-serif"
                border="none"
                padding="12px 18px"
                cursor="pointer"
                borderRadius={24}
                rightIcon={<Paperclip />}
                width="50%"
              >
                Resume
              </Button>
            </Center>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default HireMe;
