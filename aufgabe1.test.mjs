import t from './aufgabe1.mjs'

describe('Datum', () => {
    const log = console.log;

    beforeEach(() => {
        console.log = import.meta.jest.fn();
    });

    afterAll(() => {
        console.log = log;
    });

    test("main", () => {
        t.main();

        const dates = `07.09.2020
        06.09.2021
        05.09.2022
        04.09.2023
        02.09.2024
        01.09.2025
        07.09.2026
        06.09.2027
        04.09.2028
        03.09.2029
        02.09.2030
        01.09.2031
        06.09.2032
        05.09.2033
        04.09.2034
        03.09.2035
        01.09.2036
        07.09.2037
        06.09.2038
        05.09.2039`.split("\n").map(e => e.trim());

        for (const d of dates) {
            expect(console.log).toHaveBeenCalledWith(
                expect.stringContaining(d)
            );
        }
    });

    test("formatting", () => {
        let d = new Date("2022-06-22");
        expect(d.toGermanDateString()).toBe("22.06.2022");

        d = new Date("2022-01-01");
        expect(d.toGermanDateString()).toBe("01.01.2022");

        d = new Date("2022-12-24");
        expect(d.toGermanDateString()).toBe("24.12.2022");
    });

    test("begin", () => {
        expect(Date.schoolyearBegin(2023).getDate()).toBe(4);
        expect(Date.schoolyearBegin(2050).getDate()).toBe(5);
    });
});