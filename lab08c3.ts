import { HashMap, Array } from "effect"

export function manageParking() {
    let mappy: HashMap.HashMap<number, Array<number>> = HashMap.empty()
    function reg(n: number, interval: Array<number>) {
        mappy = HashMap.set(mappy, n, interval)
    }
    function ask(n: number, time: number): boolean {
        if (HashMap.has(mappy, n)){
            return Array.unsafeGet(HashMap.unsafeGet(mappy, n), 0) <= time && time <= Array.unsafeGet(HashMap.unsafeGet(mappy, n), 1) 
        } else {
            return false
        }
    }

    return [reg, ask]
}