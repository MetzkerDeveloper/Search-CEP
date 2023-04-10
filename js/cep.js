const inputCep = document.querySelector("#code");
const inputState = document.querySelector("#state");
const inputCity = document.querySelector("#city");
const inputDistrict = document.querySelector("#district");
const inputAddress = document.querySelector("#address");

// funções

const getCep = async (cep)=>{
    if(inputCep.value.length < 9 ){

    }
    else{
    const apiCep = ` https://cdn.apicep.com/file/apicep/${cep}.json`;
    const response = await fetch(apiCep);
    const data = await response.json();
    return data ;
   
}};

const showCEP = async (cep)=>{
    const data = await getCep(cep);
    
        if(inputCep.value.length < 9){
            alert("Preencha um CEP válido!")
        }
        else{
        inputState.value = data.state
        inputCity.value = data.city
        inputDistrict.value = data.district
        inputAddress.value = data.address
}
} 
// eventos


// Evento para pesquisar quando clicar fora do input de pesquisa

//  inputCep.addEventListener("blur", (e)=>{
//       e.preventDefault()
//   const cep = inputCep.value;
//     if(cep){
//         showCEP(cep)
//     }else{
//         alert("Digite um CEP!")
//     }
//  })

inputCep.addEventListener("keyup", (e)=>{
    if(e.keyCode == "13"){
        const cep = e.target.value;
        
        if(cep){
            showCEP(cep)
        }else{
            alert("Digite um CEP!")
        }
    }
})

inputCep.addEventListener('keypress', ()=>{
    let input = inputCep.value.length;   
    if(input === 5 ){
        inputCep.value += "-"
     }
})