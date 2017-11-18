export const CLICK = 'CLICK';
export const INPUT_BOOKWRITER_CHANGED = 'INPUT_BOOKWRITER_CHANGED';
export const INPUT_BOOKTITLE_CHANGED = 'INPUT_BOOKTITLE_CHANGED';

export function clickAction() {
  return {
    type: CLICK,
  };
}

export function inputBookWriterChangedAction(input) {
  return {
    input: input,
    type: INPUT_BOOKWRITER_CHANGED,
  };
}

export function inputBookTitleChangedAction(input) {
  return {
    input: input,
    type: INPUT_BOOKTITLE_CHANGED,
  };
}
