document.addEventListener('DOMContentLoaded', () => {
	let modal = document.querySelector('.ask.ask-call')
	let modalHeader = modal.querySelector('.askBlockHeader')
	let modalDesc = modal.querySelector('.askBlockDesc')
	let modalBckg = modal.querySelector('.askBckg')
	let modalForm = modal.querySelector('.askBlockForm')
	let close = modal.querySelector('.askClose')

	let modalOk = document.querySelector('.ask.ask-ok')
	// для тест драйва haval
	let modalOkHaval = document.querySelector('.ask.ask-ok.ask-ok-haval')
	
	modalBckg.addEventListener('click', () => {
		modal.classList.remove('active')
		modalDesc.innerText = ''
		document.body.style.overflowY = null
	})
	close.addEventListener('click', () => {
		modal.classList.remove('active')
		modalDesc.innerText = ''
		document.body.style.overflowY = null
	})

	modalForm.addEventListener('submit', e => {
		e.preventDefault()

		let data = new FormData(modalForm)
		if (
			data
				.get('phone')
				.split(/[-_()^\s*+$]+/)
				.join('').length === 11
		) {
			modalForm.querySelector('button').setAttribute('disabled', 'disabled')
			if (modal.classList.contains('fromAskMeConsultation')) {
				data.append('target', 'Заказать звонок')
				data.append('method', 'sendZayavka')
				try {
					ym(95565168, 'reachGoal', 'consult')
				} catch (err) {
					console.log('')
				}
			}
			
			fetch('/api/handlerZayavka', {
				method: 'post',
				body: data,
			})
				.then(resp => resp.json())
				.then(result => {
					if (result.status === 'ok') {
						if (modal.classList.contains('fromAskMeHaval')) {
							modalOkHaval.classList.add('active')
						} else {
							modalOk.classList.add('active')
						}
					}
				})
		} else {
			alert('Заполните номер')
		}
	})
})
