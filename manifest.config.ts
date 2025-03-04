import { env } from "node:process"
import type { ManifestV3Export } from "@crxjs/vite-plugin"
import packageJson from "./package.json" with { type: "json" }

const { version, name, description, displayName } = packageJson
// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = "0"] = version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, "")
  // split into version parts
  .split(/[.-]/)

export default {
  author: {
    email: "volodymyr.nakonechnyi28@gmail.com",
  },
  name: env.mode === "staging" ? `[INTERNAL] ${name}` : displayName || name,
  description,
  version: `${major}.${minor}.${patch}.${label}`,
  version_name: version,
  manifest_version: 3,
  action: {
    default_popup: "src/ui/action-popup/index.html",
  },
  background: {
    service_worker: "src/background/index.ts",
    type: "module",
  },
  content_scripts: [
    {
      all_frames: true,
      js: ["src/content-script/index.ts"],
      matches: ["*://*/*"],
      run_at: "document_end",
    },
    {
      all_frames: true,
      js: ["src/text-highlight-script/index.ts"],
      matches: ["*://*/*"],
      run_at: "document_end",
    },
    {
      all_frames: true,
      js: ["src/content-style-nure-script/index.ts"],
      matches: ["*://*/*"],
      run_at: "document_end",
    }
  ],
  side_panel: {
    default_path: "src/ui/side-panel/index.html",
  },
  options_page: "src/ui/options-page/index.html",
  offline_enabled: true,
  host_permissions: ["https://dl.nure.ua/*"],
  permissions: [
    "storage", 
    "tabs", 
    "background", 
    "sidePanel",
    "webNavigation",
  ],

  web_accessible_resources: [
    {
      resources: ["*"],
      matches: ["*://*/*"]
    }
  ],
  sandbox: {
    pages: ["src/ui/side-panel/index.html"]
  },
  content_security_policy: {
    extension_pages: "script-src 'self'; object-src 'self'; frame-src 'self';"
  },
  icons: {
    16: "src/assets/logo.png",
    24: "src/assets/logo.png",
    32: "src/assets/logo.png",
    128: "src/assets/logo.png",
  },
} as ManifestV3Export