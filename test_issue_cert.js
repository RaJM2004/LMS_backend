
async function testIssue() {
    try {
        const response = await fetch('http://localhost:5000/api/certificate/issue', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'rajmange94@gmail.com',
                courseName: 'Python Programming for AI'
            })
        });

        const data = await response.json();
        console.log('Status:', response.status);
        console.log('Data:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error:', error);
    }
}

testIssue();
