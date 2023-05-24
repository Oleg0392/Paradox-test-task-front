export class Note {
    noteID: number;
    name: string;
    raw: string;
    tags: string;

    constructor(id: number, name: string, text: string) {
        this.noteID = id;
        this.name = name;
        this.raw = text;
        this.tags = '';
    }
}