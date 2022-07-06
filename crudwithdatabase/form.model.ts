export class Student{
    id:number
    name:string
    address:string
    gender:string
    date:Date
    hobbie:string
    cars:string
    subject=new Array<Subject>();
}
export class Subject{
    subjectname:string
    marks:string
}

