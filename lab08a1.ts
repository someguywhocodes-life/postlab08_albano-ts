import { Array } from "effect"

export function poutine_path(r: number, c: number, m: Array<Array<number>>): number {
    if (c === 1){
      let num = 0
      for (const i of m){
        num = num + Array.unsafeGet(i, 0)
      }
      return num
    }
    let new_arr = m
    let bottom_row = Array.unsafeGet(new_arr, r - 1)
    for (let i of Array.range(1, c - 1)) {
        bottom_row = Array.replace(bottom_row, i, Array.unsafeGet(bottom_row, i - 1) + Array.unsafeGet(bottom_row, i))
      }
    new_arr = Array.replace(new_arr, r - 1, bottom_row)
    for (let i of Array.range(0, r - 2)){
        let arr_row = Array.unsafeGet(new_arr, r - 2 - i)
        arr_row = Array.replace(arr_row, 0, Array.unsafeGet(Array.unsafeGet(new_arr, r - 1 - i), 0) +  Array.unsafeGet(arr_row, 0))
        for (let j of Array.range(1, c - 1)){
            const val_1 = Array.unsafeGet(Array.unsafeGet(new_arr, r - 1 - i), j)
            const val_2 = Array.unsafeGet(arr_row, j - 1)
            if (val_1 > val_2) {
                arr_row = Array.replace(arr_row, j, val_1 + Array.unsafeGet(arr_row, j))
              } else {
                arr_row = Array.replace(arr_row, j, val_2 + Array.unsafeGet(arr_row, j))
              }
        }
        new_arr = Array.replace(new_arr, r - 2 - i, arr_row)
    }

    return Array.unsafeGet(Array.unsafeGet(new_arr, 0), c - 1)
}