document.getElementById('new_row').style.display = 'none';
document.getElementById('save_button1').style.display = 'none';

var editData = (n) => {
    var phone = document.getElementById('phone_row' + n);
    var email = document.getElementById('email_row' + n);
    var name = document.getElementById('name_row' + n);
    var subject = document.getElementById('subject_row' + n);

    var phone_data = phone.innerHTML;
    var email_data = email.innerHTML;
    var name_data = name.innerHTML;
    var subject_data = subject.innerHTML;

    phone.innerHTML = '<input type="tel" id="phone_text' + n + '" value="' + phone_data + '">';
    email.innerHTML = '<input type="email" id="email_text' + n + '" value="' + email_data + '">';
    name.innerHTML = '<input type="text" id="name_text' + n + '" value="' + name_data + '">';
    subject.innerHTML = '<input type="text" id="subject_text' + n + '" value="' + subject_data + '">';

    document.getElementById('edit_button' + n).style.display = 'none';
    document.getElementById('save_button' + n).style.display = 'block';
}

var saveData = (n) => {
    var phone_val = document.getElementById('phone_text' + n).value;
    var email_val = document.getElementById('email_text' + n).value;
    var name_val = document.getElementById('name_text' + n).value;
    var subject_val = document.getElementById('subject_text' + n).value;

    document.getElementById('phone_row' + n).innerHTML = phone_val;
    document.getElementById('email_row' + n).innerHTML = email_val;
    document.getElementById('name_row' + n).innerHTML =  name_val;
    document.getElementById('subject_row' + n).innerHTML = subject_val;

    document.getElementById('edit_button' + n).style.display = 'block';
    document.getElementById('save_button' + n).style.display = 'none';
}

var deleteData = (n) => {
    document.getElementById('row' + n).outerHTML = '';
}

var addData = () => {
    var new_phone = document.getElementById('new_phone').value;
    var new_email = document.getElementById('new_email').value;
    var new_name = document.getElementById('new_name').value;
    var new_subject = document.getElementById('new_subject').value;

    if (!new_phone || !new_email || !new_name || !new_subject) {
        alert('Please enter all the fields.');
    }
    else {
        var table = document.getElementById('table');
        var table_len = (table.rows.length) - 1;
        table.insertRow(table_len).outerHTML = "<tr id='row"+table_len+"'><td id='phone_row"+table_len+"'>"+new_phone+"</td><td id='email_row"+table_len+"'>"+new_email+"</td><td id='name_row"+table_len+"'>"+new_name+"</td><td id='subject_row"+table_len+"'>"+new_subject+"</td><td id='manage_row"+table_len+"'><button id='edit_button"+table_len+"' onclick='editData("+table_len+")'>Edit</button> <button style='display:none' id='save_button"+table_len+"'onclick='saveData("+table_len+")'>Save</button> <button id='delete' onclick='deleteData("+table_len+")'>Delete</button></td></tr>";

        document.getElementById('new_phone').value='';
        document.getElementById('new_email').value='';
        document.getElementById('new_name').value='';
        document.getElementById('new_subject').value='';

        document.getElementById('new_row').style.display = 'none';
    }
}

var addRow = () => {
    document.getElementById('new_row').style.display = 'table-row';
}