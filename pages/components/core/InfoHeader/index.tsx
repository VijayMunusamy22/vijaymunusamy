import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import styles from "@/styles/InfoHeader.module.css";

const InfoHeader = () => {
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      backgroundImage={"/Illustrations/Polygon.svg"}
      height="72vh"
      backgroundRepeat="no-repeat"
      className={styles.welcomeBox}
    >
      <div className={styles.welcomeTextWrapper}>
        <Text className={styles.welcomeTextName}>
          Hello There! This is <span className={styles.firstName}>Vijay</span>
          <span className={styles.lastName}>Munusamy</span>
        </Text>
        <Text className={styles.welcomeTextDescription}>
          I am a Senior Software Engineer.
        </Text>
      </div>
      <div className={styles.userInformationWrapper}>
        <Text className={styles.userInformation} noOfLines={[2]}>
          I am a Full Stack Engineer, expertise in front-end development and
          back-end development.
        </Text>
        <Button className={styles.knowMoreBtn} rightIcon={<ArrowForwardIcon />}>
          Know more
        </Button>
      </div>
    </Box>
  );
};

export default InfoHeader;
