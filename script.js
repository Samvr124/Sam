// Wanneer de gebruiker op de knop "Controleer antwoord" klikt
document.getElementById("controleer-antwoord").addEventListener("click", function() {
    // Verkrijg het ingevoerde antwoord
    var antwoord = document.getElementById("antwoord").value;

    // Controleer of het antwoord juist is
    if (antwoord === "18") {
        // Verberg de vraag en de invoervelden, en toon de knop voor het rad
        document.getElementById("puzzel-container").style.display = "none";
        document.getElementById("antwoord-container").style.display = "none";
        document.getElementById("rad-container").style.display = "block";
    } else {
        // Toon een foutmelding als het antwoord niet klopt
        alert("Fout antwoord. Probeer het opnieuw.");
    }
});

// Wanneer de gebruiker op "Draai het Rad!" klikt
document.getElementById("draaiRad").addEventListener("click", function() {
    // Verberg de "Draai het Rad!" knop en toon de rad video
    document.getElementById("rad-container").style.display = "none";
    document.getElementById("radVideo").style.display = "block";
    
    // Speel de rad video af
    document.getElementById("radVideo").play();

    // Na de rad video, speel de grap video af
    document.getElementById("radVideo").onended = function() {
        // Verberg de rad video en toon de grappige video
        document.getElementById("radVideo").style.display = "none";
        document.getElementById("grapjeVideo").style.display = "block";
        
        // Speel de grappige video af
        document.getElementById("grapjeVideo").play();

        // Na de grappige video, toon de "He said yes!" foto
        document.getElementById("grapjeVideo").onended = function() {
            // Verberg de grappige video en toon de foto
            document.getElementById("grapjeVideo").style.display = "none";
            document.getElementById("he-said-yes").style.display = "block";
        };
    };
});
