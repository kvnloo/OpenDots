import { describe, expect, it } from 'vitest';
import { shouldSubmitComposerKey } from '../src/client/composer-key';

describe('composer Enter handling', () => {
  it.each([
    {
      name: 'normal Enter',
      event: { key: 'Enter', shiftKey: false, isComposing: false, keyCode: 13 },
      submit: true,
    },
    {
      name: 'Shift+Enter',
      event: { key: 'Enter', shiftKey: true, isComposing: false, keyCode: 13 },
      submit: false,
    },
    {
      name: 'active IME composition',
      event: { key: 'Enter', shiftKey: false, isComposing: true, keyCode: 13 },
      submit: false,
    },
    {
      name: 'IME boundary keydown',
      event: { key: 'Enter', shiftKey: false, isComposing: false, keyCode: 229 },
      submit: false,
    },
    {
      name: 'non-Enter key',
      event: { key: 'a', shiftKey: false, isComposing: false, keyCode: 65 },
      submit: false,
    },
  ])('$name', ({ event, submit }) => {
    expect(shouldSubmitComposerKey(event)).toBe(submit);
  });
});
