var obj;

//Adicionei um ouvinte de evento ao botão para quando o usuário clicar nele
document.getElementById('enviar').addEventListener('click', function() {
  //Monta o objeto que será salvo
  obj = {
    nome: nome.value,
    sobrenome: sobrenome.value,
    email: email.value,
    telefone: telefone.value,
    cep: cep.value,
    newsletter: newsletter.value
  };

  //Salva o objeto no localStorage
  localStorage[nome.value] = JSON.stringify(obj);

  //Mostra no console o objeto salvo
  console.log(JSON.parse(localStorage[nome.value]).valueOf());
});