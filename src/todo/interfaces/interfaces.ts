export interface Todo{
    id:String;
    desc:String;
    completed:Boolean;
}

export interface TodoState{
    todoCount:Number;
    todos:Todo[];
    completed:Number;
    pending:Number;
}