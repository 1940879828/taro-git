import { ExtensionContext, WebviewPanel, WebviewView, WebviewViewProvider } from 'vscode'
import { AbstractViewProvider } from './view-provider-abstract'
import { HandlerConfig } from '@jsonrpc-rx/server'

export class ViewProviderSidebar extends AbstractViewProvider implements WebviewViewProvider {
  constructor(context: ExtensionContext, handlers: HandlerConfig) {
    super(context, handlers, {
      distDir: 'out/view-vue',
      indexPath: 'out/view-vue/src/sidebar/index.html',
    })
  }

  async resolveWebviewView(webviewView: WebviewView) {
    const { webview } = webviewView
    webview.options = {
      enableScripts: true,
      localResourceRoots: [this.context.extensionUri],
    }
    this.exposeHandlers(webview)
    webview.html = await this.getWebviewHtml(webview)
  }
}
