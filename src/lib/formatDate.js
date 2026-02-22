export default function formatDate(value, dateFormat) {
  const date = new Date(value);
  const formattedDate = date.toLocaleDateString("en-US", dateFormat);

  return formattedDate;
}
