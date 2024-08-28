const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const n = parseInt(data.trim(), 10);
    if (isNaN(n) || n <= 0) {
        console.error('Invalid number in input file.');
        return;
    }

    let diamond = '';

    for (let i = 1; i <= n; i++) {
        diamond += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
    }

    for (let i = n - 1; i >= 1; i--) {
        diamond += ' '.repeat(n - i) + '*'.repeat(2 * i - 1) + '\n';
    }

    fs.writeFile('output.txt', diamond, err => {
        if (err) {
            console.error('Error writing file:', err);
        }
    });
});

