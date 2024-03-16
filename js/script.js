async function fetchAPI(endpoint) {
  try {
    const publicKey = 'ccf83400b5f9bf004caf73f1cc3a5d20';
    const response = await fetch(`https://api.marvel.com${endpoint}?apikey=${publicKey}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar dados da API');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
  }
}

async function buscarCaracteresPublicos() {
  const endpoint = '/v1/public/characters';
  const data = await fetchAPI(endpoint);
  console.log(data);
}

async function buscarPersonagemPorId(characterId) {
  const endpoint = `/v1/public/characters/${characterId}`;
  const data = await fetchAPI(endpoint);
  console.log(data);
}

async function buscarQuadrinhosPorPersonagem(characterId) {
  const endpoint = `/v1/public/characters/${characterId}/comics`;
  const data = await fetchAPI(endpoint);
  console.log(data);
}

async function buscarQuadrinhos() {
  const endpoint = '/v1/public/comics';
  const data = await fetchAPI(endpoint);
  console.log(data);
}
//o seu burro, isso é pra pesquisar
async function pesquisarNaAPI(termoPesquisa) {
  const endpoint = `/v1/public/characters?nameStartsWith=${termoPesquisa}`;
  const data = await fetchAPI(endpoint);

  const listContainer = document.querySelector('.list');
  listContainer.innerHTML = '';

  if (data && data.data && data.data.results) {
    const resultados = data.data.results;
    resultados.forEach(resultado => {
      const nomePersonagem = resultado.name;
      const listItem = document.createElement('div');
      listItem.textContent = nomePersonagem;
      listContainer.appendChild(listItem);
    });
  } else {
    console.log('Nenhum resultado encontrado.');
  }
}
buscarCaracteresPublicos();
buscarPersonagemPorId(123);
buscarQuadrinhosPorPersonagem(456);
buscarQuadrinhos();
//carlos, eu vou te matar bixo
function validaFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;
  
   
    if (nome === '' || email === '' || senha === '' || confirmSenha === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
  
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }
  
    
    if (senha.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return;
    }
  
   
    if (confirmSenha !== senha) {
        alert("As senhas não coincidem.");
        return;
    }
  
   
    alert("Formulário válido. Enviando dados...");
  }
  
  function olhoPassword() {
    const senhaInput = document.getElementById('senha');
    const icon = document.getElementById('olhoicon');
  
    
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        icon.className = "fa fa-eye-slash";
    } else {
        senhaInput.type = "password";
        icon.className = "fa fa-eye";
    }
  }
  function olhoPassword2() {
    const senhaInput = document.getElementById('senha');
    const icon = document.getElementById('olhoicon2');
  
    
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        icon.className = "fa fa-eye-slash";
    } else {
        senhaInput.type = "password";
        icon.className = "fa fa-eye";
    }
  }
  function abrirModal(tipo) {
    var modal = document.getElementById('modal-' + tipo);
    modal.style.display = 'block';
  }
  
  function fecharModal(tipo) {
    var modal = document.getElementById('modal-' + tipo);
    modal.style.display = 'none';
  }
  