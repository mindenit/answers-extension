// src/zip.js
import gulp from 'gulp'
import zip from 'gulp-zip'
import { createRequire } from 'module'
import fs from 'fs/promises'

const require = createRequire(import.meta.url)

async function createZip(buildDir, outputDir) {
  try {
    const manifest = require(`../${buildDir}/manifest.json`)
    
    await fs.mkdir(outputDir, { recursive: true })
    
    const zipName = `${manifest.name.replaceAll(' ', '-')}-${manifest.version}`
    const browserName = buildDir.split('-')[1]
    const fullZipName = `${zipName}-${browserName}.zip`
    
    return new Promise((resolve, reject) => {
      gulp.src(`${buildDir}/**/*`)
        .pipe(zip(fullZipName))
        .pipe(gulp.dest(outputDir))
        .on('end', resolve)
        .on('error', reject)
    })
  } catch (error) {
    console.error(`Error creating zip for ${buildDir}:`, error)
    throw error
  }
}

async function main() {
  try {
    console.log('📦 Starting zip creation...')
    
    await Promise.all([
      createZip('build-chrome', 'package'),
      createZip('build-firefox', 'package')
    ])
    
    console.log('✅ Zip files created successfully!')
  } catch (error) {
    console.error('❌ Error creating zip files:', error)
    process.exit(1)
  }
}

main()