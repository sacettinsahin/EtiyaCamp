import { ProductPipe } from './product.pipe';

describe('ProductPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductPipe();
    expect(pipe).toBeTruthy();
  });
});
