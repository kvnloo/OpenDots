export function completedVoiceAnnouncement(
  caption: { speaker: 'user' | 'assistant'; text: string } | undefined,
  assistantName: string,
) {
  if (!caption?.text.trim()) return '';
  const speaker = caption.speaker === 'user' ? 'You' : assistantName;
  return `${speaker}: ${caption.text}`;
}
