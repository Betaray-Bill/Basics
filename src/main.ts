// // console.log("object")

// // let a: string | number; //union

// // a=5;
// // console.log(a)
// // a="Hii"
// // console.log(a)

// // let arr:(string | number)[] = ["12", 12.4, 5]
// // arr.unshift("1")
// // console.log(arr)

// // type s  = {
// //     name:string,
// //     age:number
// // }

// // const e1:s  = {
// //     name:"surya",
// //     age:12
// // }


// // const emp = (e:s):string => {
// //     return `${e.name}`
// // }

// // console.log(emp(e1))


// // // Functions
// // let multiplyfun = function(a:number, b:number):number {
// //     return a*b;
// // }

// // const log = (e:any) => {
// //     console.log(e)
// // }

// // // type
// // type mul = (a:number, b:number) => number;

// // interface mul_inter{
// //     (a:number, b:number):number;
// // }


// // const m:mul = (a,b): number => {
// //     return a*b;
// // }

// // log(m(2,3))


// // // Type Assertion
// // let assert:any = "125745"
// // let com:string = <string>assert;

// // console.log(typeof com)

// // // Type Assertion in Objects
// // // let emps = {}
// // // emps.name:"asda",
// // // emps.code:123
// // //   ^
// // //   |  Compilation Error

// // interface employee {
// //     name:string,
// //     code:number
// // }


// // let emp2 =  {} as employee;

// // emp2.name = "asda"
// // emp2.code = 123
// // console.log(emp2)


// // // let e = <string | number>"eolrs";  //union
// // const addOrConcat = (a:number, b:number , c:'add'|'con'):number | string => {
// //     if(c==='add'){
// //         return a+b;
// //     }
// //     return ""+a+b 
// // }
// // let val : number = addOrConcat(2,3,'add') as number;
// // let val2 : string = addOrConcat(2,3,'con') as string
// // console.log(val)
// // console.log(val2)


// // //DOM
// // const img = document.querySelector('img') as HTMLImageElement
// // console.log(img)

// // img.alt="Yooo "


// // let year: HTMLElement | null = document.getElementById("copy")!;
// // let thisYear: string ;
// // thisYear = new Date().getFullYear().toString()
// // year.setAttribute("datetime", thisYear)
// // year.textContent = thisYear

// console.log("Class")

// Classes
class Coder{
    constructor(
        public name:string,
        protected readonly age:number,
        private lang:string
    ){
        this.name = name;
        this.age = age;
        this.lang = lang;
        console.log(name, age, lang)
    }

    public getAge():number{
        return this.age;
    }
}


let a = new Coder("aas", 12, "typescript")
console.log(a.getAge(), a.name)


class WebDev extends Coder{
    constructor(
        public computer:string,
        name:string,
        age:number,
        lang:string
    ){
        // super denotes that these parameters are from parent's class and can be used here,
        // /the constructor has 4 parameters, except computer all other arguments are from parents value
        super(name, age, lang); 
        this.computer = computer;
    }

    public getLang():string{
        return `${this.name} - ${this.computer} - ${this.age}`;
    }
}

let s = new WebDev("B", "Surya", 12, "Typescript");

console.log(s.getLang())
console.log(s.computer)
console.log(s.age)

