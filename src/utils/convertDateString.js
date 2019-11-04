export default convertIntToDateString = (intDate) => {
  const convertedDate = new Date(intDate);

  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

  return convertedDate.toLocaleDateString('us-US', options);
}
