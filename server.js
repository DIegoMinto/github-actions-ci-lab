const express = require('express'); 
const app = require('./app');
const PORT = 3000;

//app.get('/health', (req, res) => {
//  res.status(200).json({ status: 'ok', version: '2.0.0' });
//});
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});