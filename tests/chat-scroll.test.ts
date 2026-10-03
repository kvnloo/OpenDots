import { describe, expect, it } from 'vitest';
import { isNearScrollEnd } from '../src/client/chat-scroll';

describe('chat scroll following', () => {
  it('follows while already at the end', () => {
    expect(
      isNearScrollEnd({ scrollTop: 600, clientHeight: 400, scrollHeight: 1000 }),
    ).toBe(true);
  });

  it('keeps following within the end threshold', () => {
    expect(
      isNearScrollEnd({ scrollTop: 540, clientHeight: 400, scrollHeight: 1000 }),
    ).toBe(true);
  });

  it('stops following after the reader moves into history', () => {
    expect(
      isNearScrollEnd({ scrollTop: 400, clientHeight: 400, scrollHeight: 1000 }),
    ).toBe(false);
  });

  it('can use an explicit threshold', () => {
    const position = { scrollTop: 540, clientHeight: 400, scrollHeight: 1000 };
    expect(isNearScrollEnd(position, 32)).toBe(false);
    expect(isNearScrollEnd(position, 64)).toBe(true);
  });
});
