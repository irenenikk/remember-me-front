export const NEW_MESSAGE = 'NEW_MESSAGE';
export const RESET_MESSAGE = 'RESET_MESSAGE';

export const postSuccessful = 'Tip saved'
export const postFailed = 'Couldn\'t save tip';
export const deleteFailed = 'Couldn\'t delete tip.'
export const getFailed = 'Couldn\'t get tips.'
export const updateFailed = 'Couldn\'t update tip';

export const newMessageAction = (message) => {
  return {
    message,
    type: NEW_MESSAGE,
  }
}

export const resetMessageAction = () => {
  return {
    type: RESET_MESSAGE,
  }
}

