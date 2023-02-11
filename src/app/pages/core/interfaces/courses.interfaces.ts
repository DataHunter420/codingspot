export interface ICourses{

    course_heading:string,
    course_desc:string,
    example:string,
    buttons:IButtons[]

}

interface IButtons{
    link:string,
    text:string
}