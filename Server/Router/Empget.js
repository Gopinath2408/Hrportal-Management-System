const mongoose = require('mongoose');
const empmodel=require('./Models/Newemp')

const app=express();
app.use(express.json());
app.use(cors())

require('./db/connection');

app.get('/employees', async (req, res) => {
    try {
      const employees = await empmodel.find();
      res.json(employees);
    } catch (error) {
      console.error('Error fetching employees:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  