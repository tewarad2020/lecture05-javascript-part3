//test embed js in html
console.log('hi')

//simple call back
const clickCallback = () => {
	console.log('button clicked')
}

//manipulate dom
const clickCallback = () => {
	// change node content
	const pElem = document.querySelector('p')
	pElem.innerHTML = "callback is clicked"

	// change bg color
	const bodyElem = document.querySelector('body')
	bodyElem.style.backgroundColor = "yellow"

	// change multiple nodes
	const pElems = document.querySelectorAll('p')
	for(const x of pElems)
		x.innerHTML = 'callback is clicked'
	
	// show https://www.w3schools.com/jsref/met_document_queryselector.asp
}

//read value
const clickCallback = () => {
	const inputElem = document.querySelector('input')
	console.log(inputElem.value)
}

/*Excercise
- มี input กับ button
- คลิกปุ่มแล้วเปลี่ยน bg color ตาม input
*/
const clickCallback = () => {
	const inputElem = document.querySelector('input')
	document.querySelector('body').style.backgroundColor = inputElem.value
}

//oninput
const inputCallback = (ev) => {
	console.log(ev)
	// change bg color without clicking
	document.querySelector('body').style.backgroundColor = ev.target.value	
}

//show https://www.w3schools.com/jsref/dom_obj_event.asp

/*add element*/
document.body.append('Hello world')

//add tag
const p = document.createElement('p')
p.innerHTML = "Hello world"
document.body.append(p)

//add in div
const div = document.createElement('div')
const p1 = document.createElement('p')
p1.innerHTML = "para1"
const p2 = document.createElement('p')
p2.innerHTML = "para2"
div.append(p1)
div.append(p2)
document.body.append(div)
//remove tag (continue)
p2.remove()
div.remove()
//remove child
div.removeChild(p1)
div.removeChild(div.childNodes[1])

//add attribute
const img = document.createElement('img')
img.setAttribute('src', 'https://images.dog.ceo/breeds/bulldog-boston/n02096585_554.jpg')
img.width = 200
document.body.append(img)
//remove attribute (continue)
img.removeAttribute('width')

//add event listener
const button = document.createElement('button')
button.innerHTML = 'click me'
document.body.append(button)
button.addEventListener('click', ()=>{
	console.log('Im clicked')
})
//note : remove pre "on"
const inputBox = document.createElement('input')
document.body.append(inputBox)
inputBox.addEventListener('input', ev => {
	console.log(ev.target.value)
})

/*Excercise 2
สร้าง App TODO LIST
- มี input รับชื่อ task
- มี ปุ่มเพิ่ม task
- โชว์ list ทั้งหมด ด้วย ul, li
*/

/*add-only todo list*/
let currentInput = ''

//input task
const input = document.createElement('input')
input.addEventListener( 'input', ev => {
	currentInput = ev.target.value
})

//list (ul, li)
const ul = document.createElement('ul')

//add task button
const btn = document.createElement('button')
btn.innerHTML="Add Task"
btn.addEventListener('click', () => {
	const li = document.createElement('li')
	li.innerHTML = currentInput
	ul.append(li)
})
//show everything
document.body.append(input)
document.body.append(btn)
document.body.append(ul)

/*add and delete todo list*/
let currentInput = ''

//input task
const input = document.createElement('input')
input.addEventListener( 'input', ev => {
	currentInput = ev.target.value
})

//list (ul, li)
const mainDiv = document.createElement('div')

//add task button
const btn = document.createElement('button')
btn.innerHTML="Add Task"
btn.addEventListener('click', () => {
	const spanTask = document.createElement('span')
	const span = document.createElement('span')
	span.innerHTML = currentInput
	spanTask.append(span)

	const delBtn = document.createElement('button')
	delBtn.innerHTML = 'delete'
	delBtn.addEventListener('click', () => {
		mainDiv.removeChild(spanTask)
	})

	spanTask.append(delBtn)
	spanTask.append(document.createElement('br'))
	mainDiv.append(spanTask)
})
//show everything
document.body.append(input)
document.body.append(btn)
document.body.append(mainDiv)


/*fetch api*/
const randomDog = async () => {
	const button = document.querySelector('button')
	button.innerHTML = 'Loading dog image ..'
	button.disabled = true
	const resp = await fetch('https://dog.ceo/api/breeds/image/random')
	const data = await resp.json()
	document.querySelector('#imgDog').src = data.message
}

const onImageLoaded = () => {
	document.querySelector('button').innerHTML = 'Random Dog'
	document.querySelector('button').disabled = false
}