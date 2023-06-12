// redirect archives link to open in browser
if (location.href.indexOf('/archives/') >= 0) {
  let links = document.querySelectorAll('.c-link')
  for (let x of links) {
	if (x.innerText === "open this link in your browser") {
	  x.click()
	  break
	}
  }
}

// tweak ui
document.querySelector("body").style.fontFamily = "sf pro rounded"
