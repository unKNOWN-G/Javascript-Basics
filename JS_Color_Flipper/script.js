function update_count() {
  let elem = document.getElementById("counter");
  if (elem.textContent === "") {
    elem.textContent = 0;
  }
  elem.innerHTML = parseInt(elem.textContent) + 1;
}
function get_random_hex_digit() {
  return Math.floor(Math.random() * 15);
}

function get_random_hex() {
  let alphabet = "0123456789ABCDEF";
  let hex_string = "";
  for (let i = 0; i < 6; i++) {
    hex_string += alphabet[get_random_hex_digit()];
  }
  return hex_string;
}

function change_color() {
  let hex = get_random_hex();
  let elem = document.getElementsByClassName("color_changer");
  document.body.style.backgroundColor = "#" + hex;
  update_count();
  console.log(document.body.backgroundColor);
}
