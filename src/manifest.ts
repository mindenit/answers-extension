import { defineManifest } from '@crxjs/vite-plugin'
import packageData from '../package.json'

const isDev = process.env.NODE_ENV === 'development'

export default defineManifest({
  name: `${packageData.displayName || packageData.name}${isDev ? ' Dev' : ''}`,
  description: packageData.description,
  version: packageData.version,
  version_name: '0.0.2b2',
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
      matches: ['*://*.dl.nure.ua/*'],
      js: ['src/contentScript/index.tsx', 'src/styleContentScript/index.js'],
    },
  ],
  side_panel: {
    default_path: 'sidepanel.html'
  },
  web_accessible_resources: [
    {
      resources: ['img/icon-72.png', 'installation.html', 'src/styleContentScript/styles.css', 'update.html', "src/assets/telegram-svgrepo-com.svg"],
      matches: ['*://*.dl.nure.ua/*'],
    },
  ],
  permissions: ['sidePanel', 'storage', 'activeTab'],
  content_security_policy: {
    extension_pages: "script-src 'self'; object-src 'self'",
  },
})