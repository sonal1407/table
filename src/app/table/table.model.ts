export class Header {
    name: string;
    Key: string;
}
export enum Action {
    EDIT = 0,
    DELETE = 1,
    VIEW = 2
}
export class EventType {
    id: number;
    action: Action;
}
