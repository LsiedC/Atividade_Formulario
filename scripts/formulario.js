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
  let cpfduplicado1 = "13184398910";
  let cpfduplicado2 = "13218599011";

  //Regras de validação

  //Nome//
  if (nome === "") {
    return alert("Digite um nome!")
  } else if (nome.length < 3) return alert("Nome Inválido");

  //Email//
  if (!email.includes("@")) return alert("Email inválido: O email deve conter @");

  //Telefone//
  if (telefone === "") {
    return alert("Digite um telefone!")
  } else if (telefone.length < 8 || telefone.length > 11) return alert("Telefone Inválido");

  //CPF//
  if (cpf === "") return alert("Digite um CPF");

  if (cpf == cpfduplicado1 || cpf == cpfduplicado2) {
    alert("Este CPF já consta em nossa base de dados.");
    return;
  }

  //Idade//
  if (idade === "") {
    return alert("Digite uma idade!");
  } else if (idade < 18) {
    return alert("Idade não permitida para adotar um pet.");
  }

  //Cidade//
  if (cidade === "") {
    return alert("Digite uma cidade!");
  }

  //Moradia//
  if (moradia === "") {
    return alert("Escolha um tipo de moradia!");
  }

  if (moradia === "Apartamento") {
    confirm("O apartamento permite animais? (Clique em OK para confirmar)");
  } else if (moradia === "Casa" && quintal.value === "sim") {
    confirm("Seu quintal é seguro? (Clique em OK para confirmar)");
  }

  //Quintal// para obrigar ele a escolher algo
  if (!quintal) {
    alert("Escolha se você tem ou não um quintal.");
    return;
  }

  if(moradia === "Apartamento" && quintal.value === "sim") {
    alert("Quem mora em apartamento não pode indicar que possui quintal");
    return;
  }

  //Pets//
  if (!pets) {
    alert("Escolha se você já teve ou nunca teve um pet.");
    return;
  }

  if (pets.value === "nao") {
    alert("Por você não ter um pet, você receberá acompanhamento da ONG LSC!");
  }

  //Horas//

  let numeroHoras = Number(horas);

  if (horas === "" || numeroHoras < 0 || numeroHoras > 24) {
    alert("Informe uma quantidade de horas válida (0-24).");
    return;
  }

  if (numeroHoras > 8) {
    let justificativaHoras = prompt("Você fica mais de 8 horas fora. Justifique quem cuidará do pet ou como ele ficará:");

    // Validamos a resposta do prompt aqui dentro
    if (justificativaHoras === null || justificativaHoras.trim() === "") {
      alert("A justificativa é obrigatória para quem fica mais de 8 horas fora.");
      return;
    } else if (justificativaHoras.length < 10) {
      alert("Sua justificativa está muito curta. Por favor, detalhe mais.");
      return;
    } else {
      alert("Obrigado pela justificativa. Vamos analisá-la!");
    }
  }

  //Motivos//
  let motivoTexto = motivos.trim().toLowerCase();
  let respostasGenericas = ["quero", "porque sim", "amo animais", "gosto de pets", "sem motivo"];

  if (motivos.length < 10) {
    return alert("Seu motivo deve ter mais que 10 caracteres.");
  }

  if (respostasGenericas.includes(motivoTexto)) {
    alert("O motivo informado é muito genérico. Conte-nos mais sobre sua intenção e como o pet viverá com você.");
    return;
  }


  //Termo//
  if (!aceito.checked) {
    alert("Você precisa aceitar os termos para continuar.");
    return;
  }


  document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});