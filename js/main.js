const details = document.getElementById('details');
const details_info = document.getElementById('details-info');
const close_btn = document.getElementById('close');

const range_1 = document.getElementById('range-1');
const range_2 = document.getElementById('range-2');
const range_3 = document.getElementById('range-3');
const range_4 = document.getElementById('range-4');

const percent_1 = document.getElementById('percent-1');
const percent_2 = document.getElementById('percent-2');
const percent_3 = document.getElementById('percent-3');
const percent_4 = document.getElementById('percent-4');

range_1.value = 10;
range_2.value = 90;
range_3.value = 0;
range_4.value = 0;

percent_1.innerHTML = range_1.value + '%';
percent_2.innerHTML = range_2.value + '%';
percent_3.innerHTML = range_3.value + '%';
percent_4.innerHTML = range_4.value + '%';

range_1.oninput = function() {
  range.call(this);
  percent_1.innerHTML = this.value + '%';
}

range_2.oninput = function() {
  range.call(this);
  percent_2.innerHTML = this.value + '%';
}

range_3.oninput = function() {
  range.call(this);
  percent_3.innerHTML = this.value + '%';
}

details.addEventListener('mouseenter', function() {
  details_info.classList.add('block');
});

close_btn.addEventListener('click', function() {
  details_info.classList.toggle('block');
});


// function range() {
//   let r1 = +range_1.value;
//   let r2 = +range_2.value;
//   let r3 = +range_3.value;
//   let r4 = +range_4.value;

//   if (r1 && !r2 && !r3) {
//     range_2.max = 100 - r1;
//     range_2.style.width = `${range_2.max}%`;
//     range_3.max = 100 - r1;
//     range_3.style.width = `${range_3.max}%`;
//   }

//   if (r1 && r2 && !r3) {
//     if (this === range_1) {
//       range_2.max = 100 - range_1.value;
//       range_2.style.width = `${range_2.max}%`;
//     } else if (this === range_2) {
//       range_1.max = 100 - range_2.value;
//       range_1.style.width = `${range_1.max}%`;
//     }

//     if (r1 + r2 < 100) {
//       range_3.max = 100 - (r1 + r2);
//       range_3.style.width = `${range_3.max}%`;
//     }
//   }

//   if (r1 && r2 && r3) {
//     if (this === range_1) {
//       range_2.max = 100 - (r1 + r2);
//       range_2.style.width = `${range_2.max}%`;
//       range_3.max = 100 - (r1 + r2);
//       range_3.style.width = `${range_2.max}%`;
//     } else if (this === range_2) {
//       range_1.max = 100 - range_2.value;
//       range_1.style.width = `${range_1.max}%`;
//     } else {
//       range_3
//     }
//   }

//   // Range_4 CODE
//   let sum = range_1.value + range_2.value + range_3.value;

//   if ( sum < 100 ) {
//     let max = 100 - sum;

//   for (let i = 1; i <= max; i++) {
//     range_4.value = i;
//   }
//   }
// }

function range() {
  r1 = +range_1.value;
  r2 = +range_2.value;
  r3 = +range_3.value;
  r4 = +range_4.value;

  if (this === range_1) {
    if (this.value > 100 - (r2 + r3)) {
      this.value = 100 - (r2 + r3);
    }
  }

  if (this === range_2) {
    if (this.value > 100 - (r1 + r3)) {
      this.value = 100 - (r1 + r3);
    }
  }

  if (this === range_3) {
    if (this.value > 100 - (r2 + r1)) {
      this.value = 100 - (r2 + r1);
    }
  }
  

  
  // Range 4 CODE
  let sum = r1 + r2 + r3;

  if (sum >= 100) {
    setTimeout(function() {
      range_4.value = 0;
    range_4.style.width = `${range_4.max}%`;
    percent_4.innerHTML = range_4.value + '%';
    return
    }, 1000);
  }

  setTimeout(function(){
    range_4.value = 100 - sum;
  percent_4.innerHTML = range_4.value + '%';
  }, 1000)
}