document.getElementById('submit-btn').addEventListener('click', function() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const membership = document.querySelector('input[name="membership"]:checked').value;

    document.getElementById('output').innerHTML = `
        Full Name: ${firstName} ${lastName}<br>
        Email: ${email}<br>
        Address: ${address}, ${city}, ${province}<br>
        Membership: ${membership}
    `;
});

document.getElementById('calculate-btn').addEventListener('click', function() {
    const numbers = document.getElementById('numbers').value.trim();
    if (numbers === '') {
        alert('Please enter numbers separated by spaces.');
        return;
    }

    const numberArr = numbers.split(' ').filter(num => num !== '').map(Number);
    const selectedFunction = document.querySelector('input[name="excelFunction"]:checked').value;
    let result;

    if (selectedFunction === 'AutoSum') {
        result = numberArr.reduce((a, b) => a + b, 0);
    } else if (selectedFunction === 'Average') {
        result = numberArr.reduce((a, b) => a + b, 0) / numberArr.length;
    } else if (selectedFunction === 'Max') {
        result = Math.max(...numberArr);
    } else if (selectedFunction === 'Min') {
        result = Math.min(...numberArr);
    }

    document.getElementById('excel-output').textContent = `Result: ${result}`;
});
