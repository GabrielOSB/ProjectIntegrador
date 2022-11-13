const url = "http://localhost:8080/";

function getUser() {
 
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

const DOM = {

  dogContainer: document.querySelector('#card-context'),

  addDog(renderResult, index){
    axios
    .get(url + "api/misterdog")
    .then((response) => {
      const data = response.data;

      renderResult.textContent = JSON.stringify(data);

      var arr_from_json = JSON.parse(JSON.stringify(data));
      
      arr_from_json.forEach(element => {
        const div = document.createElement('div');

        var html = `    
            <h3>${element.Nome}</h3>
            <aside>${element.Ingrediente}</aside>
            <p>${element.Preco}</p>
        `;
        
        div.innerHTML = html;

        DOM.dogContainer.appendChild(div);
      });

    })

    .catch((error) => console.log(error));
  },
}

DOM.addDog(renderResult)
