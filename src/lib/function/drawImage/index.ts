export function drawImg(d: any, p: number, w: number): void {
  d.ctx.drawImage(
    d.image,
    d.framecurrent * (d.imageWidth / d.frame),
    0,
    d.imageWidth / d.frame,
    d.imageHeight,
    p - 550 - w,
    d.posY - 300,
    (d.imageWidth / d.frame) * 2,
    d.imageHeight * 2
  );
  return;
}
