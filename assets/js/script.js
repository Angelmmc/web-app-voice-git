document.addEventListener('DOMContentLoaded', function () {
    const resultContainer = document.getElementById('result-container');
    const recognition = new webkitSpeechRecognition();

    recognition.lang = 'es-ES';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = function (event) {
        const result = event.results[0][0].transcript;
        resultContainer.innerHTML = `<strong>Resultado:</strong> ${result}`;
    };

    recognition.onerror = function (event) {
        resultContainer.innerHTML = `<strong>Error:</strong> ${event.error}`;
    };

    recognition.onend = function () {
        // Aquí puedes realizar acciones adicionales después de la identificación por voz.
    };

    // Agregar un evento de clic al contenedor para iniciar la identificación por voz.
    resultContainer.addEventListener('click', function () {
        recognition.start();
    });
});
