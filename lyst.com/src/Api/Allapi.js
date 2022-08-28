export const Allproduct = (input) =>{
    return fetch(`https://aqueous-fjord-81124.herokuapp.com/allData?q=${input}`).then((res) =>
    res.json()
  );
}