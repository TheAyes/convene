import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { type INavLink, styles } from "./nav-link.root";

export const NavLink = component$<INavLink>(({ activeClass, ...props }) => {
	useStyles$(styles);

	const location = useLocation();
	const toPathname = props.href ?? "";
	const locationPathname = location.url.pathname;

	const startSlashPosition =
		toPathname !== "/" && toPathname.startsWith("/") ? toPathname.length - 1 : toPathname.length;
	const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
	const isActive =
		locationPathname === toPathname ||
		(locationPathname.endsWith(toPathname) &&
			(locationPathname.charAt(endSlashPosition) === "/" || locationPathname.charAt(startSlashPosition) === "/"));

	return (
		<Link {...props} class={`${props.class ?? ""} ${isActive ? activeClass : ""}`}>
			<Slot />
		</Link>
	);
});
