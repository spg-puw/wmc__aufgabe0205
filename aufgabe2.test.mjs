import t from './aufgabe2.mjs'

describe('Lottery', () => {
    const log = console.log;

    beforeEach(() => {
        console.log = import.meta.jest.fn();
    });

    afterAll(() => {
        console.log = log;
    });

    test("main", () => {
        t.main();

        expect(console.log).toHaveBeenCalledWith(
            expect.objectContaining({"0": 2, "1": 1, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1})
        );
    });

    test("set extension", () => {
        t.testSet();

        expect(console.log).toHaveBeenCalledWith(
            expect.stringContaining(`4 identical values.`)
        );
    });

    //TODO: add more test for exceptions and invalid tipps
});