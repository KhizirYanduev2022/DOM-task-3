const body = document.body
const addTitle = ()=>{
const h1 = document.createElement('h1')
body.prepend(h1)
h1.textContent = 'Работа с DOM'
}

console.log(addTitle())


const addLinks =  () =>{
const link = document.createElement('li')
const ul =  document.querySelector('#list')
const a = document.createElement('a')


 a.textContent = 'Работа с DOM'
 a.href = "https://learn.javascript.ru/dom-nodes"
 
 link.append(a)
 ul.append(link)
}

   addLinks()   



   const colorAdd = (colors) => {
    document.body.style.background = colors;
   }

colorAdd('red')


const textAdd = (text) => {
    const link = document.querySelector('#list')
    const li = document.createElement('li')
    li.textContent = text
    link.append(li)


}

textAdd('Shaurma')


const deleteTag= () => {
 const copy = document.querySelector('#copyright') 
  copy.remove()

}


deleteTag()