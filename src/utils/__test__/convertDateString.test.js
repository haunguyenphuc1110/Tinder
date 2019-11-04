import convertDateString from '../convertDateString';

it("get expected date", () => {
  const expectedResult = "1/4/1970";
  const result = convertDateString(268069275);
  expect(result).toEqual(expectedResult)
});