//Hide or show button 
function displayButton(element) {
    var x = document.getElementById(element);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

   /* Neutral Button */
   function neutralButton() {
    document.getElementById("myDropdown Neutral").classList.toggle("show");
  }
  
  function filterFunctionNeutral() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput Neutral");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown Neutral");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

   /* Punish Button */
   function punishButton() {
    document.getElementById("myDropdown Punish").classList.toggle("show");
  }
  
  function filterFunctionPunish() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput Punish");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown Punish");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

   /* Defense Button */
   function defenseButton() {
    document.getElementById("myDropdown Defense").classList.toggle("show");
  }
  
  function filterFunctionDefense() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput Defense");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown Defense");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

   /* All Character Savestates Button */
   function characterButton() {
    document.getElementById("myDropdown Character").classList.toggle("show");
  }
  
  function filterFunctionCharacter() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput Character");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown Character");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

   /* Any Savestate Button */
   function anySavestateButton() {
    document.getElementById("myDropdown AnySavestate").classList.toggle("show");
  }
  
  function filterFunctionAnySavestate() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput AnySavestate");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown AnySavestate");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

const autoUpdate = () => {
  setTimeout(function(){
    window.location.reload(1);
  }, 5000);
}