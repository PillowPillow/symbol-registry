const LIB_PATH = `${__dirname}/../`;
var chai = require('chai'),
	{expect} = chai;

describe('Registry', function() {
	var registry = require(LIB_PATH);

	it('should clear the cache', function() {
		var key = registry('foobar');
		registry.erase();
		var newKey = registry('foobar');

		expect(key).to.be.not.equal(newKey);
	})

	describe('Case insensitive', function() {

		it('should return a new symbol', function() {
			var key = registry('foobar');
			expect(key).to.be.a('symbol')
		})

		it('should return an array of new symbol', function() {
			var keys = registry(['foo', 'bar']);
			expect(keys).to.be.an.instanceOf(Array)
			keys.forEach((key) => expect(key).to.be.a('symbol'));
		})

		it('should use the cache if it\'s possible', function() {
			var fooo = registry('fooo'),
				foooFromCache = registry('fooo');
			expect(foooFromCache).to.be.equal(fooo);
		})

	})

	describe('Case insensitive', function() {

		before(function() {
			registry.caseSensitive = true;
		})

		it('should return a new symbol', function() {
			var key = registry('foobar');
			expect(key).to.be.a('symbol')
		})

		it('should return an array of new symbol', function() {
			var keys = registry(['foo', 'bar']);
			expect(keys).to.be.an.instanceOf(Array)
			keys.forEach((key) => expect(key).to.be.a('symbol'));
		})

		it('should return two different symbols', function() {
			var [s1,s2] = registry(['foo', 'Foo']);
			expect(s1).to.not.equal(s2);
		})

		it('should return two times the same symbol', function() {
			var [s1,s2] = registry(['foo', 'foo']);
			expect(s1).to.equal(s2);
		})

	})
});