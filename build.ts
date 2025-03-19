/// <reference types="bun-types" />

await Bun.build({
  entryPoints: ['./src/index.ts'],
  platform: 'node',
  outfile: 'bin',
  // For debug
  minify: false,
})

export { }
