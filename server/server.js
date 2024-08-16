// GET Request (Read)
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => console.log('GET Request Successful:', data))
  .catch(error => console.error('There was a problem with the GET request:', error));

// POST Request (Create)
const postData = {
  title: 'foo',
  body: 'bar',
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => console.log('POST Request Successful:', data))
  .catch(error => console.error('There was a problem with the POST request:', error));

// DELETE Request (Delete)
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      console.log('DELETE Request Successful');
    } else {
      console.error('There was a problem with the DELETE request:', response.statusText);
    }
  })
  .catch(error => console.error('There was a problem with the DELETE request:', error));
