

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

    try{
        const apiRespond = await fetch("http://localhost:3000/api",{
            method : "POST",
            body : JSON.stringify({name , score}),
            headers: { "Content-Type": "application/json" }

            
        })
        
    console.log("Respond", apiRespond)
    
    }catch(error){
        console.log(error)
    }


}


