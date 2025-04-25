function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Data fetched");
        resolve("Raw Data");
      }, 1000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Data processed:", data);
        resolve("Processed Data");
      }, 1000);
    });
  }
  
  function saveData(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Data saved:", data);
        resolve("Save Confirmation");
      }, 1000);
    });
  }
  
  function sendNotification(response) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Notification sent:", response);
        resolve("Notification Complete");
      }, 1000);
    });
  }
  
  getData()
    .then(processData)
    .then(saveData)
    .then(sendNotification)
    .then(() => console.log("All tasks completed successfully!"))
    .catch(error => console.error("Error:", error));
  