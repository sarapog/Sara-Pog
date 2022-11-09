class Samochod {
    constructor(marka, model, cena, rocznik, spalanie){
        this.marka = marka;
        this.model = model;
        this.cena = cena;
        this.rocznik = rocznik;
        this.spalanie = spalanie;

    }
    wiek(){
        const data = new Date();
        const rok = data.getFullYear();
        const wiekSamochodu = rok - this.rocznik;
        return wiekSamochodu;
    }
}