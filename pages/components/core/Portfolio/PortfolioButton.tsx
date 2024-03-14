import { Button } from "@chakra-ui/react";

const PortfolioButtons = (props: any) => {
  const { currentTab, setCurrentTab, label, selector, activeCss } = props;

  return (
    <Button
      border="none"
      padding="12px 24px"
      borderRadius="20"
      fontSize={18}
      fontFamily="monospace"
      isActive={currentTab === selector}
      _active={activeCss}
      cursor="pointer"
      onClick={() => setCurrentTab(selector)}
    >
      {label}
    </Button>
  );
};

export default PortfolioButtons;
