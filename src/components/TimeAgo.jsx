function getTimeDifference(dateString) {
  const given = new Date(dateString);
  const now = new Date();

  if (given > now) return { error: "Date is in the future" };

  let years = now.getFullYear() - given.getFullYear();
  let months = now.getMonth() - given.getMonth();
  let days = now.getDate() - given.getDate();
  let hours = now.getHours() - given.getHours();
  let minutes = now.getMinutes() - given.getMinutes();
  let seconds = now.getSeconds() - given.getSeconds();
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }

  if (minutes < 0) {
    minutes += 60;
    hours--;
  }

  if (hours < 0) {
    hours += 24;
    days--;
  }

  if (days < 0) {
    months--;
    const prevMonthDays = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();
    days += prevMonthDays;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days, minutes, hours, seconds };
}
function TimeAgo({ dateString }) {
  const { years, months, days, hours, minutes, seconds } =
    getTimeDifference(dateString);

  const formatTime = () => {
    if (years > 0) {
      return years === 1 ? "a year ago" : `${years} years ago`;
    }
    if (months > 0) {
      return months === 1 ? "a month ago" : `${months} months ago`;
    }
    if (days > 0) {
      return days === 1 ? "a day ago" : `${days} days ago`;
    }
    if (hours > 0) {
      return hours === 1 ? "an hour ago" : `${hours} hours ago`;
    }
    if (minutes > 0) {
      return minutes === 1 ? "a minute ago" : `${minutes} minutes ago`;
    }
    if (seconds > 0) {
      return seconds === 1 ? "a second ago" : `${seconds} seconds ago`;
    }
    return "Just now";
  };

  return <p>{formatTime()}</p>;
}

export default TimeAgo;
