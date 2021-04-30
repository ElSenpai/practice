const urunServis={
    ekle:function(){
        console.log("this")
    },
    yok:function(){
      console.log(this)
    }
}
urunServis.ekle()
urunServis.yok()