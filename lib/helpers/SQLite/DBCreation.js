class DBCreation {
  onCreate(db) {
    console.log('Loaded SQLite DB');
  }
  onError(error) {
    console.error(error);
  }
}
const instance = new DBCreation();
export default instance;
