const server = require('./api/server');

const PORT = process.env.PORT || 6800;
server.listen(PORT, () => {
	console.log(`\n Sever listening on ${PORT} \n`);
});
