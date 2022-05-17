import styled, { css } from "styled-components";

type ContentProps = {
  isOpen: boolean;
};

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  min-width: 100px;
`;

export const Content = styled.div<ContentProps>`
  ${({ theme, isOpen }) => css`
    display: ${isOpen ? "block" : "none"};
    position: absolute;
    right: calc(100% - 30px);
    background-color: ${theme.colors.black300};
    color: ${theme.colors.white100};
    min-width: 100px;
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 30px;
    cursor: pointer;
    background-color: ${theme.colors.black300};
  `}
`;

export const Option = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    color: ${theme.colors.white100};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;

    :hover {
      background-color: ${theme.colors.blue100};
    }

    :focus {
        background-color: ${theme.colors.blue100};
        outline-style: none;
    }
  `}
`;
