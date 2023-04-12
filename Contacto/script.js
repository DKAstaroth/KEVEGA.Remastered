var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["names"] = document.getElementById("names").value;
    formData["emaill"] = document.getElementById("emaill").value;
    formData["mens"] = document.getElementById("mens").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.names;
    cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.emaill;
    cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.mens;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick="onEdit(this)">Editar</button> <button onClick="onDelete(this)">Eliminar</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("names").value = selectedRow.cells[1].innerHTML;
    document.getElementById("emaill").value = selectedRow.cells[2].innerHTML;
    document.getElementById("mens").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.names;
    selectedRow.cells[2].innerHTML = formData.emaill;
    selectedRow.cells[3].innerHTML = formData.mens;
}

//Delete the data
function onDelete(td) {
    if (confirm('Está seguro que quiere eliminar este asunto?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("names").value = '';
    document.getElementById("emaill").value = '';
    document.getElementById("mens").value = '';
    selectedRow = null;
}
