import { writeSearchToQuery } from '../../src/query/query-components.js';

const test = QUnit.test;

QUnit.module('QUERY TESTS');



test('write search to query test when existing is blank', assert => {
    //Arrange
    const existingQuery = '';
    const expected = 'name=squirrel';
    const searchTerm = 'squirrel';
    //Act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    //Assert
    assert.equal(result, expected);
});