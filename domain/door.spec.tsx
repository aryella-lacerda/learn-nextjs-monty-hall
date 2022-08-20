import { Door } from "./door.entity";

it("should consume the appropriate input props", () => {
  const props = {
    number: 12,
    isOpen: false,
    isSelected: false,
    hasPresent: false,
  };

  const door = new Door(props);

  // Assert
  expect(door.toJSON()).toStrictEqual(props);
});
