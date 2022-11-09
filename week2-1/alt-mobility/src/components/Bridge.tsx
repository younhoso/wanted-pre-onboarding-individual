/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
import styled from 'styled-components';

interface BridgeProps {
  width?: string;
  height?: string;
  color?: string;
  bgColor?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  padding?: string;
  isClassAdd?: string;
  children?: string;
}

const Bridge = ({
  width,
  height,
  color,
  bgColor,
  borderRadius,
  fontSize,
  fontWeight,
  lineHeight,
  padding,
  isClassAdd,
  children,
}: BridgeProps) => {
  const styles = { width, height, color, bgColor, borderRadius, fontSize, fontWeight, lineHeight, padding };

  return (
    <BridgeBx {...styles} className={`BridgeBx ${isClassAdd}`}>
      {children}
    </BridgeBx>
  );
};

Bridge.defaultProps = {
  width: '52px',
  height: '22px',
  color: '#fff',
  bgColor: '#0094FF',
  fontSize: '12px',
  fontWeight: '400',
  borderRadius: '1rem',
};

const BridgeBx = styled.div<BridgeProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius};
  font-weight: ${(props) => props.fontWeight};
  text-align: center;
`;

export default Bridge;
