'use strict';

const isRepeated= require('../repeated-word.js');

test('return the text is unprovided if it was empty string',()=>{
    let str= "";

    let expected= isRepeated(str);

    expect(expected).toEqual('The string provided is empty');
});

test('Happy results (Expected results)',()=>{
    let str= "Once upon a time, there was a brave princess who...";

    let expected= isRepeated(str);

    expect(expected).toEqual('a');
});

test('Exception',()=>{
    let str= " ";

    let expected= isRepeated(str);

    expect(expected).toEqual('Exception');
});

