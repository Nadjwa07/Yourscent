document.addEventListener('DOMContentLoaded', () => {
    const userSelections = {
        question1: localStorage.getItem('question1'),
        question2: localStorage.getItem('question2'),
        question3: localStorage.getItem('question3'),
        question4: localStorage.getItem('question4')
    };

    if (!userSelections.question1 || !userSelections.question2 || !userSelections.question3 || !userSelections.question4) {
        document.getElementById('result').innerHTML = '<p>No selection found. Please go back and make a selection.</p>';
        return;
    }

    let resultImagePath = '';
    let resultText = '';

    const fragrances = {
        "Masculine_Fresh_Calm_Sensual": { image: 'assets/Untitled.jpeg', name: 'Untitled' },
        "Masculine_Fresh_Calm_Clean": { image: 'assets/Untitled.jpeg', name: 'Untitled' },
        "Masculine_Fresh_Calm_Bold": { image: 'assets/Perfection.jpeg', name: 'Perfection' },
        "Masculine_Fresh_Calm_Soft": { image: 'assets/Perfection.jpeg', name: 'Perfection' },
        "Masculine_Fresh_Playful_Sensual": { image: 'assets/Alpha.jpeg', name: 'Alpha' },
        "Masculine_Fresh_Playful_Clean": { image: 'assets/Untitled.jpeg', name: 'Untitled' },
        "Masculine_Fresh_Playful_Bold": { image: 'assets/Perfection.jpeg', name: 'Perfection' },
        "Masculine_Fresh_Playful_Soft": { image: 'assets/Perfection.jpeg', name: 'Perfection' },
        "Masculine_Warm_Calm_Sensual": { image: 'assets/Perfection.jpeg', name: 'Perfection' },
        "Masculine_Warm_Calm_Clean": { image: 'assets/Alpha.jpeg', name: 'Alpha' },
        "Masculine_Warm_Calm_Bold": { image: 'assets/Alpha.jpeg', name: 'Alpha' },
        "Masculine_Warm_Calm_Soft": { image: 'assets/Alpha.jpeg', name: 'Alpha' },
        "Masculine_Warm_Playful_Sensual": { image: 'assets/Perfection.jpeg', name: 'Perfection' },
        "Masculine_Warm_Playful_Clean": { image: 'assets/Perfection.jpeg', name: 'Perfection' },
        "Masculine_Warm_Playful_Bold": { image: 'assets/Perfection.jpeg', name: 'Perfection' },
        "Masculine_Warm_Playful_Soft": { image: 'assets/Perfection.jpeg', name: 'Perfection' },
        "Masculine_Sporty_Calm_Sensual": { image: 'assets/Untitled.jpeg', name: 'Untitled' },
        "Masculine_Sporty_Calm_Clean": { image: 'assets/Untitled.jpeg', name: 'Untitled' },
        "Masculine_Sporty_Calm_Bold": { image: 'assets/Untitled.jpeg', name: 'Untitled' },
        "Masculine_Sporty_Calm_Soft": { image: 'assets/Untitled.jpeg', name: 'Untitled' },
        "Masculine_Sporty_Playful_Sensual": { image: 'assets/Untitled.jpeg', name: 'Untitled' },
        "Masculine_Sporty_Playful_Clean": { image: 'assets/Untitled.jpeg', name: 'Untitled' },
        "Masculine_Sporty_Playful_Bold": { image: 'assets/Alpha.jpeg', name: 'Alpha' },
        "Masculine_Sporty_Playful_Soft": { image: 'assets/Alpha.jpeg', name: 'Alpha' },
        "Feminine_Fresh_Calm_Sensual": { image: 'assets/Utopia.jpg', name: 'Utopia' },
        "Feminine_Fresh_Calm_Clean": { image: 'assets/Utopia.jpg', name: 'Utopia' },
        "Feminine_Fresh_Calm_Bold": { image: 'assets/Famous.jpeg', name: 'Famous' },
        "Feminine_Fresh_Calm_Soft": { image: 'assets/Famous.jpeg', name: 'Famous' },
        "Feminine_Fresh_Playful_Sensual": { image: 'assets/Famous.jpeg', name: 'Famous' },
        "Feminine_Fresh_Playful_Clean": { image: 'assets/Utopia.jpg', name: 'Utopia' },
        "Feminine_Fresh_Playful_Bold": { image: 'assets/Famous.jpeg', name: 'Famous' },
        "Feminine_Fresh_Playful_Soft": { image: 'assets/BlackLove.jpeg', name: 'Black Love' },
        "Feminine_Warm_Calm_Sensual": { image: 'assets/Utopia.jpg', name: 'Utopia' },
        "Feminine_Warm_Calm_Clean": { image: 'assets/Utopia.jpg', name: 'Utopia' },
        "Feminine_Warm_Calm_Bold": { image: 'assets/Sansa.jpeg', name: 'Sansa' },
        "Feminine_Warm_Calm_Soft": { image: 'assets/BlackLove.jpeg', name: 'Black Love' },
        "Feminine_Warm_Playful_Sensual": { image: 'assets/BlackLove.jpeg', name: 'Black Love' },
        "Feminine_Warm_Playful_Clean": { image: 'assets/dark secret.jpeg', name: 'Dark Secret' },
        "Feminine_Warm_Playful_Bold": { image: 'assets/Sansa.jpeg', name: 'Sansa' },
        "Feminine_Warm_Playful_Soft": { image: 'assets/dark secret.jpeg', name: 'Dark Secret' },
        "Feminine_Sporty_Calm_Sensual": { image: 'assets/Sansa.jpeg', name: 'Sansa' },
        "Feminine_Sporty_Calm_Clean": { image: 'assets/BlackLove.jpeg', name: 'Black Love' },
        "Feminine_Sporty_Calm_Bold": { image: 'assets/Sansa.jpeg', name: 'Sansa' },
        "Feminine_Sporty_Calm_Soft": { image: 'assets/Mystique.jpeg', name: 'Mystique' },
        "Feminine_Sporty_Playful_Sensual": { image: 'assets/Mystique.jpeg', name: 'Mystique' },
        "Feminine_Sporty_Playful_Clean": { image: 'assets/dark secret.jpeg', name: 'Dark Secret' },
        "Feminine_Sporty_Playful_Bold": { image: 'assets/Sansa.jpeg', name: 'Sansa' },
        "Feminine_Sporty_Playful_Soft": { image: 'assets/Mystique.jpeg', name: 'Mystique' },
        "Default": { image: 'images/default.jpg', name: 'Default Fragrance' }
    };

    const key = `${userSelections.question1}_${userSelections.question2}_${userSelections.question3}_${userSelections.question4}`;
    const selectedFragrance = fragrances[key] || fragrances['Default'];

    resultImagePath = selectedFragrance.image;
    resultText = `
        <h3>${selectedFragrance.name}</h3>
        <p>We think this is the perfect one for you!</p>
    `;

    document.getElementById('result').innerHTML = `
        <img src="${resultImagePath}" alt="Fragrance Image" style="width:300px">
        ${resultText}
    `;
});
