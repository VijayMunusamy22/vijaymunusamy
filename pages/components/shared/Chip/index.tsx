import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const ChipData = (props: any) => {
  const { image, stack, rating, outOf, experience } = props;
  return (
    <Flex
      align="center"
      gap={12}
      padding={12}
      background="rgba(255,255,255,0.5)"
      width="max-content"
      borderRadius={30}
      cursor="default"
    >
      <Image
        src={`/icons/${image}.svg`}
        alt="react"
        height={75}
        width={75}
        borderRadius={25}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap={6}
      >
        <Heading
          display="flex"
          alignItems="center"
          gap={12}
          fontSize="24px"
          fontWeight={600}
        >
          {stack}
          <span
            style={{
              fontSize: "10px",
              padding: "5px",
              background: "red",
              color: "white",
              borderRadius: "4px",
              fontWeight: "200",
            }}
          >
            Rating: {rating}/{outOf}{" "}
          </span>
        </Heading>
        <Text fontSize="14" fontWeight={100}>
          Experience: {experience <= 0 ? 1 : experience}+ Years
        </Text>
      </Box>
    </Flex>
  );
};

export default ChipData;
