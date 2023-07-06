export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
}

export enum TaskStatus {
    OPEN = "OPEN",
    IN_OPEN = "IN_OPEN",
    DONE = "DONE"
}