function changeOption(selectedOption) {
    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');

    if (selectedOption === 1) {
      option1.classList.add('selected');
      option2.classList.remove('selected');
    } else {
      option2.classList.add('selected');
      option1.classList.remove('selected');
    }
  }