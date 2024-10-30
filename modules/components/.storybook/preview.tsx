import { Preview } from "@storybook/html";
import { Parameters } from "storybook-framework-qwik";

import "@harmony/shared/src/global.scss";

export const parameters: Parameters = {
	a11y: {
		config: {},
		options: {
			checks: { "color-contrast": { options: { noScroll: true } } },
			restoreScroll: true
		}
	},
	options: {
		showRoots: true
	},
	docs: {
		iframeHeight: "200px"
	}
};

const preview: Preview = {
	parameters: {
		layout: "centered"
	}
};

export default preview;
