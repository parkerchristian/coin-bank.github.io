import { writeSearchToQuery, readFromQuery, writePageToQuery } from '../../src/query/query-component.js';

const test = QUnit.test;

QUnit.module('QUERY TESTS');

test('write search to query test when existing is blank', assert => {
    //Arrange
    const existingQuery = '';
    const expected = 'name=squirrel&page=1';
    const searchTerm = 'squirrel';
    //Act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    //Assert
    assert.equal(result, expected);
});

test('write search to query test with existing query', assert => {
    //Arrange
    const existingQuery = 'name=dog&page=3';
    const expected = 'name=squirrel&page=1';
    const searchTerm = 'squirrel';
    //Act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    //Assert
    assert.equal(result, expected);
});

test('read existing query', assert => {
    // arrange
    const existingQuery = 'name=squirrel&page=1';
    const expected = {
        name: 'squirrel',
        page: 1
    };
    // act
    const result = readFromQuery(existingQuery);
    // assert
    assert.deepEqual(result, expected);
});

test('update query on page change', assert => {
    // Arrange 
    const existingQuery = 'name=squirrel&page=1';
    const expected = 'name=squirrel&page=2';
    const page = 2;
    //Act
    const result = writePageToQuery(existingQuery, page);
    //Assert
    assert.equal(result, expected);
});