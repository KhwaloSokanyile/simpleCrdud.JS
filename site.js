var selectedRow= null;

function onFormSubmit(){
   event.preventDefault();
   var formdata =readFormData();
   if(selectedRow === null){
      insertNewRecord(formdata);
   }
   else{
      updateRecord(formdata);
   }
 resertForm();
}

function readFormData(){
  var formdata={};
  formdata["Name"]=document.getElementById("Name").value;
  formdata["Surname"]=document.getElementById("Surname").value;
  formdata["EMP"]=document.getElementById("EMP").value;
  formdata["Salary"]=document.getElementById("Salary").value;
  formdata["City"]=document.getElementById("City").value; 
  return formdata;
}

function insertNewRecord(data){
  var table =document.getElementById("employeelist").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
      cell1.innerHTML=data.Name;
  var cell2 = newRow.insertCell(1);
      cell2.innerHTML=data.Surname;
  var cell3 = newRow.insertCell(2);
      cell3.innerHTML=data.EMP;
  var cell4 = newRow.insertCell(3);
      cell4.innerHTML=data.Salary;
  var cell5 = newRow.insertCell(4);
      cell5.innerHTML=data.City;
  var cell6 = newRow.insertCell(5);
      cell6.innerHTML=  `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

function onEdit(td){
  selectedRow=td.parentElement.parentElement;
  document.getElementById('Name').value=selectedRow.cells[0].innerHTML;
  document.getElementById('Surname').value=selectedRow.cells[1].innerHTML;
  document.getElementById('EMP').value=selectedRow.cells[2].innerHTML;
  document.getElementById('Salary').value=selectedRow.cells[3].innerHTML;
  document.getElementById('City').value=selectedRow.cells[4].innerHTML;

}

function updateRecord(formdata){
  selectedRow.cells[0].innerHTML = formdata.Name;
  selectedRow.cells[1].innerHTML = formdata.Surname;
  selectedRow.cells[2].innerHTML = formdata.EMP;
  selectedRow.cells[3].innerHTML = formdata.Salary;
  selectedRow.cells[4].innerHTML = formdata.City;
}

function onDelete(td){
  if(confirm("Do you wanna delete this row?")){
    row=td.parentElement.parentElement;
    document.getElementById('employeelist').deleteRow(row.rowIndex);
  }
  resertForm();
}

function resertForm(){
  document.getElementById('Name').value='';
  document.getElementById('Surname').value='';
  document.getElementById('EMP').value='';
  document.getElementById('Salary').value='';
  document.getElementById('City').value='';
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



