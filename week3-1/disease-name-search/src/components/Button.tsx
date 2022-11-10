import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';

type ButtonProps = {
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
  children?: JSX.Element;
};

function Button({ customStyle, children }: ButtonProps) {
  return <BtnWrap customStyle={customStyle}>{children}</BtnWrap>;
}

const BtnWrap = styled.div<ButtonProps>`
  cursor: pointer;
  ${(props) => props.customStyle}
`;

export default Button;
