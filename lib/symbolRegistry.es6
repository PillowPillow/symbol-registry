Object.defineProperties(SymbolRegistry, {
	_cache: {
		enumerable: false,
		writable: false,
		value: {}
	},
	_caseSensitive: {
		enumerable: false,
		value: false,
		writable: true
	},
	caseSensitive: {
		get: () => SymbolRegistry._caseSensitive,
		set: (value) => {
			!!value !== SymbolRegistry._caseSensitive && SymbolRegistry.erase();
			SymbolRegistry._caseSensitive = !!value;
		}
	},
	erase: {value: erase}
});

export default SymbolRegistry;

function SymbolRegistry(names = []) {

		let isArray = names instanceof Array,
			symbols = [];

		if(!isArray)
			names = [names];

		for(let name of names) {
			let fName = SymbolRegistry._caseSensitive ? name : name.toLowerCase();
			let value =  fName in SymbolRegistry._cache ?
					SymbolRegistry._cache[fName] :
					(SymbolRegistry._cache[fName] = Symbol(name));
			symbols.push(value);
		}

		return isArray ? symbols : symbols[0];
}

function erase(eraseKeys = undefined) {
	let isDefined = eraseKeys !== undefined,
		isArray = eraseKeys instanceof Array;

	if(!isArray) eraseKeys = [eraseKeys];
	var names = isDefined ? eraseKeys : Object.getOwnPropertyNames(SymbolRegistry._cache);

	for(var name of names) {
		let fName = SymbolRegistry._caseSensitive ? name : name.toLowerCase();
		SymbolRegistry._cache[fName] = null;
		delete SymbolRegistry._cache[fName];
	}
}