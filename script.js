// Get modal elements to variables
const modal = document.getElementById('modalWindow');
// Get modal button to variable
const btn = document.getElementById('modalBtn');
// Get close button to variable
const close = document.querySelector('.close');

// Listen for click event
// btn.addEventListener('click', function() {
//     modal.style.display = 'block';
// });

// close.addEventListener('click', function () {
//     modal.style.display = 'none';
// })

// Arrow function to open modal
const openModal = () => {
    modal.style.display = 'block';
}

const closeModal = () => {
    modal.style.display = 'none';
}

const clickOutside = (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}


btn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

const accept = document.querySelectorAll('.action')[0];
const decline = document.querySelectorAll('.action')[1];

accept.addEventListener('click', function() {
    alert('You accepted');
})

decline.addEventListener('click', function() {
    alert('You decline');
})

const modal2 = document.getElementById('modal2Window');
const modalBtn = document.getElementById('modal2');
const close2 = document.querySelector('.close2');

modalBtn.addEventListener('click', function() {
    modal2.style.display = 'block';
});

close2.addEventListener('click', function() {
    modal2.style.display = 'none';
})