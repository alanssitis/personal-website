const express = require('express');
const db = require('./queries');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const base = '/api'

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get(base, (request, response) => {
  response.json({message: "Welcome to the backend!"});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${ port }.`);
});

// Contact
app.get(base + '/contact', db.getContactSubs);
app.get(base + '/contact/:id', db.getContactSubById);
app.post(base + '/contact', db.subContactForm);
app.delete(base + '/contact/:id', db.delContactSub);
app.delete(base + '/contact', db.delContactAll);