import React, { useState, useRef, useEffect } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [ctx, setCtx] = useState<any>();

  useEffect(() => {
    const canvas: any = canvasRef.current;

    if (!canvas) return;

    canvas.width = window.innerWidth - 1;
    canvas.height = window.innerHeight - 1;

    const ctx = canvas.getContext("2d");

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctxRef.current = ctx;

    setCtx(ctxRef.current);
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
}
