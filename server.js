const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname, '/dist/index.html'));
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
})