import styled, { css, FlattenInterpolation, ThemeProps } from 'styled-components';

interface ButtonProps {
  isActive?: boolean;
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>
  children?: string;
  onClick?: () => void;
}

function Button ({isActive, customStyle, children, onClick}: ButtonProps){
  return (<ButtonBx isActive={isActive} customStyle={customStyle} onClick={onClick}>
    {children}
  </ButtonBx>)
};

const ButtonBx = styled.button<ButtonProps>`
  ${props=> props.customStyle}
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
  ${({isActive, theme }) => {
    const { colors } = theme;
    return css`{
      background-color: ${isActive ? colors.black : colors.grayD9};
      color: ${isActive ? colors.grayD9 : colors.black};
    }
    `;
  }}
`;

export default Button;
