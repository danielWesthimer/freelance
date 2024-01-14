const mysql = require('mysql2');
// usersData = [
//     { name: "Avi", password: "123", costumers: [{ costumerName: "a", deal: "Shop", debt: 1000 }, { costumerName: "b", deal: "street", debt: 2000 }] },
//     { name: "Sosh", password: "123", costumers: [{ costumerName: "c", deal: "bulding", debt: 3000 }, { costumerName: "d", deal: "hause", debt: 4000 }] },
//     { name: "Morgenstern", password: "456", costumers: [{ costumerName: "e", deal: "vila", debt: 5000 }, { costumerName: "f", deal: "mall", debt: 6000 }] }
// ]
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mydatabase'
});


connection.connect((err) => {

    connection.query(createUserTable, (err, result) => {
       
    //     const insertUsers = `INSERT INTO users (name, password)
    //   VALUES
    //     ('Avi', '123'),
    //     ('Sosh', '123'),
    //     ('Morgenstern', '456')`;
        connection.query(insertUsers, (err, result) => {
            
        
            const createCostumersTable = `CREATE TABLE costumers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        costumer_name VARCHAR(255) NOT NULL,
        // project_name VARCHAR(255) NOT NULL,
        debt INT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )`;
            // connection.query(createCostumersTable, (err, result) => {
                
            //     usersData.forEach(user => {
            //         const insertCostumers = user.costumers.map(costumer => {
            //             return `(${user.id}, '${costumer.costumerName}', '${costumer.deal}', ${costumer.debt})`
            //         }).join(',');
            //         const insertCostumersQuery = `INSERT INTO costumers (user_id, costumer_name, deal, debt) VALUES ${insertCostumers}`;
            //         connection.query(insertCostumersQuery, (err, result) => {
            //             if (err) {
            //                 console.error('Error inserting costumers data: ', err);
            //                 return;
            //             }
            //             console.log(`Costumers data for user ${user.name} inserted successfully`);
                //     });
                // });
                connection.end();
            });
        // });
    });
});


