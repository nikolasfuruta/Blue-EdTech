const { sum, sub, imprimir, verdade } = require('./function');

list = [2,4,6,8]
resp = [4,6,8,10]

test('adds 1 + 2 to equal 3', () => {
  list.forEach((item,index) => {
    expect(sum(2,item)).toBe(resp[index]);
  });
});

test('sub 2 ', () => {
  resp.forEach((item,index) => {
    expect(sub(item,2)).toBe(list[index]);
  })
});

test('return a inside a string', () => {
  expect(imprimir(10)).toBe(`Exibir 10`)
});

test('teste de verdade e falso', () => {
  expect(verdade(true)).not.toBeNull();
  expect(verdade(true)).toBeDefined();
  expect(verdade(true)).not.toBeUndefined();
  expect(verdade(false)).not.toBeTruthy();
  expect(verdade(false)).toBeFalsy();
});