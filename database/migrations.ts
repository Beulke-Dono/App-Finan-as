import db from './db';

export const migrateDb = () => {
  db.transaction(tx => {
    tx.executeSql(
      `ALTER TABLE users ADD COLUMN age INTEGER;`,
      [],
      () => console.log('Migração executada com sucesso!'),
      (_, error) => console.log('Erro na migração: ', error)
    );
  });
};