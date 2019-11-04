import axios from "axios";
import {
  getRandomUser
} from "../call";

jest
  .mock("axios", () => ({
    get: jest.fn()
  }))

it("get random user successfully", async () => {
  const mockReturnData = {
    data: {
      response: 1
    }
  };
  axios.get.mockImplementation(() => Promise.resolve(mockReturnData));
  const result = await getRandomUser();

  expect(result).toEqual(mockReturnData.data);
  axios.get.mockRestore();
});