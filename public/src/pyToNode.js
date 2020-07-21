
const url = new URL("http://localhost:3000/api/pycode")
     
const button = document.querySelector('#button')
const outputList = document.querySelector('#output')
const parambox = document.querySelector('#parambox')

button.onclick = fetchPyScript

function fetchPyScript() {
    let options
    paramArray = getParams()

    fetch(url)
        .then(data => data.json())
        .then(res => {
            console.log(res)
            res.forEach(element => {
                outputList.appendChild(createLi(element))
            });
        })
        .catch(err => console.log(err))
}

function createLi(data) {
    let li = document.createElement('li')
    li.textContent = data
    li.classList = 'collection-item'
    li.style = 'background-color: #3a3a3a; color: #dfdfdf'
    return li

}

function getParams() {
    if(parambox.value!==''){    
    return parambox.value.split(' ') 
    }
    return null
}
    