import thousandth from '../src/thousandth'

it('test', () => {
  
  [
    [123, '123'],
    [1234, '1,234'],
    [12345, '12,345'],
    [123456, '123,456'],
    [1234567, '1,234,567'],
  ].forEach(o => {
    expect(thousandth(o[0] as any)).toBe(o[1])
  })

})