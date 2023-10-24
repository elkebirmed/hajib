export function getParentByLevel(
  elm: HTMLElement | null | undefined,
  levels: number
) {
  let parent = elm;

  for (let i = 0; i < levels; i++) {
    parent = parent?.parentElement;
  }

  return parent;
}
