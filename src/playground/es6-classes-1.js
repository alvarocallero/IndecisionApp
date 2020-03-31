class Person {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        let aux = super.getDescription();
        if(this.major){
            aux += ` and im an expert on ${this.major}`; 
        }
        return aux;
    }
    getDescription() {
        return super.getDescription()
    }
}

const me = new Student("Mark");
const me2 = new Student("Peter",23,"React");
console.log(me.hasMajor());
console.log(me2.hasMajor());