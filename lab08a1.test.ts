import { poutine_path } from "./lab08a1";
import { describe, expect, it } from "vitest";

describe("#poutine_path", () => {
    it("works", () => {
        expect(
            poutine_path(7, 8, [
                [6, 13, 56, 17, 24, 55, 48, 12],
                [10, 55, 50, 53, 19, 24, 8, 1],
                [48, 47, 27, 23, 19, 9, 7, 1],
                [52, 9, 11, 9, 8, 1, 13, 12],
                [20, 12, 6, 6, 24, 72, 1, 8],
                [5, 11, 8, 68, 20, 19, 72, 1],
                [11, 56, 51, 19, 66, 24, 13, 72],
            ]),
        ).toStrictEqual(500);
    });

    it("works", () => {
        expect(
            poutine_path(2, 1, [
                [1],

                [1]
            ]),
        ).toStrictEqual(2);
    });
    it("works", () => {
        expect(
            poutine_path(2, 2, [
                [1, 4],
                [1, 3]
            ]),
        ).toStrictEqual(8);
    });

});
