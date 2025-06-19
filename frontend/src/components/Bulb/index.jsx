import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Bulb = ({ props }) => {
    const { nodes, materials } = useGLTF("/bulb-3d.glb");
    const bulbRef = useRef(null);
    const [spiralComplete, setSpiralComplete] = useState(false);

    const spiralCurve = new THREE.CatmullRomCurve3([new THREE.Vector3(-200, 100, 200), new THREE.Vector3(60, 75, 100), new THREE.Vector3(60, 25, 50), new THREE.Vector3(0, 10, 0)]);

    const { t } = useSpring({
        from: { t: 0 },
        to: { t: 1 },
        config: {
            friction: 100,
            tension: 150,
            precision: 0.01,
        },
        onRest: () => {
            setSpiralComplete(true); // Mark spiral as complete
        },
    });

    const { rotation } = useSpring({
        from: { rotation: [-Math.PI / 2, Math.PI, 0] },
        to: async (next) => {
            if (spiralComplete) return;

            const spinCycles = 2; // more rotations for speed

            for (let i = 0; i < spinCycles; i++) {
                const progress = i / spinCycles;
                const wobbleIntensity = (1 - progress) * 0.5; // stronger initial wobble

                // Wobble follows a sine wave pattern for more natural movement
                const wobbleX = Math.sin(progress * Math.PI * 12) * wobbleIntensity * -1;
                const wobbleY = Math.cos(progress * Math.PI * 10) * wobbleIntensity * -0.9;

                await next({
                    rotation: [
                        -Math.PI / 2 + wobbleX,
                        Math.PI + wobbleY,
                        Math.PI * 4 * (i + 1), // faster rotations (4π per cycle)
                    ],
                    config: {
                        friction: 60 + progress * 80, // lower initial friction = faster
                        tension: 200 - progress * 60, // higher initial tension = faster
                        duration: 400 + i * 100, // much faster timing
                    },
                });
            }

            // Final settle
            await next({
                rotation: [-Math.PI / 2, Math.PI, Math.PI * 4 * spinCycles],
                config: {
                    friction: 180,
                    tension: 120,
                },
            });
        },
    });

    const [springs, api] = useSpring(() => ({
        position: [0, 10, 0],
        scale: 12,
    }));

    useFrame(() => {
        if (!spiralComplete) {
            const currentT = t.get();
            const position = spiralCurve.getPointAt(currentT);
            if (bulbRef.current) {
                bulbRef.current.position.copy(position);
            }
        }
    });

    useEffect(() => {
        if (spiralComplete) {
            setTimeout(() => {
                api.start({
                    position: [0, 40, 0],
                    scale: 6,
                });
            }, 500);
        }
    }, [spiralComplete]);

    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <animated.group ref={bulbRef} rotation={rotation} position={springs.position} scale={springs.scale}>
                    <mesh castShadow geometry={nodes.Roundcube_Material_0.geometry} material={materials.Material} />
                    <mesh castShadow geometry={nodes.Roundcube_Material002_0.geometry} material={materials["Material.002"]} />
                    <mesh castShadow geometry={nodes.Roundcube_Material012_0.geometry} material={materials["Material.012"]} />
                    <mesh castShadow geometry={nodes.Roundcube_Material008_0.geometry} material={materials["Material.008"]} />
                </animated.group>
            </group>
        </group>
    );
};

export default Bulb;
