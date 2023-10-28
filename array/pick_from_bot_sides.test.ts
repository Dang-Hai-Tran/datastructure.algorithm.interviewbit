import { pickBotSide } from "./pick_from_bot_sides";

describe("pickBotSide test", () => {
    test("pickBotSide returns correct maximum sum", () => {
        const A = [1, 2, 3, 4, 5, 6];
        const B = 3;
        expect(pickBotSide(A, B)).toBe(15);
    });

    test("pickBotSide returns correct maximum sum", () => {
        const A = [5, -2, 3, 1, 2];
        const B = 3;
        expect(pickBotSide(A, B)).toBe(8);
    });

    test("pickBotSide handles empty array", () => {
        const A: number[] = [];
        const B = 3;
        expect(pickBotSide(A, B)).toBe(0);
    });

    test("pickBotSide handles B greater than array length", () => {
        const A = [1, 2, 3, 4, 5, 6];
        const B = 10;
        expect(pickBotSide(A, B)).toBe(21);
    });
});
