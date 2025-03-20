import { Array } from "effect"

export function differentiate(coeff: number[]): number[] {
    let arr: number[] = []
    let track = 0
    for (const num of coeff) {
        arr = Array.append(arr, track * Array.unsafeGet(coeff, track))
        track ++
    }

    return Array.drop(arr, 1)
}