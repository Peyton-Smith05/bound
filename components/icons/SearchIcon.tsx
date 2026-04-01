import Svg, { Circle, Line } from 'react-native-svg';

type Props = {
  color?: string;
  size?: number;
};

export default function SearchIcon({ color = '#000', size = 15 }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 13 12" fill="none">
      <Circle cx="5.5" cy="5.5" r="4.5" stroke={color} strokeWidth={2} />
      <Line x1="8.70711" y1="8.29289" x2="11.7071" y2="11.2929" stroke={color} strokeWidth={2} />
    </Svg>
  );
}
