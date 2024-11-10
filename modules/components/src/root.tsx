import "@harmony/shared/src/global.scss";
import { component$ } from "@builder.io/qwik";
import { DataStore } from "./components/data-store/data-store.component";
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
				<DataStore>
					<Header />
				</DataStore>
			</body>
		</>
	);
});
