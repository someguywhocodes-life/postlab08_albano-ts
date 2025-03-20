import { Equal, HashMap } from "effect";
import { organize_students } from "./lab08b1";
import { describe, expect, it } from "vitest";

describe("#organize_students", () => {
    it("works", () => {
        expect(
            Equal.equals(
                organize_students([
                    ["Hoshino", "Abydos"],
                    ["Kuroko", "Abydos"],
                    ["Hina", "Gehenna"],
                    ["Mika", "Trinity"],
                    ["Tsubaki", "Hyakkiyako"],
                    ["Wakamo", "Hyakkiyako"],
                ]),
                HashMap.make(
                    ["Abydos", 2],
                    ["Gehenna", 1],
                    ["Trinity", 1],
                    ["Hyakkiyako", 2],
                ),
            ),
        ).toStrictEqual(true);

        // TODO add more tests here
    });
});
