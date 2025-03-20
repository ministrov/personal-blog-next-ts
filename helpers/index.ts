export function truncateText(text: string, maxLength: number):string {
    return `${text.substring(0, maxLength)}...`;
}

// Check if the character not a letter, but special char like ";"

// if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
//     return -1;
// }

export function incrementValue(value: number) {
    return value + 1;
};

function memoizeFn(originalFn: (value: number) => void) {
    const cash = new Map();

    return (value: number) => {
        if (!cash.has(value)) {
            cash.set(
                value,
                originalFn(value)
            );
        }
        return cash.get(value);
    }
};


const memoizedIncrement = memoizeFn(incrementValue);

console.log(memoizedIncrement);