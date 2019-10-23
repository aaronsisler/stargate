exports.handler = (event, context, callback) => {
  const currentTime = new Date().toTimeString();
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello, it looks like the gateway is working.",
      currentTime: `The current time is ${currentTime}.`
    })
  };

  callback(null, response);
};
