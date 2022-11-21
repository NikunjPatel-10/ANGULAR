export class artist {

    public ArtistId?: number;
    public ArtistName?: string;
    public ArtistDescription?: string;
    public ArtistTypeId?: number;
    public ArtistType?: string;
    public PerformanceTypeId?: number;
    public PerformanceType?: string;
    public ArtistImages?: [
        {
            img1?: string,
            img2?: string,
            img3?: string,
            img4?: string,
            img5?: string,
        }
    ];
    public StatusForEvent?: string;
    public EventDays?: string;
    public EventRates?: string;
    public StatusForClass?: string;
    public ClassDays?: string;
    public Duration?: string;
    public ClassTypeId?: number;
    public ClassType?: string;
    public ClassRates?: string;
    public ClassAddress?: string

}