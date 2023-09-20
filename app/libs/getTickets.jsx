async function getTickets() {
    const res = await fetch('https://mocki.io/v1/0d0a6006-5855-4c02-b033-f5179627c1eb');
    const data = await res.json();
    //console.log(data);

    return data;
}