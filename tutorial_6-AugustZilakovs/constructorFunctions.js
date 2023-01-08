/**
 * Define the Employee and Task concepts using the constructor functions
 */

function Employee(empName,salary,tasks){
    this.empName=empName
    this.salary=salary
    this.tasks=tasks
    this.empInfo=function(){
        console.log("Name: " + this.empName + " Tasks >>> ")
        
        for(let task of this.tasks){
            task.printTask();
        }10
    }
}
function Task(taskDec,dueDate){
    this.taskDec=taskDec
    this.dueDate=dueDate
    this.printTask=function(){
        console.log('Description: '+ this.taskDec + ' Due Date: ' + this.dueDate);
    }
}


// create the objects using the constructor functions

let emp1 = new Employee('Alice',1000,[new Task('prepare the budget', 'Jan-01'), new Task('Conduct interviews','March')]);
let emp2 = new Employee('Bob',2000,[new Task('Write report','Jun'), new Task('Present report','July')]);

emp1.empInfo();
emp2.empInfo();

