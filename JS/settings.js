document.addEventListener('DOMContentLoaded', function () {
    var settingsIcon = document.getElementById('settings-icon');
    var settingsMenu = document.getElementById('settings-menu');
    var volumeSlider = document.getElementById('volume-slider');
    var muteCheckbox = document.getElementById('mute-checkbox');
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    var audio = document.getElementById('miAudio');

    // Mostrar/ocultar el menú al hacer clic en el icono
    settingsIcon.addEventListener('click', function () {
        settingsMenu.style.display = (settingsMenu.style.display === 'block') ? 'none' : 'block';
    });

    // Ajustar volumen del audio
    volumeSlider.addEventListener('input', function () {
        audio.volume = volumeSlider.value;
        muteCheckbox.checked = (audio.volume === 0);
    });

    // Mute/unmute del audio
    muteCheckbox.addEventListener('change', function () {
        if (muteCheckbox.checked) {
            audio.volume = 0;
            volumeSlider.value = 0;
        } else {
            audio.volume = 0.5; // Valor por defecto
            volumeSlider.value = 0.5;
        }
    });

    // Cambiar entre modo oscuro y claro
    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function (event) {
        if (!settingsMenu.contains(event.target) && event.target !== settingsIcon) {
            settingsMenu.style.display = 'none';
        }
    });

    // Ajustar volumen inicial
    volumeSlider.value = audio.volume;
});