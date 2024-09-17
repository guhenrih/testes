$(document).ready(function() {
    let clickCount = 0;

    function moveButton() {
        const x = Math.random() * ($(window).width() - $('#moving-button').width());
        const y = Math.random() * ($(window).height() - $('#moving-button').height());
        $('#moving-button').css({ top: y, left: x });
    }

    $('#moving-button').click(function() {
        clickCount++;
        if (clickCount === 10) {
            $('#moving-button').fadeOut(); // Esconde o botão
            $('#special-message').fadeIn(); // Exibe a mensagem especial
            clickCount = 0; // Reseta o contador de cliques
        } else {
            moveButton();
        }
    });

    moveButton(); // Move o botão inicialmente
});
