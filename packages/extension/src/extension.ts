import { window, ExtensionContext } from 'vscode'
import { getHandlers } from './handlers'
import { ViewProviderSidebar } from './view-provider/view-provider-sidebar'
import { ViewProviderPanel } from './view-provider/view-provider-panel'

export function activate(context: ExtensionContext) {
  const handles = getHandlers()

  const viewProvidersSidebar = new ViewProviderSidebar(context, handles)
  const sidebarViewDisposable = window.registerWebviewViewProvider('sidebar-view-container', viewProvidersSidebar, {
    webviewOptions: { retainContextWhenHidden: true },
  })
  context.subscriptions.push(sidebarViewDisposable)

  const viewProvidersPanel = new ViewProviderPanel(context, handles)
  const panelViewDisposable = window.registerWebviewViewProvider('panel-view-container', viewProvidersPanel, {
    webviewOptions: { retainContextWhenHidden: true },
  })
  context.subscriptions.push(panelViewDisposable)
}

export function deactivate() {}
