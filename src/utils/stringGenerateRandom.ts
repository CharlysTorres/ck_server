export function stringGenerateRandom(length: number, type: number) {
	let result = '';
	let baseString;
	switch (type) {
		case 1:
			baseString = '0123456789';
			break;
		
		case 2:
			baseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
			break;

		case 3:
			baseString = '0123456789abcdef';
			break;

		default:
			baseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()-_=+[]{}\|;:,.<>/?';
			break;
	}
	const baseLength = baseString.length;
	for (let i = 0; i < length; i++) {
		result += baseString.charAt(Math.floor(Math.random() * baseLength));
	}
	return result;
};
