import { component$, useComputed$, useStyles$ } from "@builder.io/qwik";
import { Image as UnpicImage } from "@unpic/qwik";
import { type IAvatar, styles } from ".";

export const Avatar = component$<IAvatar>(({ username = "Ayes", gender = "boy", size = "small" }) => {
	const fetchUrl = `https://avatar.iran.liara.run/public/${gender}?username=${username}`;
	useStyles$(styles);

	const outSize = useComputed$(() => {
		switch (size) {
			case "small":
				return "32";
			case "medium":
				return "46";
			case "large":
				return "64";
		}
	});

	return (
		<div class={["avatar"]}>
			<UnpicImage src={fetchUrl} layout="constrained" width={outSize.value} height={outSize.value} />
		</div>
	);
});
