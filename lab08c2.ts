import { Array, HashMap, Order, String } from "effect"

export function classify_by_standing(year: number, students: [string, string][]): HashMap.HashMap<string, string[]> {
    let mappy: HashMap.HashMap<string, string[]> = HashMap.make(
        ["freshman", []], ["sophomore", []], ["junior", []], ["senior", []], ["immortal", []]
      )
    for (const arr of students) {
        const person = Array.unsafeGet(arr, 0)
        const sn_year = parseInt(Array.unsafeGet(String.split(Array.unsafeGet(arr, 1), "-"), 0))
        if (year === sn_year){
            mappy = HashMap.modify(mappy, "freshman", (v: string[]) => Array.sort(Array.append(v, person), Order.string))
        } else if (year - 1 === sn_year){
            mappy = HashMap.modify(mappy, "sophomore", (v: string[]) => Array.sort(Array.append(v, person), Order.string))
        } else if (year - 2 === sn_year){
            mappy = HashMap.modify(mappy, "junior", (v: string[]) => Array.sort(Array.append(v, person), Order.string))
        } else if (year - 3 === sn_year){
            mappy = HashMap.modify(mappy, "senior", (v: string[]) => Array.sort(Array.append(v, person), Order.string))
        } else {
            mappy = HashMap.modify(mappy, "immortal", (v: string[]) => Array.sort(Array.append(v, person), Order.string))
        }
        
    }

    return mappy
}