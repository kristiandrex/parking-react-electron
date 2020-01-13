const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let window;

app.on("ready", () => {
	window = new BrowserWindow({
		minHeight: 650,
		minWidth: 1200,
		webPreferences: {
			devTools: true,
			nodeIntegration: true
		}
	});

	window.setMenuBarVisibility(false);

	isDev
		? window.loadURL("http://localhost:8080")
		: window.loadFile(path.resolve(__dirname, "../build/index.html"));
});
