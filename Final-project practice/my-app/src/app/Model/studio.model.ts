export class studio {

    public StudioId?: number;
    public StudioName?: string;
    public StudioDescription?: string;
    public StudioAddress?: string;
    public HardwareAndEquipment?: string;
    public CountryId?: number;
    public Country?: string;
    public StateId?: number;
    public State?: string;
    public CityId?: string;
    public City?: string;
    public StudioDays?: string;
    public StudioHours?: string;
    public Status?: string;
    public StudioServiceTypeId?: number;
    public StudioServiceType?: string;
    public EventRates?: string;
    public StudioImages?: [
        {
            img1?: string,
            img2?: string,
            img3?: string,
            img4?: string,
            img5?: string,
        }
    ];


}