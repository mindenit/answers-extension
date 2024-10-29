import { defineManifest } from '@crxjs/vite-plugin'
import packageData from '../package.json'

//@ts-ignore
const isDev = process.env.NODE_ENV == 'development'

export default defineManifest({
  name: `${packageData.displayName || packageData.name}${isDev ? ` ➡️ Dev` : ''}`,
  description: packageData.description,
  version: packageData.version,
  version_name: "0.0.1b5",
  manifest_version: 3,
  icons: {
    72: 'img/icon-72.png',
  },
  action: {
    default_popup: 'popup.html',
    default_icon: 'img/icon-72.png',
  },
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: [
        "*://*.dl.nure.ua/*",
        "*://*.answers.mindenit.org/*"
      ],
      js: ['src/contentScript/index.tsx'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['img/icon-72.png'],
      matches: [
        "*://*.dl.nure.ua/*",
        "*://*.answers.mindenit.org/*"
      ],
    },
  ],
  permissions: ['sidePanel', 'storage'],
})
