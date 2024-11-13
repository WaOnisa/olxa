document.addEventListener('DOMContentLoaded', () => {
	let modal = document.querySelector('.formModal')
	// для тест драйва haval

	modal.addEventListener('submit', e => {
		e.preventDefault()

		let data = new FormData(modal)
		if (
			data.get('phone').split(/[-_()^\s*+$]+/).join('').length === 11
		) {
			modal.querySelector('button').setAttribute('disabled', 'disabled')
			if (modal.classList.contains('formModal')) {
				data.append('target', 'Заказать звонок')
				data.append('method', 'orderCall')
			}
			
			fetch('/api/askCall', {
				method: 'post',
				body: data,
			})
				.then(resp => resp.json())
				.then(result => {
					if (result.status === 'ok') {
						if (modal.classList.contains('formModal')) {
							modal.classList.add('active')
						} else {
							modal.classList.add('active')
						}
					}
				})
		} else {
			alert('Заполните номер')
		}
	})
})
