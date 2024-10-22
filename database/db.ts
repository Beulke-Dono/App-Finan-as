import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('finance.db');

// Função para criar as tabelas
export const createTables = () => {
  db.transaction(tx => {
    // Tabela User
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS User (
        UserID INTEGER PRIMARY KEY AUTOINCREMENT,
        UserName TEXT NOT NULL,
        Password TEXT NOT NULL
      );`
    );

    // Tabela Font
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Font (
        FontID INTEGER PRIMARY KEY AUTOINCREMENT,
        FontName TEXT NOT NULL
      );`
    );

    // Tabela Type
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Type (
        TypeID INTEGER PRIMARY KEY AUTOINCREMENT,
        TypeName TEXT NOT NULL
      );`
    );

    // Tabela ObjectiveType
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS ObjectiveType (
        ObjectiveTypeID INTEGER PRIMARY KEY AUTOINCREMENT,
        ObjectiveTypeName TEXT NOT NULL
      );`
    );

    // Tabela Income
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Income (
        RendaID INTEGER PRIMARY KEY AUTOINCREMENT,
        UserID INTEGER,
        EntryDate TEXT NOT NULL,
        IncomeAmount REAL NOT NULL,
        TypeID INTEGER,
        FontID INTEGER,
        FOREIGN KEY (UserID) REFERENCES User(UserID),
        FOREIGN KEY (TypeID) REFERENCES Type(TypeID),
        FOREIGN KEY (FontID) REFERENCES Font(FontID)
      );`
    );

    // Tabela Expanse
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Expanse (
        ExpanseID INTEGER PRIMARY KEY AUTOINCREMENT,
        UserID INTEGER,
        OutgoingDate TEXT NOT NULL,
        ExpanseAmount REAL NOT NULL,
        TypeID INTEGER,
        FontID INTEGER,
        FOREIGN KEY (UserID) REFERENCES User(UserID),
        FOREIGN KEY (TypeID) REFERENCES Type(TypeID),
        FOREIGN KEY (FontID) REFERENCES Font(FontID)
      );`
    );

    // Tabela EmergencyReserve
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS EmergencyReserve (
        EmergenceReserveID INTEGER PRIMARY KEY AUTOINCREMENT,
        UserID INTEGER,
        EmergenceReserveAmount REAL NOT NULL,
        FOREIGN KEY (UserID) REFERENCES User(UserID)
      );`
    );

    // Tabela Objective
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS Objective (
        ObjectiveID INTEGER PRIMARY KEY AUTOINCREMENT,
        ObjectiveName TEXT NOT NULL,
        ObjectiveDescription TEXT,
        LimitDate TEXT,
        ObjectiveAmount REAL NOT NULL,
        UserID INTEGER,
        ObjectiveTypeID INTEGER,
        FOREIGN KEY (UserID) REFERENCES User(UserID),
        FOREIGN KEY (ObjectiveTypeID) REFERENCES ObjectiveType(ObjectiveTypeID)
      );`
    );
  });
};

export default db;
