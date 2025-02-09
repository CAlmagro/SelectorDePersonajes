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
        audio.muted = (audio.volume === 0); // Mutear si el volumen es 0
        muteCheckbox.checked = audio.muted;
    });

    // Mute/unmute del audio
    muteCheckbox.addEventListener('change', function () {
        if (muteCheckbox.checked) {
            audio.muted = true; // Mutear correctamente en todos los navegadores
        } else {
            audio.muted = false;
        }
        volumeSlider.value = audio.muted ? 0 : audio.volume; // Mantener sincronización con el slider
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

    // Ajustar valores iniciales
    volumeSlider.value = audio.muted ? 0 : audio.volume;
    muteCheckbox.checked = audio.muted;
});
