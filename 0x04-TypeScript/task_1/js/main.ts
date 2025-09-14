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
function printTeacher(firstName:string, lastName:string) {
  return `${firstName.charAt(0)}. ${lastName}`;
};

