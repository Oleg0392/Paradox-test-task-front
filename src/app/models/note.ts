import { Tag } from './tag'

export class Note {
    id: number;
    name: string;
    raw: string;
    tags: Tag[];

    constructor(id: number, name: string, text: string, tags: Tag[]) {
        this.id = id;
        this.name = name;
        this.raw = text;
        this.tags = tags;
    }
}