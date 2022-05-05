class IndexedMap {
  constructor() {
    // this.object = object
    this.counter = 0
    this.collection = []
    this.unionCollection = []
    this.uniqueElements = []
    this.duplicates = []
  }

  set(key, value) {
    const newElement = {
      key,
      value,
      index: this.counter,
    }

    this.collection.push(newElement)

    this.counter += 1
    console.log(this.collection)
  }

  hasKey(key) {
    this.collection.map((element) => {
      if (element.key === key) {
        console.log("key exist")
        return true
      } else {
        console.log("key dont exist")
        return false
      }
    })
  }

  hasIndex(index) {
    this.collection.map((element) => {
      if (element.index === index) {
        console.log("index exist")
        return true
      } else {
        console.log("index dont exist")
        return false
      }
    })
  }

  getByKey(key) {
    this.collection.map((element) => {
      if (element.key === key) {
        console.log(element)
        return element
      } else {
        console.log("No such element")
        return null
      }
    })
  }

  getByIndex(index) {
    this.collection.map((element) => {
      if (element.index === index) {
        console.log(element)
        return element
      } else {
        console.log("No such element")
        return null
      }
    })
  }

  removeByKey(key) {
    this.collection = this.collection.filter((element) => element.key !== key)

    console.log(this.collection)
  }

  sizeOfCollection() {
    console.log(this.collection.length)
    return this.collection.length
  }

  forEach(callback) {
    this.collection.map((element) => {
      callback(element.value, element.key, element.index)
    })
  }

  union() {
    for (let i = 0; i < arguments.length; i += 1) {
      this.unionCollection.push(arguments[i].collection)
    }
    console.log(this.unionCollection)
  }

  unique() {}

  uniqueKeys() {}

  sort(callback) {
    this.collection.sort(callback)

    console.log(this.collection)
  }

  sortByIndexes(callback) {
    this.collection.sort(callback)

    console.log(this.collection)
  }

  setTo(index, value) {
    this.collection.splice(index + 1, 0, { key: 0, value, index: this.counter })

    this.counter += 1

    console.log(this.collection)
  }

  removeAt(index, count = 1) {
    this.collection.splice(index + 1, count)

    console.log(this.collection)
  }
}

const shopList = new IndexedMap()
const toDoList = new IndexedMap()
const notToDoList = new IndexedMap()

function callbackForEach(value, key, index) {
  console.log(`value: ${value} key: ${key} index: ${index}`)
}

function callbackForSort(value1, value2) {
  if (value1.value > value2.value) {
    return 1
  }
  if (value1.value < value2.value) {
    return -1
  }

  if (value1.key > value2.key) {
    return 1
  }
  if (value1.key < value2.key) {
    return -1
  }
}

function callbackForSortByIndexes(index1, index2) {
  if (index1.index > index2.index) {
    return 1
  }
  if (index1.index < index2.index) {
    return -1
  }
}

shopList.set("tomato", 2)
shopList.set("tomato", 2)
shopList.set("orange", 5)
shopList.set("orange", 5)
shopList.set("milk", 1)
shopList.set("milk", 1)
shopList.set("carrot", 15)
shopList.set("butter", 3)

// shopList.hasKey("milk")
// shopList.hasKey("tea")

// shopList.hasIndex(1)
// shopList.hasIndex(5)

// shopList.getByKey("milk")
// shopList.getByKey(15)

// shopList.getByIndex(0)
// shopList.getByIndex(15)

// shopList.removeByKey("tomato")

// shopList.sizeOfCollection()

// shopList.forEach(callbackForEach)

toDoList.set("go shop", "ok")
toDoList.set("go home", "okey")

notToDoList.set("hi", "bye")
notToDoList.set("yes", "no")
notToDoList.set("good", "bad")

// shopList.unique()
// shopList.uniqueKeys()

// shopList.sort(callbackForSort)
// shopList.sortByIndexes(callbackForSortByIndexes)

// shopList.setTo(0, 5555)
// shopList.removeAt(0)
