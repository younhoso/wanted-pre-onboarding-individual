import { JSXElementConstructor } from 'react';
import styled, { css, FlattenInterpolation, ThemeProps } from 'styled-components';

type ButtonProps = {
  menuIcon?: string;
  isActive?: boolean;
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
  onClick?: () => void;
  children?: string | undefined;
};

function Button({ menuIcon, isActive = false, customStyle, children, onClick }: ButtonProps) {
  return (
    <ButtonWape className={isActive ? 'on' : 'off'}>
      <i className={menuIcon} />
      <ButtonBx customStyle={customStyle} onClick={onClick}>
        {children}
      </ButtonBx>
    </ButtonWape>
  );
}

const ButtonWape = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 0 20px;
  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
  }

  ${({ theme }) => {
    const { fontWeight, colors } = theme;
    return css`
      &.on {
        font-weight: ${fontWeight.bold};
        background-color: ${colors.grayF1};
        color: ${colors.blueF5};
      }
      &.off {
        font-weight: ${fontWeight.bold};
        background-color: ${colors.white};
        color: ${colors.blue4E};
      }
      i {
        font-weight: ${fontWeight.regular};
      }
    `;
  }}
`;

const ButtonBx = styled.button<ButtonProps>`
  ${(props) => props.customStyle}
  height: 60px;
  font-size: 16px;
  color: inherit;
`;

export default Button;
