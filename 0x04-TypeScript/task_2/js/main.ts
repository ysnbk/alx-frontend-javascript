interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome():string;
  getCoffeeBreak():string;
  workTeacherTasks():string;
}

class Director implements DirectorInterface {
  function workFromHome(){
    return "Working from home";
  }
  function getCoffeeBreak(){
    return "Getting a coffee break";
  }
function workDirectorTasks(){
  return "Getting to director tasks";
}
}
class Teacher implements TeacherInterface {
  function workFromHome(){
    return "Cannot work from home";
  }
  function getCoffeeBreak(){
    return "Cannot have a break";
  }
function workTeacherTasks(){
  return "Getting to work";
}
}
function createEmployee(salary:number){
  if (salary < 500) return new Teacher()
  return new Director()
}
function isDirector(employee){
  
}
type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  } else {
    // This part is unreachable due to the type restriction on Subjects
    throw new Error("Invalid subject");
  }
}
