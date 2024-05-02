const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch((err) => console.error('DB not connected', err));

const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    // Vérifie si l'origine est autorisée
    if (origin === 'https://quoiz.onrender.com' || origin === 'http://localhost:3000') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/authRoutes'));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
