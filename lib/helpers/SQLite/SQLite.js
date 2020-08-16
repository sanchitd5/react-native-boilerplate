import SQLite from 'react-native-sqlite-storage';
import DBCreation from './DBCreation';
import Configurations from '../../configurations/configurations';

class SQLiteHelper {
  databaseName = Configurations.appDetails.appTitle;
  databaseFileName = this.databaseName + '.db';
  databaseVersion = 1;
  database;

  initDatabase() {
    this.database = SQLite.openDatabase(
      {
        name: this.databaseFileName,
        location: 'default',
      },
      DBCreation.onCreate,
      DBCreation.onError,
    );
  }

  constructor() {
    this.initDatabase();
  }

  executeQuery(query, data, callback) {
    if (this.database === undefined) {
      this.initDatabase();
    }
    this.database.transaction((tx) => {
      tx.executeSql(query, data, callback);
    });
  }
}

const instance = new SQLiteHelper();
export default instance;
