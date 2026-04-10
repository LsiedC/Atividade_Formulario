document.getElementById("formAdocao").addEventListener("submit", function (e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;
  let cpf = document.getElementById("cpf").value;
  let idade = document.getElementById("idade").value;
  let cidade = document.getElementById("cidade").value;
  let moradia = document.getElementById("moradia").value;
  let quintal = document.querySelector('input[name="quintal"]:checked');
  let pets = document.querySelector('input[name="pets"]:checked');
  let horas = document.getElementById("horas").value;
  let motivos = document.getElementById("motivo").value;
  let aceito = document.getElementById("aceito");

  // lista de cpfs duplicados //
  let cpfduplicado1 = 13184398910;
  let cpfduplicado2 = 13218599011;

  //Regras de validação

  //Nome//
  if (nome ===""){
    return alert("Digite um nome!")
  } else if (nome.length < 3) return alert("Nome Inválido");

  //Email//
  if (!email.includes("@")) return alert("Email inválido: O email deve conter @");
  
  //Telefone//
  if (telefone === ""){
    return alert("Digite um telefone!")
  } else if (telefone.length < 8 || telefone.length > 11) return alert("Telefone Inválido");

  //CPF//
  if (!cpf === "") return alert("Digite um CPF");

  if(cpf == cpfduplicado1 || cpfduplicado2) {

  }

  //Idade//
  if (idade ===""){
    return alert("Digite uma idade!");
  }else if (idade < 18) {
    return alert("Idade não permitida para adotar um pet.");
  }

  //Cidade//
  if(cidade ===""){
    return alert("Digite uma cidade!");
  }

  //Moradia//
  if(moradia ===""){
    return alert("Escolha um tipo de moradia!");
  }

  if(moradia === "Apartamento"){
    return prompt("O apartamento permite animais?");
  }

  if(moradia ==="Casa"){
    return prompt("Seu quintal é seguro?");
  }

  //Quintal//
  if(!quintal){
    return alert("Escolha se você tem ou não um quintal.");
  }

  //Pets//
  if(!pets){
    return alert("Escolha se você já teve ou nunca teve um pet.");
  }

  if(pets.value === "nao"){
    return alert("Tudo bem, você recebera acompanhamento da ONG LSC!");
  }

  //Horas//
  if(horas < 0 || horas > 24){
    return alert("Informe uma quantidade de horas válida.");
  } else {
      let resposta = prompt("Justifique o porque de você ficar tanto tempo fora de casa!");
        if(resposta === ""){
          return alert("Você não pode simplesmente não escrever nada.")
        } else if (resposta.length < 3){
          return alert("Digite algo válido!");
        } else {
          return alert("Vamos ver se você pode realizar essa adoção!");
        }
    }
  }

  //Motivos//
  if(motivos.length < 10) return alert("Seu motivo deve ter mais que 10 caracteres.");

  //Termo//
  if(!aceito.checked) {
    alert ("Você precisa aceitar os termos para continuar.");
    return;
  }


  document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});