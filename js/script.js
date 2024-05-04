const conversationDiv = document.getElementById('conversation');
const userInput = document.getElementById('userInput');
const btnSend = document.getElementById('btnSend');

// Agregar evento al hacer clic en el botón
btnSend.addEventListener('click', sendMessage);

// Agregar evento al presionar Enter en el campo de texto
userInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita que se agregue un salto de línea en el campo de texto
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();

    if (message !== '') {
        userInput.value = '';
        appendMessage('user', message);
        respondToUser(message);
        scrollConversationToBottom(); // Llama a la función para desplazar la conversación al final
    } else {
        console.log('Por favor, escribe un mensaje válido.');
    }
}

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
    messageDiv.classList.add(colClass);
    conversationDiv.appendChild(messageDiv);
}

function respondToUser(message) {
    let response = '';

    switch (message.toLowerCase()) {
        // Saludos
        case 'hola':
        case 'ola':
        case 'holaa':
            response = '¡Hola! ¿En qué puedo ayudarte?';
            break;
        case 'buenos días':
            response = '¡Buenos días! ¿Cómo puedo asistirte hoy?';
            break;
        case 'buenas tardes':
            response = '¡Buenas tardes! ¿En qué puedo colaborar contigo?';
            break;
        case 'buenas noches':
            response = '¡Buenas noches! ¿En qué puedo ser de utilidad?';
            break;
        case 'como estás?':
        case 'como tas?':
            response = 'Hola, estoy aquí para ayudarte. ¿Qué necesitas?';
            break;
        case 'hey':
        case 'ey':
        case 'eyy':
        case 'hello':
            response = '¡Hola! ¿En qué puedo ayudarte hoy?';
            break;
        case 'saludos':
            response = '¡Saludos! ¿Cómo puedo ser de ayuda?';
            break;
        case 'que tal':
            response = 'Hola, ¿cómo estás? ¿En qué puedo colaborar?';
            break;
        case 'buen dia':
            response = '¡Buen día! ¿En qué puedo ayudarte hoy?';
            break;
        case 'hola, como estas?':
            response = 'Hola, estoy bien. ¿Y tú? ¿En qué puedo asistirte?';
            break;
        case 'hey, que hay':
            response = '¡Hola! Aquí estoy para ayudarte. ¿Qué necesitas?';
            break;
        case 'ayudame':
        case 'ayudeme':
        case '??':
        case '?':
        case '???':
        case 'Estas ahi? necesito ayuda':
        case 'me podrias ayudar?':
            response = '¡Saludos! Estoy aquí para asistirte en lo que necesites.';
            break;
        case 'que pasa':
            response = 'Hola, ¿necesitas algo? Estoy aquí para ayudarte.';
            break;
        case 'buen dia, en que puedo ayudarte?':
            response = '¡Buen día! ¿En qué puedo colaborar contigo?';
            break;
        case 'hola, puedes ayudarme?':
            response = '¡Hola! Claro, estoy aquí para ayudarte en lo que necesites.';
            break;
        // Despedidas
        case 'adios':
        case 'adioos':
        case 'adioss':
        case 'gracias, adios':
        case 'gracias!':
        case 'gracias':
            response = '¡Hasta luego!';
            break;
        case 'hasta luego':
        case 'bye':
            response = '¡Que tengas un buen día!';
            break;
        case 'adios, cuidate':
            response = '¡Cuídate mucho!';
            break;
        case 'chao':
            response = '¡Hasta pronto!';
            break;
        case 'nos vemos':
            response = '¡Nos vemos!';
            break;
        case 'hasta la proxima':
            response = '¡Hasta la próxima!';
            break;
        case 'que te vaya bien':
            response = '¡Que tengas un excelente día!';
            break;
        case 'adios que tengas un buen día':
            response = '¡Igualmente, que tengas un buen día!';
            break;
        case 'adios hasta pronto':
            response = '¡Hasta pronto, que estés bien!';
            break;
        case 'hasta la vista':
            response = '¡Hasta la vista!';
            break;
        case 'adios que tengas suerte':
            response = '¡Mucha suerte!';
            break;
        case 'hasta luego cuidate':
            response = '¡Cuídate mucho también!';
            break;
        case 'adios nos vemos pronto':
            response = '¡Nos vemos pronto!';
            break;
        case 'adios que tengas un buen dia':
            response = '¡Que tengas un excelente día!';
            break;
        case 'adios que estes bien':
            response = '¡Igualmente, que estés bien!';
            break;
        // Alergias y diagnóstico
        case 'creo que tengo alergias':
        case 'siento que tengo alergias':
        case 'tengo alergias':
        case 'tengo alergia':
        case 'diagnostico':
        case 'detectar alergias':
        case 'detección de alergias':
        case 'me gustaria hacer un diagnostico de mis alergias':
        case 'quiero saber si tengo alergias':
        case 'como puedo confirmar si tengo alergias':
        case 'donde puedo hacerme pruebas de alergias':
        case 'quiero realizarme un estudio alergico':
        case 'como puedo saber si soy alergico a algo':
        case 'creo que tengo alergia':
        case 'necesito saber si mi malestar es por alergias':
        case 'como puedo realizar pruebas de alergia':
        case 'quisiera saber si tengo alergias':
        case 'que pruebas medicas debo hacerme para confirmar alergias':
        case 'necesito consultar a un especialista para diagnosticar mis alergias':
        case 'donde puedo conseguir un diagnostico de alergias':
        case 'quiero saber si mi malestar es debido a alergias o a otra causa':
            response = '¿Quieres realizar un diagnóstico para confirmar tus alergias?';
            break;
        default:
            response = 'Lo siento, no entiendo. ¿Puedes ser más específico?';
            break;
    }

    appendMessage('assistant', response);
    if (
        message.toLowerCase() === 'quiero saber si mi malestar es debido a alergias o a otra causa' ||
        // Incluye todas las respuestas que deseas que activen waitForUserResponse
        [
            'creo que tengo alergias',
            'siento que tengo alergias',
            'tengo alergias',
            'tengo alergia',
            'diagnostico',
            'detectar alergias',
            'detección de alergias',
            'creo que tengo alergia',
            'quisiera saber si tengo alergias',
            'me gustaria hacer un diagnostico de mis alergias',
            'quiero saber si tengo alergias',
            'como puedo confirmar si tengo alergias',
            'donde puedo hacerme pruebas de alergias',
            'quiero realizarme un estudio alergico',
            'como puedo saber si soy alergico a algo',
            'necesito saber si mi malestar es por alergias',
            'como puedo realizar pruebas de alergia',
            'que pruebas medicas debo hacerme para confirmar alergias',
            'necesito consultar a un especialista para diagnosticar mis alergias',
            'donde puedo conseguir un diagnostico de alergias'
        ].includes(message.toLowerCase())
    ) {
        waitForUserResponse();
    }
}

function waitForUserResponse() {
    const userResponseContainer = document.getElementById('userResponseContainer');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    userResponseContainer.style.display = 'flex'; // Mostrar el contenedor

    yesBtn.addEventListener('click', function () {
        handleUserResponse('si');
        userResponseContainer.style.display = 'none'; // Ocultar el contenedor después de la respuesta
    });

    noBtn.addEventListener('click', function () {
        handleUserResponse('no');
        userResponseContainer.style.display = 'none'; // Ocultar el contenedor después de la respuesta
    });
}

function handleUserResponse(userResponse) {
    switch (userResponse.toLowerCase()) {
        case 'sí':
        case 'si':
            appendMessage('user', userResponse);
            appendMessage('assistant', 'Perfecto, vamos a comenzar el diagnóstico.');
            askSymptomsQuestion();
            break;
        case 'no':
            appendMessage('user', userResponse);
            appendMessage('assistant', 'Si no presenta síntomas me es imposible diagnosticarlo adecuadamente.');
            break;
        default:
            appendMessage('user', userResponse);
            appendMessage('assistant', 'Lo siento, no entendí tu respuesta. ¿Puedes responder "si" o "no"?');
            break;
    }
    scrollConversationToBottom();
}

function askSymptomsQuestion() {
    appendMessage('assistant', '¿Presentas congestión nasal?');

    // Crear un nuevo elemento de entrada para congestión nasal
    const congestionInput = document.createElement('input');
    congestionInput.type = 'text';
    congestionInput.id = 'congestionInput';

    // Agregar el nuevo elemento al DOM
    conversationDiv.appendChild(congestionInput);

    congestionInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleCongestionResponse(congestionInput.value.trim().toLowerCase());
            // Eliminar el elemento de entrada después de obtener la respuesta
            conversationDiv.removeChild(congestionInput);
        }
    });
}
function handleCongestionResponse(congestionResponse) {
    const lowerCaseResponse = congestionResponse.toLowerCase();

    if (lowerCaseResponse === 'sí' || lowerCaseResponse === 'si') {
        appendMessage('user', congestionResponse);
        appendMessage('assistant', 'Entiendo, ¿son estornudos frecuentes o muy rara vez suceden?');

        // Crear un nuevo elemento de entrada para estornudos frecuentes
        const sneezingInput = document.createElement('input');
        sneezingInput.type = 'text';
        sneezingInput.id = 'sneezingInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(sneezingInput);

        sneezingInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleSneezingResponse(sneezingInput.value.trim().toLowerCase());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(sneezingInput);
            }
        });
    } else if (lowerCaseResponse === 'no') {
        appendMessage('user', congestionResponse);
        appendMessage('assistant', 'Si no presentas congestión nasal, puede que la alergia ya haya cesado.');
        // Puedes continuar con otras preguntas o el diagnóstico según sea necesario
    } else {
        appendMessage('user', congestionResponse);
        appendMessage('assistant', 'Lo siento, solo puedes responder "sí" o "no". ¿Puedes intentarlo de nuevo?');

        // Crear un nuevo elemento de entrada para que el usuario corrija su respuesta
        const retryInput = document.createElement('input');
        retryInput.type = 'text';
        retryInput.id = 'retryInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(retryInput);

        retryInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleCongestionResponse(retryInput.value.trim());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(retryInput);
            }
        });
    }
    scrollConversationToBottom();
}

function handleSneezingResponse(sneezingResponse) {
    const lowerCaseResponse = sneezingResponse.toLowerCase();

    if (lowerCaseResponse === 'estornudos frecuentes') {
        appendMessage('user', sneezingResponse);
        appendMessage('assistant', 'Claro, además de eso, ¿usted presenta enrojecimiento ocular?');

        // Crear un nuevo elemento de entrada para enrojecimiento ocular
        const rednessInput = document.createElement('input');
        rednessInput.type = 'text';
        rednessInput.id = 'rednessInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(rednessInput);

        rednessInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleRednessResponse(rednessInput.value.trim().toLowerCase());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(rednessInput);
            }
        });
    } else if (lowerCaseResponse === 'rara vez suceden') {
        appendMessage('user', sneezingResponse);
        appendMessage('assistant', 'Es probable que la alergia vaya a cesar pronto.');
        // Puedes continuar con otras preguntas o el diagnóstico según sea necesario    
    } else {
        appendMessage('user', sneezingResponse);
        appendMessage('assistant', 'Lo siento, solo puedes responder "estornudos frecuentes" o "rara vez suceden". ¿Puedes intentarlo de nuevo?');

        // Crear un nuevo elemento de entrada para que el usuario corrija su respuesta
        const retryInput = document.createElement('input');
        retryInput.type = 'text';
        retryInput.id = 'retryInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(retryInput);

        retryInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleSneezingResponse(retryInput.value.trim());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(retryInput);
            }
        });
    }
    scrollConversationToBottom();
}

function handleRednessResponse(rednessResponse) {
    const lowerCaseResponse = rednessResponse.toLowerCase();

    if (lowerCaseResponse === 'sí' || lowerCaseResponse === 'si') {
        appendMessage('user', rednessResponse);
        appendMessage('assistant', '¿Sufres una picazón intensa en los ojos?');

        // Crear un nuevo elemento de entrada para picazón en los ojos
        const itchingInput = document.createElement('input');
        itchingInput.type = 'text';
        itchingInput.id = 'itchingInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(itchingInput);

        itchingInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleItchingResponse(itchingInput.value.trim().toLowerCase());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(itchingInput);
            }
        });

    } else if (lowerCaseResponse === 'no') {
        appendMessage('user', rednessResponse);
        appendMessage('assistant', 'Usted tiene indicios de una pequeña alergia leve, debe ser tratada adecuadamente para eliminarla, porfavor escriba el sintoma que tiene para ser recetao/a correctamente, agradezco mucho serte de ayuda.');
        // Puedes continuar con otras preguntas o el diagnóstico según sea necesario    
    } else {
        appendMessage('user', rednessResponse);
        appendMessage('assistant', 'Lo siento, solo puedes responder "sí" o "no". ¿Puedes intentarlo de nuevo?');

        // Crear un nuevo elemento de entrada para que el usuario corrija su respuesta
        const retryInput = document.createElement('input');
        retryInput.type = 'text';
        retryInput.id = 'retryInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(retryInput);

        retryInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleRednessResponse(retryInput.value.trim());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(retryInput);
            }
        });
    }
    scrollConversationToBottom();
}

function handleItchingResponse(itchingResponse) {
    const lowerCaseResponse = itchingResponse.toLowerCase();

    if (lowerCaseResponse === 'sí' || lowerCaseResponse === 'si') {
        appendMessage('user', itchingResponse);
        appendMessage('assistant', '¿Tienes erupciones en la piel?');

        // Crear un nuevo elemento de entrada para erupciones en la piel
        const skinRashInput = document.createElement('input');
        skinRashInput.type = 'text';
        skinRashInput.id = 'skinRashInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(skinRashInput);

        skinRashInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleSkinRashResponse(skinRashInput.value.trim().toLowerCase());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(skinRashInput);
            }
        });

    } else if (lowerCaseResponse === 'no') {
        appendMessage('user', itchingResponse);
        appendMessage('assistant', 'Usted tiene indicios de una pequeña alergia leve, debe ser tratada adecuadamente para eliminarla. Por favor, escriba el síntoma que tiene para ser recetado/a correctamente. Agradezco mucho serte de ayuda.');
        // Puedes continuar con otras preguntas o el diagnóstico según sea necesario    
    } else {
        appendMessage('user', itchingResponse);
        appendMessage('assistant', 'Lo siento, solo puedes responder "sí" o "no". ¿Puedes intentarlo de nuevo?');

        // Crear un nuevo elemento de entrada para que el usuario corrija su respuesta
        const retryInput = document.createElement('input');
        retryInput.type = 'text';
        retryInput.id = 'retryInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(retryInput);

        retryInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleItchingResponse(retryInput.value.trim());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(retryInput);
            }
        });
    }
    scrollConversationToBottom();
}

function handleSkinRashResponse(skinRashResponse) {
    const lowerCaseResponse = skinRashResponse.toLowerCase();

    if (lowerCaseResponse === 'sí' || lowerCaseResponse === 'si') {
        appendMessage('user', skinRashResponse);
        appendMessage('assistant', '¿Presentas vómitos o náuseas?');

        // Crear un nuevo elemento de entrada para vómitos o náuseas
        const nauseaInput = document.createElement('input');
        nauseaInput.type = 'text';
        nauseaInput.id = 'nauseaInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(nauseaInput);

        nauseaInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleNauseaResponse(nauseaInput.value.trim().toLowerCase());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(nauseaInput);
            }
        });

    } else if (lowerCaseResponse === 'no') {
        appendMessage('user', skinRashResponse);
        appendMessage('assistant', 'Usted tienes varios sintomas de una alergia moderada, debe ser tratada adecuadamente para eliminarla lo mas pronto posible puesto que no es tan grave pero si es algo de que preocuparse, ya que puede llegar a crecer mas. Por favor, escriba el síntoma que tiene para ser recetado/a correctamente. Agradezco mucho serte de ayuda.');
        // Puedes continuar con otras preguntas o el diagnóstico según sea necesario    
    } else {
        appendMessage('user', skinRashResponse);
        appendMessage('assistant', 'Lo siento, solo puedes responder "sí" o "no". ¿Puedes intentarlo de nuevo?');

        // Crear un nuevo elemento de entrada para que el usuario corrija su respuesta
        const retryInput = document.createElement('input');
        retryInput.type = 'text';
        retryInput.id = 'retryInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(retryInput);

        retryInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleSkinRashResponse(retryInput.value.trim());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(retryInput);
            }
        });
    }
    scrollConversationToBottom();
}

function handleNauseaResponse(nauseaResponse) {
    const lowerCaseResponse = nauseaResponse.toLowerCase();

    if (lowerCaseResponse === 'sí' || lowerCaseResponse === 'si') {
        appendMessage('user', nauseaResponse);
        appendMessage('assistant', '¿Tiene dificultades severas para respirar?');

        // Crear un nuevo elemento de entrada para dificultades respiratorias
        const breathingDifficultyInput = document.createElement('input');
        breathingDifficultyInput.type = 'text';
        breathingDifficultyInput.id = 'breathingDifficultyInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(breathingDifficultyInput);

        breathingDifficultyInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleBreathingDifficultyResponse(breathingDifficultyInput.value.trim().toLowerCase());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(breathingDifficultyInput);
            }
        });

    } else if (lowerCaseResponse === 'no') {
        appendMessage('user', nauseaResponse);
        appendMessage('assistant', 'Usted tienes varios sintomas de una alergia moderada, debe ser tratada adecuadamente para eliminarla lo mas pronto posible puesto que no es tan grave pero si es algo de que preocuparse, ya que puede llegar a crecer mas. Por favor, escriba el síntoma que tiene para ser recetado/a correctamente. Agradezco mucho serte de ayuda.');
        // Puedes continuar con otras preguntas o el diagnóstico según sea necesario    
    } else {
        appendMessage('user', nauseaResponse);
        appendMessage('assistant', 'Lo siento, solo puedes responder "sí" o "no". ¿Puedes intentarlo de nuevo?');

        // Crear un nuevo elemento de entrada para que el usuario corrija su respuesta
        const retryInput = document.createElement('input');
        retryInput.type = 'text';
        retryInput.id = 'retryInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(retryInput);

        retryInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleNauseaResponse(retryInput.value.trim());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(retryInput);
            }
        });
    }
    scrollConversationToBottom();
}

function handleBreathingDifficultyResponse(breathingDifficultyResponse) {
    const lowerCaseResponse = breathingDifficultyResponse.toLowerCase();

    if (lowerCaseResponse === 'sí' || lowerCaseResponse === 'si') {
        appendMessage('user', breathingDifficultyResponse);
        appendMessage('assistant', '¿Presenta visión borrosa?');

        // Crear un nuevo elemento de entrada para visión borrosa
        const blurryVisionInput = document.createElement('input');
        blurryVisionInput.type = 'text';
        blurryVisionInput.id = 'blurryVisionInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(blurryVisionInput);

        blurryVisionInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleBlurryVisionResponse(blurryVisionInput.value.trim().toLowerCase());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(blurryVisionInput);
            }
        });

    } else if (lowerCaseResponse === 'no') {
        appendMessage('user', breathingDifficultyResponse);
        appendMessage('assistant', 'Usted tiene varios síntomas de una alergia moderada. Debe ser tratada adecuadamente lo más pronto posible, ya que no es tan grave pero sí es algo de qué preocuparse, ya que puede llegar a crecer más. Por favor, escriba el síntoma que tiene para ser recetado/a correctamente. Agradezco mucho serte de ayuda.');
        // Puedes continuar con otras preguntas o el diagnóstico según sea necesario    
    } else {
        appendMessage('user', breathingDifficultyResponse);
        appendMessage('assistant', 'Lo siento, solo puedes responder "sí" o "no". ¿Puedes intentarlo de nuevo?');

        // Crear un nuevo elemento de entrada para que el usuario corrija su respuesta
        const retryInput = document.createElement('input');
        retryInput.type = 'text';
        retryInput.id = 'retryInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(retryInput);

        retryInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleBlurryVisionResponse(retryInput.value.trim());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(retryInput);
            }
        });
    }
    scrollConversationToBottom();
}

function handleBlurryVisionResponse(BlurryVisionResponse) {
    const lowerCaseResponse = BlurryVisionResponse.toLowerCase();

    if (lowerCaseResponse === 'sí' || lowerCaseResponse === 'si') {
        appendMessage('user', BlurryVisionResponse);
        appendMessage('assistant', '¿Presenta dolor abdominal?');

        // Crear un nuevo elemento de entrada para dolor abdominal
        const abdominalPainInput = document.createElement('input');
        abdominalPainInput.type = 'text';
        abdominalPainInput.id = 'abdominalPainInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(abdominalPainInput);

        abdominalPainInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleAbdominalPainResponse(abdominalPainInput.value.trim().toLowerCase());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(abdominalPainInput);
            }
        });

    } else if (lowerCaseResponse === 'no') {
        appendMessage('user', BlurryVisionResponse);
        appendMessage('assistant', 'Usted tiene varios síntomas de una alergia moderada. Debe ser tratada adecuadamente lo más pronto posible, ya que no es tan grave pero sí es algo de qué preocuparse, ya que puede llegar a crecer más. Por favor, escriba el síntoma que tiene para ser recetado/a correctamente. Agradezco mucho serte de ayuda.');
        // Puedes continuar con otras preguntas o el diagnóstico según sea necesario    
    } else {
        appendMessage('user', BlurryVisionResponse);
        appendMessage('assistant', 'Lo siento, solo puedes responder "sí" o "no". ¿Puedes intentarlo de nuevo?');

        // Crear un nuevo elemento de entrada para que el usuario corrija su respuesta
        const retryInput = document.createElement('input');
        retryInput.type = 'text';
        retryInput.id = 'retryInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(retryInput);

        retryInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleAbdominalPainResponse(retryInput.value.trim());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(retryInput);
            }
        });
    }
    scrollConversationToBottom();
}

function handleAbdominalPainResponse(AbdominalPainResponse) {
    const lowerCaseResponse = AbdominalPainResponse.toLowerCase();

    if (lowerCaseResponse === 'sí' || lowerCaseResponse === 'si') {
        appendMessage('user', AbdominalPainResponse);
        appendMessage('assistant', '¿Usted presenta diarrea profusa, pulso debil, vomitos severos o urticaria? ¿Alguna de las mencionadas anteriormente?');

        // Crear un nuevo elemento de entrada para dolor abdominal
        const abdominalPainInput = document.createElement('input');
        abdominalPainInput.type = 'text';
        abdominalPainInput.id = 'abdominalPainInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(abdominalPainInput);

        abdominalPainInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                appendMessage('user', AbdominalPainResponse);
                appendMessage('assistant', 'Usted tiene sintomas muy concretos de una alergia totalmente severa, debe ser tratada adecuadamente para eliminarla lo mas pronto posible ya que es una situación de total emergencia que puede llegar a agravarse mucho mas y puede ser letal. Por favor, escriba el síntoma que tiene para ser recetado/a correctamente. Agradezco mucho serte de ayuda." en caso de decir no simplemente me diga.');
                // Puedes continuar con otras preguntas o el diagnóstico según sea necesario   
            }
        });

    } else if (lowerCaseResponse === 'no') {
        appendMessage('user', AbdominalPainResponse);
        appendMessage('assistant', 'Usted tiene varios síntomas de una alergia moderada. Debe ser tratada adecuadamente lo más pronto posible, ya que no es tan grave pero sí es algo de qué preocuparse, ya que puede llegar a crecer más. Por favor, escriba el síntoma que tiene para ser recetado/a correctamente. Agradezco mucho serte de ayuda.');
        // Puedes continuar con otras preguntas o el diagnóstico según sea necesario    
    } else {
        appendMessage('user', AbdominalPainResponse);
        appendMessage('assistant', 'Lo siento, solo puedes responder "sí" o "no". ¿Puedes intentarlo de nuevo?');

        // Crear un nuevo elemento de entrada para que el usuario corrija su respuesta
        const retryInput = document.createElement('input');
        retryInput.type = 'text';
        retryInput.id = 'retryInput';

        // Agregar el nuevo elemento al DOM
        conversationDiv.appendChild(retryInput);

        retryInput.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleBreathingDifficultyResponse(retryInput.value.trim());
                // Eliminar el elemento de entrada después de obtener la respuesta
                conversationDiv.removeChild(retryInput);
            }
        });
    }
    scrollConversationToBottom();
}


function scrollConversationToBottom() {
    const conversationDiv = document.getElementById('chat');
    conversationDiv.scrollTop = conversationDiv.scrollHeight + conversationDiv.clientHeight;

}




