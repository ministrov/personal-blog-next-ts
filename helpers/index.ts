export const links = [
  { id: 1, name: "Blog" },
  { id: 2, name: "Projects" },
  { id: 3, name: "About" },
  { id: 4, name: "Newsletter" },
];

export const headerLinks = [
  { id: 1, name: "Twitter " },
  { id: 2, name: "LinkedIn" },
  { id: 3, name: "Email" },
  { id: 4, name: "RSS feed" },
  { id: 5, name: "Add to Feedly" },
];

export function truncateText(text: string, maxLength: number): string {
  return `${text.substring(0, maxLength)}...`;
}

// Check if the character not a letter, but special char like ";"

// if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
//     return -1;
// }

// export function incrementValue(value: number) {
//     return value + 1;
// };

// function memoizeFn(originalFn: (value: number) => void) {
//     const cash = new Map();

//     return (value: number) => {
//         if (!cash.has(value)) {
//             cash.set(
//                 value,
//                 originalFn(value)
//             );
//         }
//         return cash.get(value);
//     }
// };

// const memoizedIncrement = memoizeFn(incrementValue);

// console.log(memoizedIncrement);
