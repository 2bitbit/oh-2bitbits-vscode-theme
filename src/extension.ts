import { ExtensionContext, extensions, workspace } from "vscode"
import { updateSettings } from "./update-settings"

export async function regenerateTheme() {
  const configuration = workspace.getConfiguration("oneDark")

  await updateSettings({
    bold: configuration.get<boolean>("bold"),
    italic: configuration.get<boolean>("italic"),
  })
}



const VERSION_KEY = "one-dark-theme:version"

export function activate(context: ExtensionContext): void {
  workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration("oneDark")) {
      regenerateTheme()
    }
  })

  const oldVersion = context.globalState.get(VERSION_KEY)
  const currentVersion = context.extension.packageJSON.version

  if (oldVersion !== currentVersion) {
    regenerateTheme().then(() => {
      context.globalState.update(VERSION_KEY, currentVersion)
    })
  }
}
