

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
    }
}


export async function sendData(name, score) {

    console.log(name, score)
    try {

        const response = await fetch("http://localhost:3000/api", {
            method: "POST",
            body: JSON.stringify({ name: name, score: score }),
        })
        console.log(response)
    } catch (error) {
        console.error(error.message);
    }
    
}


sendData()
