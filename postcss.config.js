import purgecss from '@fullhuman/postcss-purgecss'
import cssnano from 'cssnano'
import fg from 'fast-glob'
import fs from 'fs'

function getScssClasses() {
  const files = fg.sync(['src/**/*.scss'], { dot: false })
  const classRegex = /\.([A-Za-z0-9_-]+)/g
  const classes = new Set()
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    let match
    while ((match = classRegex.exec(content)) !== null) {
      classes.add(match[1])
    }
  }
  return Array.from(classes)
}

export default {
  plugins: [
    ...(process.env.NODE_ENV === 'production'
      ? [
          purgecss.default({
            content: ['./index.html', './src/**/*.{vue,ts,js}'],
            safelist: {
              ...getScssClasses(),
              greedy: [/svg$/, /path$/],
            },
            defaultExtractor: content =>
              content.match(/[\w-/:%.]+(?<!:)/g) || [],
          }),
          cssnano({ preset: 'default' }),
        ]
      : []),
  ],
}
