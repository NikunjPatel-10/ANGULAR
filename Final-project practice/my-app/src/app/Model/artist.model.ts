export class artist {
    public id: number;
    public artistimg: string;
    public artistDescription: string;
    public artistLocation: string
    public artistType: string
    constructor(
        id: number,
        artistimg: string,
        artistDescription: string,
        artistLocation: string,
        artistType: string
    ) {
        this.id = id;
        this.artistimg = artistimg
        this.artistDescription = artistDescription,
            this.artistLocation = artistLocation,
            this.artistType = artistType
    }
}