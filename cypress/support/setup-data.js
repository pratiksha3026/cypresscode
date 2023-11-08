// Function to generate a unique email with a random 3-digit number
export function generateUniqueEmail() {
    const randomDigits = Math.floor(100 + Math.random() * 900); // Generate a random 3-digit number
    return `sample${randomDigits}@gmail.com`;
    }