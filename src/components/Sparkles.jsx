import { Sparkles } from "@react-three/drei";

export const SparkleComponents = ({ currentColor }) => {
const sparkleProps = [
// 0x800080, // Purple
// 0x007fff,  // Azure
0xFFFFFF, // White
// 'grey',
// currentColor,
// 0xe9ffdb,
// 0x00ffff,
0x000000,
];
return (
<>
{sparkleProps.map(color => (
<Sparkles
    key={color.toString()}
    count={500}
    speed={0.3}
    opacity={1}
    color={color}
    size={2}
    scale={14}
    noise={1}
/>
))}
</>
)};