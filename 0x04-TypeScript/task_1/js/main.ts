interface Teacher {
  readonly firstName: string;  
  readonly lastName: string;   
  fullTimeEmployee: boolean;   
  yearsOfExperience?: number;  
  location: string;            
  [key: string]: any;         
}
interface Director extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  printTeacher(): string;
}
function printTeacher({ firstName, lastName }) {
 return `${firstName}. ${lastName}`;
};
//task 4
interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}
interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
interface DirectorInterface {
  workFromHome():string;
  getCoffeeBreak():string;
  workDirectorTasks():string;
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
  function getToWork(){
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
