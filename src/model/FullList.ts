import ListItem from './Listitem'


interface List {
  list: ListItem[],
  load(): void,
  save(): void,
  clearList(): void,
  addItem(itemObj: ListItem): void,
  removeItem(id: string): void,
}

export default class FullList implements List {

  private constructor(private _list: ListItem[] = []){}

  get list(): ListItem[] {
    return this._list
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList")
    if (typeof storedList !=="string") return

    const parsedList: { _id: string, _item: string, _checked: boolean} []
  =JSON.parse(storedList)  
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify)
  }
}

clearList(): void {
  this._list.push(itemObj)

}




