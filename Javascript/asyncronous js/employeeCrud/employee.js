var userdata = [];
const base_url = 'https://jsonplaceholder.typicode.com/users/1';
const userPromies = fetch(base_url);
userPromies.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    userdata = data;
    console.log(console.log(JSON.stringify(data)));
  });
});

function getUserDetails(id) {
    const url = `${base_url}/${id}`;

}

// https://stackoverflow.com/questions/8302166/dynamic-creation-of-table-with-dom