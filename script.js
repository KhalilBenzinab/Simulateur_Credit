// Montant range
var montantSlider = document.getElementsByName("montant-range")[0];
var montantOutput = document.getElementsByName("montant")[0];
montantOutput.innerHTML = montantSlider.value;

montantSlider.oninput = function() {
  montantOutput.value = this.value;
}

// Taux slider
var tauxSlider = document.getElementsByName("taux-range")[0];
var tauOoutput = document.getElementsByName("taux")[0];
tauOoutput.innerHTML = tauxSlider.value; 

tauxSlider.oninput = function() {
  tauOoutput.value = this.value;
}

// Durée slider
var dureeSlider = document.getElementsByName("duree-range")[0];
var dureeOutput = document.getElementsByName("duree")[0];
dureeOutput.innerHTML = dureeSlider.value; 

dureeSlider.oninput = function() {
  dureeOutput.value = this.value;
}

// Durée slider
var differeSlider = document.getElementsByName("differe-range")[0];
var differeOutput = document.getElementsByName("differe")[0];
differeOutput.innerHTML = differeSlider.value; 

differeSlider.oninput = function() {
  differeOutput.value = this.value;
}

// Mensualite slider
var mensualiteSlider = document.getElementsByName("mensualite-range")[0];
var mensualiteOutput = document.getElementsByName("mensualite")[0];
montantOutput.innerHTML = mensualiteSlider.value; 

mensualiteSlider.oninput = function() {
  mensualiteOutput.value = this.value;
}

