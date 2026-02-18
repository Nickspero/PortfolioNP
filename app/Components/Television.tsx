"use client";
import { useRef, useEffect } from "react";

const Television = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawRibbon = (colors: any, offset: any) => {
      const time = Date.now() * 0.002;
      const frequency = 0.7;
      const amplitude = 150 + 0.5 * 100;

      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x++) {
        const y =
          canvas.height / 2 +
          Math.sin(x * 0.01 * frequency + time + offset) * amplitude;
        ctx.lineTo(x, y);
      }

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      colors.forEach((color: any, i: any) =>
        gradient.addColorStop(i / (colors.length - 1), color),
      );

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 8;
      ctx.shadowColor = colors[Math.floor(colors.length / 2)];
      ctx.shadowBlur = 50;
      ctx.stroke();
    };

    const animate = () => {
      ctx.fillStyle = "#1C1C1C";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawRibbon(["#00ffff", "#ff00ff", "#00ff00"], 0);
      drawRibbon(["#ff0080", "#ff8000", "#ffff00"], Math.PI / 3);
      drawRibbon(["#377E80", "#C64623"], Math.PI / 1.5);

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="w-[200] md:w-[250] lg:w-[350] relative">
      <canvas
        ref={canvasRef}
        className="absolute w-[30%] h-[20%] top-[56%] left-[10%]"
      ></canvas>
      <img className="relative w-full h-full z-10" src="./tv.png" alt="TV" />
      <img
        className="absolute w-[60%] top-[11%] left-[20%]"
        src="./headshot.gif"
        alt="Headshot"
      />
    </div>
  );
};

export default Television;
