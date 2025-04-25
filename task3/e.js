async function fetchPostDetails() {
    try {
      const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const postData = await postResponse.json();
      console.log("Post Title:", postData.title);
  
      const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/" + postData.userId);
      const userData = await userResponse.json();
      console.log("Author:", userData.name);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  fetchPostDetails();
  