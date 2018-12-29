let keySection = document.getElementById("#key-display");


let keyDisplay = function(type, value) {
  this.type = type;
  this.value = value;


    for (let i = 0; i < value.length; i ++) {
      let keyNumber = value[i].key_number;
      let keyName = value[i].key_name;
      let checkedOut = value[i].who_checked_out;

      let display = (keyNumber + ": " + keyName + " - in/out: " + checkedOut + "\n")

      keySection.append(display);
    // console.log(display);    
    }
    
}


