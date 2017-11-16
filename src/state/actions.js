export const CLICK = 'CLICK';
export const INPUT_CHANGED = 'INPUT_CHANGED';

export function clickAction() {
  return {
    type: CLICK,
  };
}

export function inputChangedAction(input) {
  return {
    input: input,
    type: INPUT_CHANGED,
  };
}
