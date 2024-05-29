export class Exercise{
    constructor(
        public name:string,
        public createdAt: Date,
        public finish : boolean,
        public classList : string,
        public finishedAt? : Date
    ) {}

}