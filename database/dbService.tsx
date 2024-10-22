import db from './db';

// Tipos de dados para as entidades
export type User = {
  UserID: number;
  UserName: string;
  Password: string;
};

export type Font = {
  FontID: number;
  FontName: string;
};

export type Objective = {
  ObjectiveID: number;
  ObjectiveName: string;
  ObjectiveDescription: string;
  LimitDate: string;
  ObjectiveAmount: number;
  UserID: number;
  ObjectiveTypeID: number;
};

export type Income = {
  RentalID: number;
  UserID: number;
  EntryDate: string;
  IncomeAmount: number;
  TypeID: number;
  FontID: number;
};

export type Expanse = {
  ExpanseID: number;
  UserID: number;
  OutgoingDate: string;
  ExpanseAmount: number;
  TypeID: number;
  FontID: number;
};

// Funções para a tabela User

// Criar usuário
export const addUser = (userName: string, password: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO User (UserName, Password) VALUES (?, ?);',
        [userName, password],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Encontrar usuário pelo ID
export const getUserById = (userId: number): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM User WHERE UserID = ?;',
        [userId],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};

// Atualizar usuário
export const updateUser = (userId: number, userName: string, password: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE User SET UserName = ?, Password = ? WHERE UserID = ?;',
        [userName, password, userId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Deletar usuário
export const deleteUser = (userId: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM User WHERE UserID = ?;',
        [userId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Funções para a tabela Font

// Criar uma fonte de Income ou Expanse
export const addFont = (fontName: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Font (FontName) VALUES (?);',
        [fontName],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Retornar todas fontes de um usuário
export const getFontsbyID = (): Promise<Font[]> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Font WHERE UserID = ?;',
        [userID],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};

// Atualizar uma fonte
export const updateFont = (FontId: number, FontName: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE Font SET FontName = ? WHERE FontID = ?;',
        [FontName, FontId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Deletar fonte
export const deleteFont = (FontId: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Font WHERE FontID = ?;',
        [userId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};


// Funções para a tabela Objective

// Criar um objetivo
export const addObjective = (
  name: string,
  description: string,
  limitDate: string,
  amount: number,
  userId: number,
  typeId: number
): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO Objective
        (ObjectiveName, ObjectiveDescription, LimitDate, ObjectiveAmount, UserID, ObjectiveTypeID)
        VALUES (?, ?, ?, ?, ?, ?);`,
        [name, description, limitDate, amount, userId, typeId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Retornar os objetivos de um usuário
export const getObjectivesByUserId = (userId: number): Promise<Objective[]> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Objective WHERE UserID = ?;',
        [userId],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};

// Atualizar um Objetivo
export const updateObjective = (
  objectiveId: number,
  name: string,
  description: string,
  limitDate: string,
  amount: number
): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE Objective
        SET ObjectiveName = ?, ObjectiveDescription = ?, LimitDate = ?, ObjectiveAmount = ?
        WHERE ObjectiveID = ?;`,
        [name, description, limitDate, amount, objectiveId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Deletar um objetivo
export const deleteObjective = (objectiveId: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Objective WHERE ObjectiveID = ?;',
        [objectiveId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Funções para a tabela Income (Renda)

// Criar Income
export const addIncome = (
  userId: number,
  entryDate: string,
  incomeAmount: number,
  typeId: number,
  fontId: number
): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO Income
        (UserID, EntryDate, IncomeAmount, TypeID, FontID)
        VALUES (?, ?, ?, ?, ?);`,
        [userId, entryDate, incomeAmount, typeId, fontId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Retornar os Incomes de um usuário
export const getIncomeByUserId = (userId: number): Promise<Income[]> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Income WHERE UserID = ?;',
        [userId],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};

// Atualizar um Income
export const updateIncome = (
  incomeId: number,
  entryDate: string,
  incomeAmount: number,
  typeId: number,
  fontId: number
): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE Income
        SET EntryDate = ?, IncomeAmount = ?, TypeID = ?, FontID = ?
        WHERE IncomeID = ?;`,
        [entryDate, incomeAmount, typeId, fontId, incomeId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Deletar uma income
export const deleteIncome = (incomeId: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Income WHERE IncomeID = ?;',
        [incomeId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Funções para a tabela Expanse (Despesa)

// Criar Expanse
export const addExpanse = (
  userId: number,
  outgoingDate: string,
  expanseAmount: number,
  typeId: number,
  fontId: number
): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO Expanse
        (UserID, OutgoingDate, ExpanseAmount, TypeID, FontID)
        VALUES (?, ?, ?, ?, ?);`,
        [userId, outgoingDate, expanseAmount, typeId, fontId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Retornar despesas de um usuário
export const getExpansesByUserId = (userId: number): Promise<Expanse[]> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Expanse WHERE UserID = ?;',
        [userId],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};

// Atualizar um expanse
export const updateIncome = (
  expanseId: number,
  outgoingDate: string,
  expanseAmount: number,
  typeId: number,
  fontId: number
): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE Income
        SET outgoiongDate = ?, ExpanseAmount = ?, TypeID = ?, FontID = ?
        WHERE ExpanseID = ?;`,
        [entryDate, incomeAmount, typeId, fontId, expanseId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

// Deletar uma despesa
export const deleteExpanse = (expanseId: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Expanse WHERE ExpanseID = ?;',
        [expanseId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};
