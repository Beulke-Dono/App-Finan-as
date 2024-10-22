import db from './db';

export const seedDb = () => {
  // Usuário para teste (deve ser apagado após a produção)
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO User (UserName, Password) VALUES (?, ?);`,
      ['teste', 'hashedpassword'],
      () => console.log('Dados de user inserido com sucesso'),
      (_, error) => console.log('Erro ao inserir user dados:', error)
    );
  });

  // Tipos de para Income ou Expanse
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO Type (TypeName) VALUES (?);`,
      ['Fixa'],
      () => console.log('Fixa inserido com sucesso na tabela Type'),
      (_, error) => console.log('Erro ao inserir Fixa: na tabela Type', error)
    );

    tx.executeSql(
      `INSERT INTO Type (TypeName) VALUES (?);`,
      ['Variável'],
      () => console.log('Variável inserido com sucesso na tabela Type'),
      (_, error) => console.log('Erro ao inserir Variável na tabela Type:', error)
    );
  });

  // Tipos para Objective
   db.transaction(tx => {
     tx.executeSql(
       `INSERT INTO ObjectiveType (ObjectiveTypeName) VALUES (?);`,
       ['Ativo'],
       () => console.log('Ativo inserido com sucesso na tabela Objective'),
       (_, error) => console.log('Erro ao inserir Ativo na tabela Objective:', error)
     );

     tx.executeSql(
       `INSERT INTO ObjectiveType (ObjectiveTypeName) VALUES (?);`,
       ['Arquivado'],
       () => console.log('Arquivado inserido com sucesso na tabela Objective'),
       (_, error) => console.log('Erro ao inserir Arquivado na tabela Objective:', error)
     );
   });

};
