// animation
const Sentence = document.getElementById('Sentence');
const FixBtn = document.getElementById('FixBtn');

Sentence.addEventListener('mouseenter', () => {
	FixBtn.style.display = "flex";
});

Sentence.addEventListener('mouseleave', () => {
	FixBtn.style.display = "none";
})

// function
function modal() {
	document.getElementById('modal').style.display = "flex";
	document.getElementById('ModalBackground').style.display = "block";
};

function hide() {
	document.getElementById('modal').style.display = 'none';
	document.getElementById('ModalBackground').style.display = "none";
}

document.getElementById('submit').addEventListener('click', () => {
	const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

	if (!title || !description) return;

	const Sentence = document.createElement('div');
	Sentence.className = 'Sentence';
	Sentence.innerHTML = `<h1> ${title} </h1><p> ${description} </p>`;

	document.querySelector('.content').appendChild(Sentence);
	
	document.getElementById('title').value = '';
	document.getElementById('description').value = '';
	hide();
});

document.getElementById('reset').addEventListener('click', () => {
	document.getElementById('title').value = '';
	document.getElementById('description').value = '';
	hide();
});