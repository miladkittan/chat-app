export const formatDate = (date) => {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
  
    const formattedDate = new Date(date).toLocaleString('en-US', options);
    return formattedDate;
  };
  
  export const formatTime = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
  
    const formattedTime = new Date(date).toLocaleString('en-US', options);
    return formattedTime;
  };
  