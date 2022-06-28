import { useEffect, useState } from "react"

// init value to be type of T or function that returns T
type InitValue<T> = T | (() => T)

const useLocalStorage2 = <T>(key: string, initValue: InitValue<T>): [T, (value: T) => void] => {
    const [value, setValue] = useState<T>(() => {

        const jsonValue = localStorage.getItem(key);
        if (jsonValue) { return JSON.parse(jsonValue) }

        if (typeof initValue == "function") {
            return (initValue as () => T)()
        } else {
            return initValue as T
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
        setValue(value)
    }, [key, value])

    return [value as T, setValue]
}

export default useLocalStorage2