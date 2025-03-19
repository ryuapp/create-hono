const b = () =>
  Bun.build({
    entryPoints: ['./src/index.ts'],
    platform: 'node',
    outfile: 'bin',
    // For debug
    minify: false,
  })

Promise.all([b()])