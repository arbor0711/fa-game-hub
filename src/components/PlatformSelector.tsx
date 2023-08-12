import { useState } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("Platforms");
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform}
      </MenuButton>
      <MenuList overflow={"auto"} height="50vh">
        {data.map((platform) => {
          return (
            <MenuItem
              onClick={() => setSelectedPlatform(platform.name)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
