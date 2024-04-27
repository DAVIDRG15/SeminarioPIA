const conversationDiv = document.getElementById('conversation');
const userInput = document.getElementById('userInput');
const btnSend = document.getElementById('btnSend');

btnSend.addEventListener('click', () => {
    const message = userInput.value.trim();

    if (message !== '') {
        userInput.value = '';
        appendMessage('user', message);
        respondToUser(message);
    } else {
        console.log('Por favor, escribe un mensaje válido.');
    }
});


function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('row');
    const colClass = sender === 'user' ? 'justify-content-end' : 'justify-content-start';
    messageDiv.innerHTML = `
        <div class="col-12 col-md-6 mb-4">
            <div class="bg-${sender === 'user' ? 'primary text-white rounded-start' : 'secondary text-white rounded-end'} p-3">
                ${message}
            </div>
        </div>
    `;
    messageDiv.classList.add(colClass); // Agregar la clase de alineación a messageDiv
    conversationDiv.appendChild(messageDiv);
}



function respondToUser(message) {
    let response = '';

    switch (message.toLowerCase()) {
        case 'hola':
            response = '¡Hola! ¿En qué puedo ayudarte?';
            break;
        case 'adios':
            response = '¡Hasta luego!';
            break;
        default:
            response = 'Lo siento, no entiendo. ¿Puedes ser más específico?';
            break;
    }

    appendMessage('assistant', response);
}