import { useState } from "react"

// init value to be type of T or function that returns T
type InitValue<T> = T | (() => T)

const useLocalStorage = <T>(key: string, initValue: InitValue<T>): [T, (value: T) => void] => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initValue
        } catch (error) {
            console.log(error)
            return initValue
        }
    }
    )

    const setValue = (value: T) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
            setStoredValue(value)
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setValue]
}


export default useLocalStorage 