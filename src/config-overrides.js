export const config = () => {
  config.entry = {
    main: './src/index.tsx',
    scripttag: './src/scripttag.ts'
  }

  config.output.filename = 'static/js/[name].js'
  config.output.chunkFilename = 'static/js/[name].chunk.js'
  config.optimization.runtimeChunk = false
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false
    }
  }

  return config
}