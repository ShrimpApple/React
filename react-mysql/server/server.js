import express from 'express'
import mysql from 'mysql2';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

// MySQL 연결 설정
const db = mysql.createConnection({
    host: 'localhost', // 호스트 이름
    port: 3306,        // 포트 번호 (기본값: 3306)
    user: 'dbuser',    // 사용자 이름
    password: '12345', // 비밀번호
    database: 'webdb'  // 데이터베이스 이름
})

// 연결 테스트
db.connect((err) => {
    if (err) {
        console.error('MySQL 연결 실패:', err.message);
        return;
    }
    console.log('MySQL에 성공적으로 연결되었습니다!');
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (error, result) => {
        if(error) return res.json({Message: "Error inside server"});
        return res.json(result);
    })    
})

app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM student WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (error, result) => {
        if(error) return res.json({Message: "Error inside server"});
        return res.json(result);
    })    
})

app.post('/student', (req, res) => {
    const sql = "INSERT INTO student (`Name`, `Email`) VALUES(?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.put('/update/:id', (req, res) => {
    const sql = 'UPDATE student SET `Name` =?, `Email`=? WHERE ID=?';
    const id = req.params.id;
    db.query(sql, [req.body.name, req.body.email, id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM student WHERE ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.listen(8081, () => {
    console.log("port: 8081 - Listening");
})