import { differentiate } from "./lab08c1";
import { describe, expect, it } from "vitest";

describe("#differentiate", () => {
    it("works", () => {
        expect(differentiate([1, 0, 2])).toStrictEqual([0, 4]);

        // TODO add more tests here
    });
});
