import { classify_by_standing } from "./lab08c2";
import { describe, expect, it } from "vitest";
import { HashMap } from "effect";

describe("#classify_by_standing", () => {
    it("works", () => {
        expect(
            HashMap.toEntries(
                classify_by_standing(2025, [
                    ["Alpha", "2022-99999"],
                    ["Beta", "2021-11111"],
                    ["Charlie", "2025-12345"],
                    ["Delta", "2024-31415"],
                    ["Echo", "2023-27182"],
                    ["Foxtrot", "2000-00000"],
                ]),
            ),
        ).toStrictEqual(
            HashMap.toEntries(
                HashMap.make(
                    ["freshman", ["Charlie"]],
                    ["sophomore", ["Delta"]],
                    ["junior", ["Echo"]],
                    ["senior", ["Alpha"]],
                    ["immortal", ["Beta", "Foxtrot"]],
                ),
            ),
        );

        // TODO add more tests here
    });
});
