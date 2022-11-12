const url = "http://localhost:8080/";

function getUser() {
  axios
    .get(url + "api/misterdog")
    .then((response) => {
      const data = response.data;
      renderResult.textContent = JSON.stringify(data);
    })
    .catch((error) => console.log(error));
}

getUser();

function addNewUser() {
  const nome = document.getElementById("js-name").value;
  const preco = document.getElementById("js-price").value;
  const ingrediente = document.getElementById("js-ingr").value;

  if ((nome !== '' && preco !== '' && ingrediente !== '')){
      const newDog = {
        'nome':nome,
        'preco': Number.parseFloat(preco),
        'ingrediente':ingrediente
      }
      
      axios
        .post(url + "api/misterdog", newDog)
        .then((response) => {
          alert(JSON.stringify(response.data));
          console.log(response.data);

          nome = '';
          preco = '';
          ingrediente = '';
        })
        .catch((error) => console.log(error));
  }else{
    console.log('Campo faltando');
  }
}