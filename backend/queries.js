const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'alanc',
  host: 'localhost',
  database: 'personal_web',
  password: '1214',
  port: 5432,
});

const getContactSubs = (request, response) => {
  pool.query('SELECT * FROM contact ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getContactSubById = (request, response) => {
  const id =parseInt(request.params.id);

  pool.query('SELECT * FROM contact WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
}

const subContactForm = (request, response) => {
  const { name, email, subject, message } = request.body;

  pool.query('INSERT INTO contact (name, email, subject, message) VALUES ($1, $2, $3, $4)', 
  [name, email, subject, message], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`Submission of contact with ID ${results.insertID}`);
  });
};

const delContactSub = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM contact WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Contact submission with ID ${id} deleted`);
  });
};

const delContactAll = (request, response) => {
  pool.query('TRUNCATE contact', (error, results) => {
    if (error) {
      throw error;
    };
    response.status(200).send('Removed all contacts');
  })
}

module.exports = {
  getContactSubs,
  getContactSubById,
  subContactForm,
  delContactSub,
  delContactAll,
};