import { manageParking } from "./lab08c3";
import { describe, expect, it } from "vitest";

describe("#manageParking", () => {
    it("works", () => {
        const [reg, ask] = manageParking();

        reg(10, [2, 8]);
        expect(ask(10, 3)).toStrictEqual(true);
        reg(5, [1, 100]);
        expect(ask(5, 200)).toStrictEqual(false);

        // TODO add more tests here
    });
});
