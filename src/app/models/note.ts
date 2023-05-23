import { Tag } from './tag'

export class Note {
    noteID: number;
    name: string;
    raw: string;
    tags: Tag[];

    constructor(id: number, name: string, text: string, tags: Tag[]) {
        this.noteID = id;
        this.name = name;
        this.raw = text;
        this.tags = tags;
    }
}