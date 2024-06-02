export class Exercise{
    constructor(
        public name:string,
        public createdAt: Date,
        public finish : boolean = false,
        public classList : string = "normal",
        public finishedAt? : Date,
        public editButton : boolean = false
    ) {}

}