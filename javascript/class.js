class Personel{

    constructor(ad,soyad){
        this.ad=ad;
        this.soyad=soyad;
    }

    kaydet(){
         console.log(`Personel Kaydedildi. :${this.ad}`)
    }
  
}

Personel.prototype.kaydet()

const yo = new Personel("Ahmet","uçar");
yo.kaydet();




