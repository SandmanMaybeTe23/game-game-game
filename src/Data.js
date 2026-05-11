

export default async function getData() { 
    const url = "http://localhost:3000/api";
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const hiScores = await response.json();
        console.log(hiScores);

        return hiScores

    } catch (error) {
        console.error(error.message);
    }}


