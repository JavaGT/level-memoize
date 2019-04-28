const hash = require('object-hash');
const level = require('level');

module.exports = location => {
	const db = level(location, {valueEncoding: 'json'});
	return func => function (...args) {
		const hashstring = hash({func: func.toString(), args});
		return db.get(hashstring)
			.catch(async () => {
        const response = await func(...args)
        db.put(hashstring, response)
        return response
      })
	};
};
