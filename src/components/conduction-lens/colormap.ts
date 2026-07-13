// Small perceptual viridis colormap for the activation map. No dependency, just
// linear interpolation between anchor RGB stops. Ported from the ecg-purkinje-npe demo.

const VIRIDIS: [number, number, number][] = [
  [68, 1, 84],
  [72, 40, 120],
  [62, 74, 137],
  [49, 104, 142],
  [38, 130, 142],
  [31, 158, 137],
  [53, 183, 121],
  [110, 206, 88],
  [181, 222, 43],
  [253, 231, 37],
]

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

// t in [0, 1] -> [r, g, b]
export function viridis(t: number): [number, number, number] {
  const x = Math.max(0, Math.min(1, t)) * (VIRIDIS.length - 1)
  const i = Math.floor(x)
  const f = x - i
  const c0 = VIRIDIS[i]
  const c1 = VIRIDIS[Math.min(VIRIDIS.length - 1, i + 1)]
  return [
    Math.round(lerp(c0[0], c1[0], f)),
    Math.round(lerp(c0[1], c1[1], f)),
    Math.round(lerp(c0[2], c1[2], f)),
  ]
}
