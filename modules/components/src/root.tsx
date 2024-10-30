import "@harmony/shared/src/global.scss";
import { StatusBar } from "./components/status-bar";

export default () => {
	return (
		<>
			<head>
				<meta charset="utf-8" />
				<title>Harmony</title>
			</head>
			<body>
				<StatusBar />
			</body>
		</>
	);
};
