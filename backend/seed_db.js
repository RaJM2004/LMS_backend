async function seed() {
    try {
        const response = await fetch('http://localhost:5000/api/courses/seed', {
            method: 'POST'
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error seeding:', error);
    }
}

seed();
