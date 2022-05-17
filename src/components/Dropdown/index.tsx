import React from "react";

import { MoreIcon } from "../MoreIcon";
import * as Styles from "./styles";

type DropdownProps = {
  children: React.ReactNode;
  dropNone?: boolean;
};

export { Option } from "./styles";

const Dropdown = ({ children, dropNone }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleEnterOnTitle = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      setIsOpen(!isOpen)
    }
  }

  return (
    <Styles.Wrapper >
      <Styles.Title onClick={() => setIsOpen(!isOpen)} onKeyUp={handleEnterOnTitle} tabIndex={0}>
        {!dropNone && (
         <MoreIcon color="white" />
        )}
      </Styles.Title>

      <Styles.Content isOpen={isOpen}>{children}</Styles.Content>
    </Styles.Wrapper>
  );
};

export default Dropdown;
