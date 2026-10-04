function detalhesCamas(tipoCama){
    let url = "";

    if (tipoCama === 'camaSolteiroS'){
        url = "Camas/camaSolteiroS.html";
    } else if (tipoCama === 'camaSolteiroB'){
        url = "Camas/camaSolteiroB.html";
    } else if (tipoCama === 'camaCasalS'){
        url = "Camas/camaCasalS.html";
    } else if (tipoCama === 'camaCasalG'){
        url = "Camas/camaCasalG.html";
    }

    window.open(url, "JanelaCama");
}

function fecharJanela(){
    window.close();
}

const dadosSofas = [
    {
        id: "S2LR",
        produto: "Sofá 2 lugares",
        tipo: "Retrátil",
        tamanho: "95 x 87-126 x 180 (AxPxL)",
        preco: "R$ 765,00",
        imagem: "imagensAD2/Sofa2lugRetratil150.png",
        tecido: "Linho Cru"
    },
    {
        id: "S2LC",
        produto: "Sofá 2 lugares",
        tipo: "Sofá-Cama",
        tamanho: "95 x 97-150 x 180 (AxPxL)",
        preco: "R$ 4160,00",
        imagem: "imagensAD2/SofaCama2lug150.png",
        tecido: "Linho"
    },
    {
        id: "S3LR",
        produto: "Sofá 3 lugares",
        tipo: "Retrátil",
        tamanho: "108 x 95-155 x 200 (AxPxL)",
        preco: "R$ 1900,00",
        imagem: "imagensAD2/Sofa3lugRetratil150.png",
        tecido: "Suede"
    },
    {
        id: "S3LRR",
        produto: "Sofá 3 lugares",
        tipo: "Retrô",
        tamanho: "80 x 76 x 196 (AxPxL)",
        preco: "R$ 1200,00",
        imagem: "imagensAD2/Sofa3lugRetro150.png",
        tecido:"Veludo"
    }
]

function mostrarSofa(idProduto) {
    const produtoSofa = dadosSofas.find(item => item.id === idProduto);

    if (produtoSofa) {
        document.getElementById('nomeDes').innerHTML = `
            <h3>${produtoSofa.produto}</h3>
            <h4>${produtoSofa.tipo}</h4>
        `;
        document.getElementById('imgDes').innerHTML = `
            <img src="${produtoSofa.imagem}" alt="${produtoSofa.tipo}">
        `;
        document.getElementById('prcDes').innerHTML = `
            <p><strong>Tecido:</strong> ${produtoSofa.tecido}</p>
            <p><strong>Tamanho:</strong> ${produtoSofa.tamanho}</p>
            <p style="color: red; font-weight: bold;">Preço: ${produtoSofa.preco}</p>
        `;
    }
}

function confirmaSenhas() {
    
    const senha = document.getElementById("CadSenha").value;
    const confirmarSenha = document.getElementById("ConfSenha").value;


    if (senha !== confirmarSenha) {
        alert("Senhas estão diferentes!");
        return false;
    }
    
    return true;
}


const dadosSofasCamas = [
    {
        id: "S2LR",
        produto: "Sofá 2 lugares",
        tipo: "Retrátil",
        tamanho: "95 x 87-126 x 180 (AxPxL)",
        preco: 765.00 ,
        tecido: "Linho Cru"
    },
    {
        id: "S2LC",
        produto: "Sofá 2 lugares",
        tipo: "Sofá-Cama",
        tamanho: "95 x 97-150 x 180 (AxPxL)",
        preco: 4160.00 ,
        tecido: "Linho"
    },
    {
        id: "S3LR",
        produto: "Sofá 3 lugares",
        tipo: "Retrátil",
        tamanho: "108 x 95-155 x 200 (AxPxL)",
        preco: 1900.00 ,
        tecido: "Suede"
    },
    {
        id: "S3LRR",
        produto: "Sofá 3 lugares",
        tipo: "Retrô",
        tamanho: "80 x 76 x 196 (AxPxL)",
        preco: 1200.00 ,
        tecido:"Veludo"
    },
        {
        id: "CSS",
        produto: "Cama de Solteiro",
        tipo: "Simples",
        tamanho: "104 x 104 x 202 (AxLxP)",
        preco: 325.00 ,
        tecido: ""
    },
{
        id: "CSB",
        produto: "Cama de Solteiro",
        tipo: "Bicama",
        tamanho: "70 x 87 x 193 (AxLxP)",
        preco: 470.00,
        tecido: ""
    },
{
        id: "CCS",
        produto: "Cama de Casal",
        tipo: "Simples",
        tamanho: "108 x 154 x 210 (AxLxP)",
        preco: 680.00,
        tecido: ""
    },
{
        id: "CCG",
        produto: "Cama de Casal",
        tipo: "Com Gavetas",
        tamanho: "48 x 145 x 195 (AxLxP)",
        preco: 1900.00,
        tecido: ""
    }
]

const selectElement = document.querySelector('.lisSelProd');
const textarea = document.getElementById('produtoSelecionado');
const inputValor = document.getElementById('valor');
const btnIncluir = document.querySelector('.btnIncluir');

if (inputValor && !inputValor.value) inputValor.value = 0;

function selecProd(event) {
    if (event) event.preventDefault();

    if (selectElement.value === "none") {
        alert("Nenhum Produto selecionado!");
        return;
    }

    const idSelecionado = selectElement.options[selectElement.selectedIndex].id;
    const produtoObj = dadosSofasCamas.find(p => p.id === idSelecionado);

    if (produtoObj) {
        const separador = produtoObj.produto.includes("Cama") ? " - " : " ";
        const tecido = produtoObj.tecido ? " " + produtoObj.tecido : "";
        const descricao = `${produtoObj.produto} ${produtoObj.tipo}${separador}${produtoObj.tamanho}${tecido}`;

        if (textarea.value.trim() === "") {
            textarea.value = descricao;
        } else {
            textarea.value += "\n" + descricao;
        }

        const valorAtual = parseFloat(inputValor.value) || 0;
        inputValor.value = valorAtual + produtoObj.preco;

        selectElement.selectedIndex = 0;
    }
}

if (btnIncluir) {
    btnIncluir.addEventListener('click', selecProd);
}
