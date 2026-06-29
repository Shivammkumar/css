document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const message = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        message.textContent += 'Form submitted successfully!';
    });
    form.addEventListener('reset', function () {
        message.textContent = 'Form reset.';
    });

    form.addEventListener('change', function (event) {
        //if (event.target.id === 'gender') {
            message.textContent += 'changed to: ' + event.target.value;
        //}
    });

    form.addEventListener('input', function (event) {
        message.textContent += 'Input in ' + event.target.name + ' field changed.';
    });

    form.addEventListener('focus', function (event) {
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'SELECT') {
            event.target.style.outlineColor = 'green';
            message.textContent += 'Focused on ' + event.target.name + ' field.';
        }
    }, true);

    form.addEventListener('blur', function (event) {
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'SELECT') {
            event.target.style.color = 'red';
            message.textContent += 'Blurred from ' + event.target.name + ' field.';
        }
    }, true);
});