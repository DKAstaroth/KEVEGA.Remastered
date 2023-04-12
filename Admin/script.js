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
    formData["rut"] = document.getElementById("rut").value;
    formData["names"] = document.getElementById("names").value;
    formData["emaill"] = document.getElementById("emaill").value;
    formData["contra"] = document.getElementById("contra").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.rut;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.names;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.emaill;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.contra;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Editar</button> <button onClick="onDelete(this)">Eliminar</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("rut").value = selectedRow.cells[0].innerHTML;
    document.getElementById("names").value = selectedRow.cells[1].innerHTML;
    document.getElementById("emaill").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contra").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.rut;
    selectedRow.cells[1].innerHTML = formData.names;
    selectedRow.cells[2].innerHTML = formData.emaill;
    selectedRow.cells[3].innerHTML = formData.contra;
}

//Delete the data
function onDelete(td) {
    if (confirm('Está seguro que quiere eliminar este usuario tipo alumno?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("rut").value = '';
    document.getElementById("names").value = '';
    document.getElementById("emaill").value = '';
    document.getElementById("contra").value = '';
    selectedRow = null;
}
