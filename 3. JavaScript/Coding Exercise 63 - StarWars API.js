const loadStarWarsPeople = async (id) => {
    try {
        const res = await fetch(`https://swapi.dev/api/people/${id}/`);
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.log('Error!', e);
    }
};

loadStarWarsPeople(1);