const opt = document.getElementById('op');
const opt2 = document.getElementById('op2');
const DisplayOption = document.getElementById('displayOption');
const DisplayOption2 = document.getElementById('displayOption2');


let val; let val2;

[opt, opt2].forEach(e =>{
  e.addEventListener('change', () => {
    val = opt.value;
    console.log("val:", val);
    
    val2 = opt2.value;
    console.log("val2:", val2);
    display(val, val2);
  })
})




function display(val, val2) {
  console.log("inside:", val)
  console.log("inside val2:",val2)
  DisplayOption.innerHTML = val;
  DisplayOption2.innerHTML = val2;
}
/*
window.addEventListener('DOMcontentload', function () {
  display();
})*/