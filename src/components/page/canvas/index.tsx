import React, { useState, useRef, useEffect } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [ctx, setCtx] = useState<any>();

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!canvas) return;

    canvas.width = window.innerWidth - 1;
    canvas.height = window.innerHeight - 1;

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctxRef.current = ctx;

    type PositionType = {
      x?: number;
      y?: number;
    };

    class Sprite {
      position: PositionType;
      constructor(position: any) {
        console.log(position);
        this.position = position;
      }
    }

    const player = new Sprite({
      x: 0,
      y: 0,
    });
    console.log(player);

    setCtx(ctxRef.current);
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
}
