import { Datetime.PipePipe } from './datetime.pipe.pipe';

describe('Datetime.PipePipe', () => {
  it('create an instance', () => {
    const pipe = new Datetime.PipePipe();
    expect(pipe).toBeTruthy();
  });
});
