export class Header {
    name: string;
    key: string;
}
export enum Action {
    EDIT = 'EDIT',
    DELETE = 'DELETE',
    VIEW = 'VIEW'
}
export class ActionEvent {
    id: number;
    action: Action;
}
