import { TextSelectionHandler } from "./components/TextSelectionHandler/TextSelectionHandler";
import { WindowTextArea } from "./components/Window/WindowTextarea";
import { mindenitLogo } from "../assets/index";

console.info('contentScript is running')
// content.ts
console.info('contentScript is running too good!!!')

// Initialize the handler
new TextSelectionHandler( new WindowTextArea(), mindenitLogo);