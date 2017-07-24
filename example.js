// Login
fetch('http://localhost:3000/sessions', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'nut@gmail.com',
    password: 'freedom'
  })
})
  .then(res => res.json())
  .then(({user}) => console.log(user));

// get header
// .then(res => res.headers.get('Authorization'))

// get articles categoryId = 1
fetch('http://localhost:3000/articles?categoryId=1')
  .then(res => res.json())
  .then(({articles}) => console.log(articles))