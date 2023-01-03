import { Project } from "./project";
export interface Epic {
    epicId: number;
    epicLabel: string;
    epicDescription: string;
    assignee: string;
    priority:number;
    status:string;
    project:Project;
}
