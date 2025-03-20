export function truncateText(text: string, maxLength: number):string {
    return `${text.substring(0, maxLength)}...`;
}

// Check if the character not a letter, but special char like ";"

// if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
//     return -1;
// }

export function icreament(value: number | string) {
    if (typeof value === 'number') {
        return `${value + 1}`;
    } else if (typeof value === 'string') {
        return `${console.log('increament function was invoked')}`;
    }
};