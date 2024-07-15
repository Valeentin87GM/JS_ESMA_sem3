/*Задание 1: ""Управление персоналом компании""

Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// Пример использования классов
const employee = new Employee(""John Smith"");
employee.displayInfo();
// Вывод:
// Name: John Smith

const manager = new Manager(""Jane Doe"", ""Sales"");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales
*/


/**
 * Класс Empoyee
@param {string} name - имя сотрудника
@param displayInfo - метод, который выводит информацию о сотруднике

 */
class Employee {
    name;

    constructor(name) {
        this.name = name
    }

    displayInfo() {
        console.log(`Сотрудника зовут ${this.name}`);
    }

}

const employee1 = new Employee("Иван");

employee1.displayInfo();


/**
 * Класс EmployeeNew наследуется от Employee
@param {string} surname - фамилия сотрудника
@param {number} age - возраст сотрудника
@param displayAge - метод, выводящий возраст сотрудника 
*/
class EmployeeNew extends Employee {
    surname;
    age;


    displayAge() {
        console.log(`Мой возраст ${this.age}`);
    }
}

const employeeNew1 = new EmployeeNew("Максим");
employeeNew1.surname = "Петров";
employeeNew1.age = 25
employeeNew1.displayInfo();
employeeNew1.displayAge();
