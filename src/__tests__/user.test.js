import { username, city, image } from "../data/user"; // Correct relative path

describe("User data", () => {
  test("username, city, and image are all exported", () => {
    expect(username).toEqual("Liza");
    expect(city).toEqual("New York");
    expect(image).toEqual("https://i.imgur.com/mV8PQxj.gif");
  });
});
