const FormatDate = ({ dateString }) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear().toString();
  const formattedDate = `${day} ${month}, ${year}`;

  return formattedDate;
};

export default FormatDate;
