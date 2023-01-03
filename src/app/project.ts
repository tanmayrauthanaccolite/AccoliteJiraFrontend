import { Employee } from "./employee";
export interface Project {
    isActive: boolean,
    projectDescription: string,
    projectLabel: string,
    projectid:number,
    employee:Employee[]
}
