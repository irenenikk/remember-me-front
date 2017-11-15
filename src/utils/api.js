export default class Api {
  fetchNewShit() {
    return Promise.resolve({ zip_url: 'https://example.com/lol.zip' });
  }

  syncStore(store) {
    this.store = store;
  }
}
