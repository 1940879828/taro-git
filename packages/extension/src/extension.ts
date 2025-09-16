// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

// Webview Provider for the sidebar
class TaroCommitProvider implements vscode.WebviewViewProvider {
	public static readonly viewType = 'taro-commit';

	private _view?: vscode.WebviewView;

	constructor(
		private readonly _extensionUri: vscode.Uri,
	) { }

	public resolveWebviewView(
		webviewView: vscode.WebviewView,
		context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken,
	) {
		this._view = webviewView;

		webviewView.webview.options = {
			// Allow scripts in the webview
			enableScripts: true,

			localResourceRoots: [
				this._extensionUri
			]
		};

		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
	}

	private _getHtmlForWebview(webview: vscode.Webview) {
		// Get the local path to main script run in the webview
		const htmlPath = path.join(this._extensionUri.fsPath, 'out', 'view-sidebar', 'index.html');

		try {
			let htmlContent = fs.readFileSync(htmlPath, 'utf8');

			// Convert local paths to vscode-resource URIs
			const baseUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'out', 'view-sidebar'));

			// Replace relative paths with webview URIs
			htmlContent = htmlContent.replace(/href="\/assets\//g, `href="${baseUri}/assets/`);
			htmlContent = htmlContent.replace(/src="\/assets\//g, `src="${baseUri}/assets/`);
			htmlContent = htmlContent.replace(/href="\/vite\.svg"/g, `href="${baseUri}/vite.svg"`);

			return htmlContent;
		} catch (error) {
			console.error('Failed to read HTML file:', error);
			return `<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>Taro Commit</title>
				</head>
				<body>
					<h1>Taro Commit</h1>
					<p>Webview content will be loaded here.</p>
				</body>
				</html>`;
		}
	}
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "taro-git" is now active!');

	// Register the webview provider for the sidebar
	const provider = new TaroCommitProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(TaroCommitProvider.viewType, provider)
	);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('taro-git.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from taro-git!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }
