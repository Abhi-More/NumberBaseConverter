
function validateInput(innum, from_base) {

    var patterns = {
        '2': /^[01]+$/,
        '3': /^[0-2]+$/,
        '4': /^[0-3]+$/,
        '5': /^[0-4]+$/,
        '6': /^[0-5]+$/,
        '7': /^[0-6]+$/,
        '8': /^[0-7]+$/,
        '9': /^[0-8]+$/,
        '10': /^[0-9]+$/,
        '16': /^[0-9A-Fa-f]+$/
      };

      var pattern = patterns[from_base];

      if (innum.match(pattern)) {
        return true;
      } else {
        alert('Invalid number for the given base!');
        document.getElementById("in").focus();
        return false;
      }
}

function Calculate() {
    var innum = document.getElementById("in").value.toLowerCase();
    var base1 = document.getElementById("selection1").value;
    var base2 = document.getElementById("selection2").value;

    if (innum == "") {
        alert("Please enter number");
        document.getElementById("in").focus();
    }
    else if(validateInput(innum, base1) == false){}
    else if (base2 == "select base") {
        alert("Please select target base");
        document.getElementById("selection2").focus();
    }
    else if(validateInput(innum, base1)){
        
        var outnum = document.getElementById("out");

        //calculate
        var temp = parseInt(innum, base1)
        outnum.value = temp.toString(base2).toUpperCase();
    }

}

function Reset() {
    document.getElementById("out").value = "";
    document.getElementById("in").value = "";
    document.getElementById("selection1").value = "10";
    document.getElementById("selection2").value = "select base";
}
