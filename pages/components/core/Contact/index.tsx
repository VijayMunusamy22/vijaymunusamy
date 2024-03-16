import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { PhoneIcon } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => setInput(e.target.value);

  const isError = input === "";
  return (
    <Flex flexDirection="column">
      <FormControl isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={input} onChange={handleInputChange} />
        {isError && <FormErrorMessage>Email is required.</FormErrorMessage>}
      </FormControl>
      <Stack>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.300" />
          </InputLeftElement>
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>
      </Stack>
    </Flex>
  );
};

export default Contact;
