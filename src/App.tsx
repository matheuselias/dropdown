import React from 'react';
import styled from 'styled-components'

import Dropdown, { Option } from 'components/Dropdown';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

function App() {
  return (
    <Wrapper>
      <Dropdown>
        <Option tabIndex={0}>Rename</Option>
        <Option tabIndex={0}>Delete</Option>
        <Option tabIndex={0}>Share</Option>
      </Dropdown>
    </Wrapper>
  );
}

export default App;
