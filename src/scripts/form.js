const dialog = document.getElementById('feedback_dialog');
const form = document.getElementById('feedback_form');

const dialogOpen = () => dialog.showModal();
const dialogClose = () => dialog.close();

form.addEventListener('submit', (e) => {
	[...form.elements].forEach(el => el.setCustomValidity(''));

	if (!form.checkValidity()) {
		e.preventDefault();
		form.reportValidity();

		[...form.elements].forEach(el => {
			if (!el.willValidate()) {
				el.toggleAttribute('aria-invalid', !el.checkValidity());
			}
		});

		return;
	}

	e.preventDefault();
	dialog.close();
	form.reset();
});