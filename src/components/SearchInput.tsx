import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { color } from "framer-motion";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup mx={{ base: 0, md: 5 }}>
      <InputLeftElement children={<BsSearch />} color="gray.300" />

      <Input
        borderRadius={20}
        placeholder="search games..."
        variant={"filled"}
      />
    </InputGroup>
  );
};

export default SearchInput;
