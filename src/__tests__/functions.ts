import { addStuff } from "../functions"

test('should add', () => {
    expect(addStuff(2,4)).toBe(6)
})