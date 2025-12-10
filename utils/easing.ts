const swing = (t: number, b: number, c: number, d: number): number => easeOutQuad(t, b, c, d);

function easeOutQuad(t: number, b: number, c: number, d: number): number {
  const progress = t / d;
  return -c * progress * (progress - 2) + b;
}

function easeOutCubic(t: number, b: number, c: number, d: number): number {
  const progress = t / d - 1;
  return c * (progress * progress * progress + 1) + b;
}

function easeInOutCubic(t: number, b: number, c: number, d: number): number {
  let progress = t / (d / 2);
  if (progress < 1) {
    return (c / 2) * progress * progress * progress + b;
  }
  progress -= 2;
  return (c / 2) * (progress * progress * progress + 2) + b;
}

function easeInOutSine(t: number, b: number, c: number, d: number): number {
  return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
}

function easeOutSine(t: number, b: number, c: number, d: number): number {
  return c * Math.sin((t / d) * (Math.PI / 2)) + b;
}

function easeInSine(t: number, b: number, c: number, d: number): number {
  return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
}

export { swing, easeOutCubic, easeInOutCubic, easeInOutSine, easeOutSine, easeInSine };

export const easing = {
  swing,
  easeOutCubic,
  easeInOutCubic,
  easeInOutSine,
  easeOutSine,
  easeInSine,
};
