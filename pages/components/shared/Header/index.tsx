import {
  Button,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import {
  Rss,
  Home,
  User,
  Mail,
  CircleArrowRight,
  Paperclip,
  Menu as MenuIcon,
} from "lucide-react";
import styles from "./Header.module.css";

const navButtons = {
  border: "none",
  padding: "12px 24px",
  color: "#333333",
  fontWeight: 900,
  fontSize: "16px",
  background: "transparent",
  cursor: "pointer",
};

const logInButton = {
  border: "none",
  padding: "12px 24px",
  color: "#ffffff",
  fontWeight: 900,
  fontSize: "16px",
  background: "#000000",
  cursor: "pointer",
};

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoBox}>
        <Image
          src="/vm_logo_header.png"
          alt="Vijay Munusamy"
          className={styles.headerLogo}
        />
      </div>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<MenuIcon size={42} />}
          variant="outline"
          border="none"
          color="#000000"
          background="transparent"
          className={styles.handBurger}
        />
        <MenuList
          zIndex={5}
          background="gray"
          width={300}
          alignItems="center"
          border="none"
        >
          <MenuItem icon={<Home color="#229954" />} padding={10} fontSize={20}>
            Home
          </MenuItem>
          <MenuItem icon={<Rss color="#229954" />} padding={10} fontSize={20}>
            Blogs
          </MenuItem>
          <MenuItem icon={<User color="#229954" />} padding={10} fontSize={20}>
            About
          </MenuItem>
          <MenuItem icon={<Mail color="#229954" />} padding={10} fontSize={20}>
            Contact
          </MenuItem>
        </MenuList>
      </Menu>
      <div className={styles.navigationBox}>
        <Stack direction="row" spacing={4}>
          <Button
            rightIcon={<Home />}
            colorScheme="teal"
            variant="outline"
            style={navButtons}
            _hover={{ color: "#f1c40f" }}
          >
            Home
          </Button>
          <Button
            rightIcon={<Rss />}
            colorScheme="teal"
            variant="solid"
            style={navButtons}
          >
            Blogs
          </Button>
          <Button
            rightIcon={<User />}
            colorScheme="teal"
            variant="outline"
            style={navButtons}
          >
            About
          </Button>
          <Button
            rightIcon={<Mail />}
            colorScheme="teal"
            variant="outline"
            style={navButtons}
          >
            Contact
          </Button>
        </Stack>
      </div>
      <div className={styles.headerActions}>
        <Button style={logInButton} rightIcon={<CircleArrowRight />}>
          Log In
        </Button>
      </div>
    </div>
  );
};

export default Header;
