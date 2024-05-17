function removeElement(sel) {
	for (const el of document.querySelectorAll(sel)) {
		el.parentElement.removeChild(el)
	}
}

function openArchiveInBrowser() {
	// redirect archives link to open in browser
	if (location.href.indexOf('/archives/') < 0) {
		return
	}
	let links = document.querySelectorAll('.c-link')
	for (let x of links) {
		if (x.innerText === 'open this link in your browser') {
			x.click()
			break
		}
	}
}

function setFont() {
	document.querySelector('body').style.fontFamily = 'sf pro'
}

var intervalID

function init() {
	console.log('tweakslack')
	setFont()
	openArchiveInBrowser()
	const banner = '.p-client__banners'
	removeElement(banner)
	intervalID = setInterval(removeElement, 11*1000, banner)
}

init()
