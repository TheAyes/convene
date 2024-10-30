import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { type IStatusBar, styles } from ".";
import { Avatar } from "../avatar";

export const StatusBar = component$<IStatusBar>(() => {
	useStylesScoped$(styles);

	return (
		<div class="status-bar">
			<Avatar />
			<div>
				<h4>Ayes</h4>
				<p>online</p>
			</div>
		</div>
	);
});
