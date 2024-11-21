export interface IInputField {
	type: HTMLInputElement["type"];
	value?: HTMLInputElement["value"];
	placeholder?: HTMLInputElement["placeholder"];

	[key: string]: any;
}
