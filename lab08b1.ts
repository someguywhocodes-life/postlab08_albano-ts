import { HashMap, Array } from "effect";

export function organize_students(students: [string, string][]): HashMap.HashMap<string, number> {
    let mappy: HashMap.HashMap<string, number> = HashMap.empty()
    for (const school of students) {
        const sch = Array.unsafeGet(school, 1)
        if (HashMap.has(mappy, sch)){
            mappy = HashMap.modify(mappy, sch, (v: number) => v + 1)
        } else {
            mappy = HashMap.set(mappy, sch, 1)
        }
    }

    return mappy
}