document.querySelectorAll('.genre').forEach((item) => {
	item.addEventListener('click', function(event) {
		item.classList.toggle('selected')
	})
})

let data = null
let xhr = new XMLHttpRequest

xhr.addEventListener('readystatechange', function() {
	if (this.readyState ===4) {
		let data = JSON.parse(this.responseText)
	}
})

xhr.open('GET', 'https://doodle-manga-scraper.p.mashape.com/mangareader.net?cover=1&limit=50', true)
xhr.setRequestHeader("X-Mashape-Key", "HaMI4aRe4hmsh1hi0d2rIj2po2V0p1gwF5IjsnRfS6y9gdbrj5")
xhr.setRequestHeader('Access-Control-Allow-Origin', 'localhost:3000')
xhr.send(data)

let url = 'https://doodle-manga-scraper.p.mashape.com/mangareader.net?cover=1&limit=50';

fetch(url, {
  method: 'GET', // or 'PUT'
  headers: new Headers({
    'Content-Type': 'application/json',
    'X-Mashape-Key': 'HaMI4aRe4hmsh1hi0d2rIj2po2V0p1gwF5IjsnRfS6y9gdbrj5'
  })
})

.catch(error => console.error('Error:', error))
.then((response) => response.json())
.then(function(response) {

	results = document.getElementById('results')
    
    for (i = 0; response.length; i++) {
    	let manga = document.createElement('li')
    	let name = document.createElement('span')
    	let cover = document.createElement('img')

        results.appendChild(manga)
    	manga.appendChild(name)
    	name.innerHTML = response[i]['name']
    	manga.appendChild(cover)
    	cover.src = ['cover.jpg']
        // cover.addEventListener('mouseover', function(event){
        //     name.classList.add('show')
        // })
    	// cover.src = response[i]['cover']
    }
})

let years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
let i = 0

function nextItem() {
    i = i + 1
    i = i % years.length
    return years[i]
}

function prevItem() {
    if (i === 0) { 
        i = years.length
    } i = i - 1
    return years[i]
}

window.addEventListener('load', function () {
    document.getElementById('output').textContent = years[0]
    document.getElementById('prev_button').addEventListener(
        'click', function (e) { 
            document.getElementById('output').textContent = prevItem();
        }
    )
    document.getElementById('next_button').addEventListener(
        'click', function (e) {
            document.getElementById('output').textContent = nextItem();
        }
    )
})
