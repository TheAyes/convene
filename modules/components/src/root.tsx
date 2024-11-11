import "@harmony/shared/src/global.scss";
import { component$ } from "@builder.io/qwik";
import { Header } from "./components/header/header.component";

export default component$(() => {
	return (
		<>
			<head>
				<meta charset="utf-8" />
				<title>Harmony</title>
			</head>
			<body
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}
			>
					<Header />
			</body>
		</>
	);
});
