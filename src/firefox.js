import fs from "fs";
import path from "path";

const firefoxManifestPath = path.join(process.cwd(), 'build-firefox', 'manifest.json');

fs.readFile(firefoxManifestPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading Chrome manifest:', err);
    return;
  }

  let manifest = JSON.parse(data);

  if (!manifest.description) {
    manifest.description = "__MSG_extensionDesc__";
  }

  if (manifest.background && manifest.background.service_worker) {
    manifest.background = {
      scripts: [manifest.background.service_worker],
      type: "module",
    };
  }

  if (!manifest.permissions.includes("activeTab")) {
    manifest.permissions.push("activeTab");
  }
  if (!manifest.permissions.includes("scripting")) {
    manifest.permissions.push("scripting");
  }

  if (!manifest.optional_permissions) {
    manifest.optional_permissions = ["<all_urls>"];
  }

  if (!manifest.host_permissions) {
    manifest.host_permissions = ["*://*.dl.nure.ua/*"];
  }

  if (!manifest.browser_specific_settings) {
    manifest.browser_specific_settings = {
      gecko: {
        id: "mindenit-answers@mindenit.ua",
        strict_min_version: "58.0",
      },
    };
  }

  if (!manifest.commands) {
    manifest.commands = {
      "trigger-answer": {
        suggested_key: {
          default: "Ctrl+Shift+Y",
          mac: "Command+Shift+Y",
        },
        description: "__MSG_extension_settings_keyboard_shortcut_trigger_answer__",
      },
    };
  }

  fs.writeFile(firefoxManifestPath, JSON.stringify(manifest, null, 2), (err) => {
    if (err) {
      console.error('Error writing Firefox manifest:', err);
    } else {
      console.log('Firefox manifest generated successfully.');
    }
  });
});
