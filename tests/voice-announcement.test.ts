import { describe, expect, it } from 'vitest';
import { completedVoiceAnnouncement } from '../src/client/voice-announcement';

describe('completed voice announcements', () => {
  it('labels a completed user utterance', () => {
    expect(
      completedVoiceAnnouncement({ speaker: 'user', text: 'hello there' }, 'Dot'),
    ).toBe('You: hello there');
  });

  it('labels a completed assistant utterance', () => {
    expect(
      completedVoiceAnnouncement(
        { speaker: 'assistant', text: 'hi back' },
        'Research Dot',
      ),
    ).toBe('Research Dot: hi back');
  });

  it('does not announce empty or incomplete content', () => {
    expect(completedVoiceAnnouncement(undefined, 'Dot')).toBe('');
    expect(
      completedVoiceAnnouncement({ speaker: 'assistant', text: '   ' }, 'Dot'),
    ).toBe('');
  });
});
