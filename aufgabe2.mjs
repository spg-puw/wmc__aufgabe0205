/* Your implementation of countIdentical */


/* Your implementation of Lottery */
export function Lottery(numbers) {
    
}

/* Test */
export function testSet() {
    const set1 = new Set([1, 2, 3, 4, 5, 6]);
    const set2 = new Set([1, 3, 5, 7, 9, 11, 6]);
    console.log(`${set1.countIdentical(set2)} identical values.`);
}

export function main() {
    const lottery = new Lottery([13, 30, 1, 40, 41, 38]);
    const tipps = [
        [13, 30, 1, 40, 41],       // ignore (does not have 6 numbers)
        [13, 30, 1, 40, 41, 41],   // ignore (does not have 6 numbers because of the double values)
        [38, 41, 40, 1, 30, 13],   // 6
        [45, 13, 30, 1, 40, 41],   // 5
        [45, 44, 13, 30, 1, 40],   // 4
        [45, 44, 43, 13, 30, 1],   // 3
        [45, 44, 43, 42, 13, 30],  // 2
        [45, 44, 43, 42, 39, 13],  // 1
        [45, 44, 43, 42, 39, 37],  // 0
        [45, 44, 43, 42, 39, 37]   // 0
    ]
    for (const t of tipps) { lottery.addTipp(t) };
    const statistics = lottery.getStatistics();
    console.log(statistics);
}

export default { main, testSet, Lottery }
if (import.meta.url.endsWith(process.argv[1])) {
    testSet();
    main();
}
