import { sum } from "./sum";
import user from "@testing-library/user-event";

test("should add", () => {
  expect(sum(1, 1)).toBe(2);
});
