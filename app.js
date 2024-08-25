const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT || 5001;

app.post('/api/post', (req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    const highestLowerCase = [];
    const pattern = /^[a-zA-Z]+$/;
    let maxLower = '';

    data.forEach(element => {
        if (!isNaN(parseInt(element))) {
            numbers.push(parseInt(element));
        } else if (pattern.test(element)) {
            if (element.charCodeAt(0) >= 97 && element.charCodeAt(0) <= 122) {
                if (maxLower === '' || element.charCodeAt(0) > maxLower.charCodeAt(0)) {
                    maxLower = element;
                }
            }
            alphabets.push(element);
        }
    });

    if (maxLower) {
        highestLowerCase.push(maxLower);
    }

    const response = {
        "is_success": true,
        "user_id": "dachepalli_sasank_25072004",
        "email": "dachepallisasank@gmail.com",
        "roll_number": "21BCE9133",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lower_case": highestLowerCase
    };

    res.json(response);
});

app.get('/api/getData', (req, res) => {
    const resp = {
        "operation_code": 1
    };
    res.status(200).send(resp);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});