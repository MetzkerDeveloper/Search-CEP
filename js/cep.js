const inputCep = document.querySelector("#code");
const inputState = document.querySelector("#state");
const inputCity = document.querySelector("#city");
const inputDistrict = document.querySelector("#district");
const inputAddress = document.querySelector("#address");

// funções

const getCep = async (cep)=>{
    const apiCep = ` https://cdn.apicep.com/file/apicep/${cep}.json`;
    const response = await fetch(apiCep);
    const data = await response.json();
    return data ;
}

const showCEP = async (cep)=>{
      
    const data = await getCep(cep);
    
    inputState.value = data.state
    inputCity.value = data.city
    inputDistrict.value = data.district
    inputAddress.value = data.address
}

// evento

// inputCep.addEventListener("blur", (e)=>{
//      e.preventDefault()

//  const cep = inputCep.value;
   
//  showCEP(cep)
// })

inputCep.addEventListener("keyup", (e)=>{
    if(e.code ==="Enter"){
        const cep = e.target.value;

        showCEP(cep);

    }
})