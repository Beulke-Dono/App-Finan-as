import db from './db';

export const seedDb = () => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO users (UserName, Password) VALUES (?, ?, ?);`,
      ['john_doe', 'hashed_password'],
      () => console.log('Dados inseridos com sucesso'),
      (_, error) => console.log('Erro ao inserir dados:', error)
    );
  });
};