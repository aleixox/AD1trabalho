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