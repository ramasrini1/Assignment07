// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('#addForm');
let empTable = document.querySelector('#employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let empCount = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let empId = document.querySelector('#id').value;
    let name =  document.querySelector('#name').value;
    let ext  =  document.querySelector('#extension').value;
    let email = document.querySelector('#email').value;
    let department = document.querySelector('#department').value;
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = row.insertCell();
     // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(empId));
    cellId = row.insertCell();
    cellId.appendChild(document.createTextNode(name));
    cellId = row.insertCell();
    cellId.appendChild(document.createTextNode(ext));
    cellId = row.insertCell();
    cellId.appendChild(document.createTextNode(email));
    cellId = row.insertCell();
    cellId.appendChild(document.createTextNode(department));
    
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.value = 'Delete';
    
    deleteBtn.appendChild(document.createTextNode('X'));
    cellId = row.insertCell();
    cellId.appendChild(deleteBtn);

    // RESET THE FORM
    document.querySelector('#id').value = '';
    document.querySelector('#name').value = '';
    document.querySelector('#extension').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#department').value = '';
    
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    empCount++;
    document.getElementById("empCount").innerHTML = "(" + empCount + ")";

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if(e.target.value == "Delete") {
        if ( confirm('Are you sure you want to remove this employee?')){
            empTable.deleteRow( e.target.parentNode.parentNode.rowIndex );
            empCount--;
            document.getElementById("empCount").innerHTML = "(" + empCount + ")";
       }
       
    }
});
