export function isNearScrollEnd(
  element: Pick<HTMLElement, 'scrollTop' | 'clientHeight' | 'scrollHeight'>,
  threshold = 64,
) {
  return element.scrollHeight - element.scrollTop - element.clientHeight <= threshold;
}
