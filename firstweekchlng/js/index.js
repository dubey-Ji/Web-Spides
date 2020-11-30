function myFunction() {
    let inputVal = document.getElementById("fworkinput").value;
    if (inputVal == "") {
        window.alert("Please add TODO")
    } else {
        let input = document.createElement('input');
        input.setAttribute("value", inputVal);
        input.setAttribute("disabled", "disabled");
        let element = document.getElementById('formTodo');
        let beforeElement = document.getElementById('fworkinput');
        element.insertBefore(input, beforeElement);
        let frm = document.getElementsByName('todo-form')[0];
        frm.reset();
        return false; 
    }
};
