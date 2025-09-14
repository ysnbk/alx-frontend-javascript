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
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

