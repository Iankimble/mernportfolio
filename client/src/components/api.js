export const sendMsg = msg => {
  return fetch(`${process.env.REACT_APP_API_URL}/sendMsg`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(msg)
  });
};
