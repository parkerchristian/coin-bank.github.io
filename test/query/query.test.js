import { writeSearchToQuery, readFromQuery, writePageToQuery, writeCompareToQuery, readCompareFromQuery } from '../../src/query/query-component.js';

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

test('write compare to query', assert => {
    //Arrange
    const existingQuery = '';
    const expected = 'char1=1010860&char2=1009368&page=1';
    const charactersIDs = [1010860, 1009368];
    //Act
    const result = writeCompareToQuery(existingQuery, charactersIDs);
    //Assert
    assert.equal(result, expected);
});

test('read existing query for Compare', assert => {
    // arrange
    const existingQuery = 'char1=1010860&char2=1009368&page=1';
    const expected = {
        characters: [1010860, 1009368],
        page: 1
    };
    // act
    const result = readCompareFromQuery(existingQuery);
    // assert
    assert.deepEqual(result, expected);
});