import { LETTERS, NUMBERS, SYMBOLS } from "./tokens";

enum CharacterType {
	LETTER,
	NUMBER,
	SYMBOL
}

const getRandomElement = (array: string[]): string => {
	return array[Math.floor(Math.random() * array.length)];
};

export const generateRandomPassword = (): string => {
	let password = "";
	for (let i = 0; i < 12; i++) {
		const characterType = Math.floor(Math.random() * 3);
		switch (characterType) {
			case CharacterType.LETTER:
				password += getRandomElement(LETTERS);
				break;
			case CharacterType.NUMBER:
				password += getRandomElement(NUMBERS);
				break;
			case CharacterType.SYMBOL:
				password += getRandomElement(SYMBOLS);
				break;
			default:
				break;
		}
	}
	return password;
};
