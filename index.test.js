import { map, filter, reduce, log, someFunction } from "./index.js"

test("map returns a transformed array when given an array and a transformer", () => {
    const array = [1, 2, 3]
    const doublerSpy = jest.fn()
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(4)
        .mockReturnValueOnce(6)

    const newArray = map(array, doublerSpy)

    expect(newArray).toEqual([2, 4, 6])
})

test("filter returns a filtered arrau when given an array and a predicate", () => {
    const array = [1, 2, 3]
    const isOdd = jest.fn()
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(true)

    const newArray = filter(array, isOdd)

    expect(newArray).toEqual([1, 3])
})

test("reduce returns a single accumulated value when given an array, a reducer function, and an initial value", () => {
    const array = [1, 2, 3]
    const initial = 0
    const adder = jest.fn()
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(6)

    const reducedValue = reduce(array, adder, initial)

    expect(reducedValue).toEqual(6)
})

test("log gets called with the inputed message", () => {
    console.log = jest.fn()
    log('Hello')
    expect(console.log).toHaveBeenCalledWith('LOG: Hello')
})

test("somefunction to resolve correctly when given someString and somePromise", () => {
    const someString = "pokemon"
    const somePromise = Promise.resolve('some value')

    expect(someFunction(someString, somePromise)).resolves.toEqual("pokemon: some value")
})