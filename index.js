var selectedRow = null
var total = []

function enviarForm(){

   
    
    var dadosForm = lerDadosForm();
    var total = valorTotal()
    console.log("total: " , total)
    inserindoValorTotal(total)


    if(selectedRow == null){
        inserirNovosDados(dadosForm)
    }
    else{
        atualizar(dadosForm)
    }

    resetaForm()
   
       
}

function lerDadosForm(){

    
    var dadosForm = {};
    dadosForm["NomeCompleto"] = document.getElementById("nome").value;
    dadosForm["ModeloCarro"] = document.getElementById("modeloCarro").value;
    dadosForm["Placa"] = document.getElementById("placa").value;
    dadosForm["PrecoLavagem"] = document.getElementById("precoLavagem").value;
    return dadosForm;
}

function inserirNovosDados(data){

    var table = document.getElementById("employList").getElementsByTagName('tbody')[0];
    var novaLinha = table.insertRow(table.length);
    
    cell1 = novaLinha.insertCell(0);
    cell1.innerHTML = data.NomeCompleto;

    cell2 = novaLinha.insertCell(1);
    cell2.innerHTML = data.ModeloCarro;

    cell3 = novaLinha.insertCell(2);
    cell3.innerHTML = data.Placa;

    cell4 = novaLinha.insertCell(3);
    cell4.innerHTML = data.PrecoLavagem;

    cell1 = novaLinha.insertCell(4);
    cell1.innerHTML = `<a onclick="edit(this)"><img src="./Img/editar.png"></a>
                       <a onclick="deleti(this)"><img src="./Img/excluir.png"></a>`;
}

function resetaForm(){

    document.getElementById("nome").value = "";
    document.getElementById("modeloCarro").value = "";
    document.getElementById("placa").value = "";
    document.getElementById("precoLavagem").value = "";
    selectedRow = null
}

function edit(td){

    selectedRow = td.parentElement.parentElement;
    document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("modeloCarro").value = selectedRow.cells[1].innerHTML;
    document.getElementById("placa").value = selectedRow.cells[2].innerHTML;
    document.getElementById("precoLavagem").value = selectedRow.cells[3].innerHTML;
}

function atualizar(dadosForm){

    selectedRow.cells[0].innerHTML = dadosForm.NomeCompleto;
    selectedRow.cells[1].innerHTML = dadosForm.ModeloCarro;
    selectedRow.cells[2].innerHTML = dadosForm.Placa;
    selectedRow.cells[3].innerHTML = dadosForm.PrecoLavagem;

}

function deleti(td){

    if (confirm('Deseja excluir esse item? ')){
        row = td.parentElement.parentElement;
        document.getElementById("employList").deleteRow(row.rowIndex);
        resetaForm();
    } 
}

function valorTotal(){

    var soma = 0
    var preco = document.getElementById("precoLavagem").value;
    total.push(preco)

    for(let i in total){
        soma += parseInt( total[i] )
        
        
    }
    return soma
    
    }

function inserindoValorTotal(total){

   
    limpandoValorTotal()
    var valor = document.getElementById("valorReceber1");
    var texto = document.createTextNode(total)
    valor.appendChild(texto)
    document.body.appendChild(valor)
   

}


function limpandoValorTotal(){
    
    var valor = document.getElementById("valorReceber1").textContent = '';
    console.log('limpar', valor)
}
    
    
