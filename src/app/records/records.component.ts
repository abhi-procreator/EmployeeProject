import { Component, OnInit } from '@angular/core';
//import { ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {



 

  constructor() { }

  ngOnInit(): void {
  }

  department: string[] = ['HR', 'IT', 'Finance']
  manager: string[] = ['Ashok kumar', 'Mohan', 'Kavita', 'Yash']

  onChange(key: any, event: any) {

        this.Employee =   this.Employee.filter(emp=> emp[key] === event.target.value);
        console.log(this.Employee);
  }
  //isfilter: boolean = false;
  //filteredEmployee!: any[];
  //empArr: any;


  // onChange(key: any, event: any) {
  //   let empArr = this.Employee;
  //   this.Employee = [];
  //   //let filterEmp = key;

  //   if (!this.isfilter) {
  //     this.Employee = empArr.filter((data: any) => {
  //       this.isfilter = true;
  //       return data[key] === event.target.value;
  //     });

  //     this.filteredEmployee = this.Employee;
  //   }
  //   else {
  //     this.Employee = this.filteredEmployee.filter((data: any) => {
  //       return data[key] === event.target.value;
  //     });
  //   }

  // }



  Employee: any[] = [
    {
      id: 1,
      name: "Abhishek",
      department: "HR",
      manager: "Ashok kumar",
      salary: 20500,
    },
    {
      id: 2,
      name: "Shubham",
      department: "IT",
      manager: "Mohan",
      salary: 25000,
    },
    {
      id: 4,
      name: "Mrityunjay",
      department: "Finance",
      manager: "Kavita",
      salary: 32000,
    },
    {
      id: 5,
      name: "Suraj kumar",
      department: "IT",
      manager: "Yash",
      salary: 20200,
    },
    {
      id: 6,
      name: "Rohit",
      department: "Finance",
      manager: "Dileep",
      salary: 35500,
    },
    {
      id: 7,
      name: "Vishal",
      department: "HR",
      manager: "Kavita",
      salary: 21500,
    },
    {
      id: 8,
      name: "Neeraj kumar",
      department: "IT",
      manager: "Mohan",
      salary: 42500,
    },
    {
      id: 9,
      name: "Anurag",
      department: "HR",
      manager: "Ashok kumar",
      salary: 40500,
    },
    {
      id: 10,
      name: "Sujeet",
      department: "Finance",
      manager: "Mohan",
      salary: 30000,
    },
    {
      id: 11,
      name: "Ankit",
      department: "HR",
      manager: "Ashok kumar",
      salary: 31500,
    },
    {
      id: 12,
      name: "Aniket",
      department: "IT",
      manager: "Kavita",
      salary: 55500,
    },
    {
      id: 13,
      name: "Ankit ",
      department: "Finance",
      manager: "Yash",
      salary: 29400,
    },
    {
      id: 14,
      name: "Anuj",
      department: "HR",
      manager: "Yash",
      salary: 36600,
    },
    {
      id: 15,
      name: "Anit",
      department: "IT",
      manager: "Mohan",
      salary: 21500,
    },
    {
      id: 16,
      name: "Ankush",
      department: "HR",
      manager: "Ashok kumar",
      salary: 20500,
    },
    {
      id: 17,
      name: "Shivendra",
      department: "Finance",
      manager: "Kavita",
      salary: 23500,
    },
    {
      id: 18,
      name: "Saurabh",
      department: "HR",
      manager: "Mohan",
      salary: 39900,
    },
    {
      id: 19,
      name: "Ambuj",
      department: "IT",
      manager: "Dileep",
      salary: 29900,
    },
    {
      id: 20,
      name: "Shrayansh",
      department: "HR",
      manager: "Dileep",
      salary: 28500,
    },
    {
      id: 21,
      name: "Lavkush",
      department: "Finance",
      manager: "Ashok kumar",
      salary: 37000,
    },
    {
      id: 22,
      name: "Ritesh",
      department: "HR",
      manager: "Kavita",
      salary: 38800,
    },
    {
      id: 23,
      name: "Nitish",
      department: "IT",
      manager: "Yash",
      salary: 26000,
    },
    {
      id: 24,
      name: "Himanshu",
      department: "Finance",
      manager: "Yash",
      salary: 41000,
    },
    {
      id: 25,
      name: "Dheeraj",
      department: "HR",
      manager: "Kavita",
      salary: 49000,
    },
    {
      id: 26,
      name: "Shivam",
      department: "IT",
      manager: "Ashok kumar",
      salary: 39200,
    },


  ]

}