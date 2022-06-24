let result =  document.getElementById("result");

function clickButton(tg) {
  const tg_value = tg.innerHTML;
  
  if (tg_value == "=") {
    result.innerHTML = eval(result.innerHTML);
  } else if (tg_value == "AC") {
    result.innerHTML = "0";
  } else {
    if (result.innerHTML == "0") {
    result.innerHTML = tg_value;
  } else {
    result.innerHTML += tg_value;
  }
 }
}

function clickCode(code) {
  if (result.innerHTML.slice(-1) == '+') {
  } else if (result.innerHTML.slice(-1) == '-') {
    return;
  } else if (result.innerHTML.slice(-1) == '*') {
    return;
  } else if (result.innerHTML.slice(-1) == '/') {
    return;
  } else if (result.innerHTML.slice(-1) == '.') {
    return;
  } else {
  result.innerHTML += code.innerHTML;
  }
}

function clickButton00(double0) {
  if (result.innerHTML == '0') {
    return;
  } else {
    result.innerHTML += double0.innerHTML;
  }
}

