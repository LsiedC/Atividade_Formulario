document.getElementById("formAdocao").addEventListener("submit", function (e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
    if(nome.length < 3) return alert("Nome Inválido");

  let email = document.getElementById("email").value;
    if(email.)
  let telefone = document.getElementById("telefone").value;
    if(telefone.length < 9 ) return alert("Nome Inválido");
  let cpf = document.getElementById("cpf").value;
  let idade = document.getElementById("idade").value;
  let cidade = document.getElementById("cidade").value;
  let moradia = document.getElementById("moradia").value;
  let quintal = document.querySelector('input[name="quintal"]:checked');
  let pets = document.querySelector('input[name="pets"]:checked');
  let horas = document.getElementById("pets").value;
  let motivos = document.getElementById("motivo").value;
  let aceito = document.getElementById("aceito").value;

  document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
  
});