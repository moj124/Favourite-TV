import { toPad } from "./toPad";

test("to pad returns currently", () => {
  expect(toPad(2)).toBe("02");
  expect(toPad(10)).toBe("10");
  expect(toPad(123)).toBe("123");
});
