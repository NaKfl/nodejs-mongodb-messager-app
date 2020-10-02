import express from 'express';
import ConnectDB from './config/connectDB';
import ContactModel from './models/contact.model';

//Connect to MongoDB
ConnectDB();

const app = express();

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(
    `Server is listening on ${process.env.APP_HOST}:${process.env.APP_PORT}`
  );
});

app.get('/test-database', async (req, res) => {
  try {
    const item = {
      userId: '1712254',
      contactId: '0931467534',
    };
    const contact = await ContactModel.createNew(item);
    return res.send(contact);
  } catch (err) {
    console.log(err);
  }
});
