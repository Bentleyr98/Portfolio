export function setupForm() {
    // create form element
    const form = document.createElement('form');
    form.action = 'thankyou.html';
    form.method = 'GET';
    form.autocomplete = 'on';
    document.body.appendChild(form);

    // create body of form
    const h3 = document.createElement('h3');
    h3.textContent = 'Contact Us';
    form.appendChild(h3);

    const div1 = document.createElement('div');
    form.appendChild(div1);
    const l1 = document.createElement('label');
    l1.for = 'fname';
    l1.textContent = 'First Name: ';
    div1.appendChild(l1);
    const i1 = document.createElement('input');
    i1.id = 'fname';
    i1.name = 'first_name';
    i1.required = true;
    div1.appendChild(i1);

    const div2 = document.createElement('div');
    form.appendChild(div2);
    const l2 = document.createElement('label');
    l2.for = 'lname';
    l2.textContent = 'Last Name: ';
    div2.appendChild(l2);
    const i2 = document.createElement('input');
    i2.id = 'lname';
    i2.name = 'last_name';
    i2.required = true;
    div2.appendChild(i2);

    const div3 = document.createElement('div');
    form.appendChild(div3);
    const l3 = document.createElement('label');
    l3.for = 'email';
    l3.textContent = 'Email Address: ';
    div3.appendChild(l3);
    const i3 = document.createElement('input');
    i3.id = 'email';
    i3.name = 'email';
    i3.type = 'email';
    i3.required = true;
    div3.appendChild(i3);

    const div5 = document.createElement('div');
    div5.className = 'div5';
    form.appendChild(div5);
    const l5 = document.createElement('label');
    l5.id = 'message';
    l5.textContent = 'Message: ';
    div5.appendChild(l5);

    const ta = document.createElement('textarea');
    ta.id = 'message';
    ta.name = 'message';
    ta.required = true;
    div5.appendChild(ta);

    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = "Send Message";
    form.appendChild(button);
}
