/**
 * Define the Employee and Task concepts using the class notations
 */

//create the objects using the classes
//testing commit
class Employee{
    constructor(empName,salary,tasks){
        this.empName=empName
        this.salary=salary
        this.task=tasks
        this.empInfo=function(){
            console.log("Name: " + empName + " Tasks >>> ")
        
            for(let task of tasks){
                task.printTask();
            }
        }
    }
}

class Task{
    constructor(taskDec,dueDate){
        this.taskDec=taskDec
        this.dueDate=dueDate
        this.printTask=function(){
            console.log('Description: '+ this.taskDec + ' Due Date: ' + this.dueDate);
        }
    }

}


let emp1= new Employee('Alice',1000,[new Task('prepare the budget', 'Jan-01'), new Task('Conduct interviews','March')]); 
let emp2= new Employee('Bob',2000,[new Task('Write report','Jun'), new Task('Present report','July')]);

emp1.empInfo();
emp2.empInfo();
