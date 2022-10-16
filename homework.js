


class Queue{

  constructor(){
    this.items = [];
    this.limit = 10
  }

  add(e){
    if(this.items.length < this.limit){
      this.items.push(e)
      return true
    }else {
      return false
    }
  }

element(){
  return this.list[0]
}

offer1(e){
  this.items.pop()
  this.items.push(e)
  return true
}


offer2(e){
  if(this.items.length >= this.limit){
    this.items.pop()
    this.items.push(e)
    return true
  } else {
    return false
  }
}



peek(){
  if(this.items.length === 0){
    return undefined
  }else {
    return this.items[0]
  }
}

poll(){
if(this.items.length === 0){
  return undefined
}else {
  let aux = this.items[0]
this.items.shift()
return aux
}

}

remove(){
  let aux = this.items[0]
  this.items.shift()
  return aux
}

size(){
  return this.items.length
}

is_empty(){
  return this.items.length === 0
}

}


const queue = new Queue();

queue.add(3)
queue.add(3)
queue.add(3)
queue.add(3)
queue.offer1(5)


console.log(queue.items)




