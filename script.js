function open_card() {
  document.getElementById('cerrar').style.display = '';
  
  document.getElementById('outside').className = 'open-card';
  
}

function close_card() {
  document.getElementById('outside').className = '';
  document.getElementById('cerrar').style.display = "none";
}