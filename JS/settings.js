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

    // Ajustar volumen del audio con el slider
    volumeSlider.addEventListener('input', function () {
        audio.muted = false; // Desmutear si el usuario mueve el slider
        audio.volume = volumeSlider.value;
        muteCheckbox.checked = (audio.volume === 0); // Si volumen es 0, activar mute
    });

    // Mute/unmute del audio
    muteCheckbox.addEventListener('change', function () {
        if (muteCheckbox.checked) {
            audio.muted = true;
            volumeSlider.value = 0;
        } else {
            audio.muted = false;
            audio.volume = 0.5; // Valor por defecto al desmutear
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

    // Ajustar valores iniciales (importante para Safari y otros navegadores)
    volumeSlider.value = audio.muted ? 0 : audio.volume;
    muteCheckbox.checked = audio.muted;

    // Intentar permitir cambios en volumen después de la primera interacción
    document.body.addEventListener('click', function () {
        audio.muted = false; // Asegurar que no esté muteado
        volumeSlider.value = audio.volume; // Sincronizar slider
    }, { once: true });
});