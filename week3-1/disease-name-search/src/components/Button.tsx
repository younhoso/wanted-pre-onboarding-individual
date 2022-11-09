import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';

type ButtonProps = {
  iconClass?: string;
  customStyle?: FlattenInterpolation<ThemeProps<unknown>>;
  children?: string;
};

function Button({ iconClass, customStyle, children }: ButtonProps) {
  return (
    <BtnWrap>
      <i className={iconClass} />
      <ButtonBx customStyle={customStyle}>{children}</ButtonBx>
    </BtnWrap>
  );
}

const BtnWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translate(0%, -10%);
  font-size: 26px;
  cursor: pointer;
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -62%);
    color: #fff;
  }
`;

const ButtonBx = styled.div<ButtonProps>`
  ${(props) => props.customStyle}
  display: inline-block;
`;
export default Button;
