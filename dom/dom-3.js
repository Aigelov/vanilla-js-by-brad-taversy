
// const $ = document.querySelector.bind(document);
// const btn = $('#button');

/** EVENTS */

// const buttonClick = (event) => {
  // $('#header-title').textContent = 'Changed';
  // $('#main').style.backgroundColor = '#f4f4f4';
  // console.log(event.target.id);
  // console.log(event.target.className);
  // console.log(event.target.classList);
  // const output = $('#output');
  // output.innerHTML = `<h3>${event.target.id}</h3>`;
  // console.log(event.type);
  //
  // console.log(event.clientX);
  // console.log(event.clientY);
  //
  // console.log(event.offsetX);
  // console.log(event.offsetY);
  //
  // console.log(event.altKey);
  // console.log(event.ctrlKey);
  // console.log(event.shiftKey);
// };

// btn.addEventListener('click', buttonClick);


/** MOUSE EVENTS */
// const btn = $('#button');
// const box = $('#box');
// const output = $('#output');
//
// const runEvent = (event) => {
//   event.preventDefault();
//   console.log(`EVENT TYPE: ${event.type}`);
//
//   output.innerHTML = `
//     <h3>
//         MouseX: ${event.offsetX}
//         MouseY: ${event.offsetY}
//     </h3>
//   `;
//
//   document.body.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 40)`;
//
//   output.innerHTML = `<h3>${event.target.value}</h3>`;
// };

// btn.addEventListener('click', runEvent);
// btn.addEventListener('dblclick', runEvent);
// btn.addEventListener('mousedown', runEvent);
// btn.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

// const itemInput = $('input[type="text"]');
// const select = $('select');
// const form = $('form');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// form.addEventListener('submit', runEvent);