import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement,
  clear(): void,
  render(fullList: FullList): void,
}

export default class ListTemplate implements DOMList {


  ul: HTMLUListElement

  private constructor () {
    this.ul = document.getElementById("listItems") as HTMLUListElement
  }

  clear(): void {
    this.ul.innerHTML = ''
  }


  render(fulllist: FullList)
}

FullList.list.forEach(item => {
  const li = document.createElement("li") as HTMLElement
  li.className = "item"

  const check = document.createElement("input") as HTMLInputElement
  check.type = "checkbox"
  check.id = item.
  
})



check.addEventListener('change', () => {
  item.checked
})



const button = document.createElement("button") as HTMLButtonElement
button.className = 'button'
button.textContent = 'x'
li.append(button)

button.addEventListener('click', () => )








