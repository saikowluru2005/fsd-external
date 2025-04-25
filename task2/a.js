//prototypal inheritance
const animal={
    makesound:function(){
        console.log("animal sound")
    }
}
const dog=Object.create(animal)
dog.bark=function(){
    console.log("bark")
}
dog.makesound()
dog.bark()

//class inheritance
class Animal{
    makesound(){
        console.log("animal sound")
    }
}
class Dog extends Animal{
    bark(){
        console.log("bark")
    }
}
const dog1=new Dog()
dog1.makesound()
dog1.bark()

