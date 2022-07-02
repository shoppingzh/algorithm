import random from '../src/random'

describe('random', () => {
  
  it('base', () => {
    
    for (let i = 0; i < 10000; i++) {
      const n = random(1, 10)
      expect(n).toBeGreaterThanOrEqual(1)
      expect(n).toBeLessThanOrEqual(10)
    }

  })

})