import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/Listitem'
import ListTemplate from './templates/LitstTemplate'


const initApp = (): void => {
const fullList = FullList.instance
const template = ListTemplate.instance


const itemEntryForm = document.getElementById("itemEntryForm") as HTMLAllCollection


itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
  event.preventDefault()

  const input = document.getElementById("newItem") as HTMLInput
})
constclearItems = document.getElementById("clearItemsButton") as HTMLButtonElement

clearItems.add
}

FullList.addItem(new)



document.addEventListener("DOMContentLoaded", initApp)



