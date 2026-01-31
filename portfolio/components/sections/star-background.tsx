"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useRef, useState, Suspense } from "react";
import type { Points as PointsType } from "three";

import { usePrefersReducedMotion } from "@/lib/reduced-motion";

const StarBackground = ({
  reducedMotion,
  ...props
}: PointsProps & { reducedMotion: boolean }) => {
  const ref = useRef<PointsType | null>(null);

  const [sphere] = useState<Float32Array>(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array
  );

  useFrame((_state, delta) => {
    if (!ref.current) return;
    if (reducedMotion) return;

    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        frameloop={reducedMotion ? "demand" : "always"}
      >
        <Suspense fallback={null}>
          <StarBackground reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
};
