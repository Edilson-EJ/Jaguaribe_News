
fetch(`http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,ETH-BRL,EUR-USD,ARS-BRL`
).then((response) =>{
    return response.json()
}).then((jsonParsed) =>{
    console.log(jsonParsed) 

    //DOLAR

    const valor_atual_dolar = jsonParsed.USDBRL.bid 
    const maior_valor_dolar = jsonParsed.USDBRL.high 
    const menor_valor_dolar = jsonParsed.USDBRL.low 
    const comp_dolar = jsonParsed.USDBRL.name 
    const data_dolar = jsonParsed.USDBRL.create_date 


    const vad = document.querySelector("#atual_dolar")
    const mvd = document.querySelector("#maior_valor_dolar")
    const mnvd = document.querySelector("#menor_valor_dolar")
    const cd = document.querySelector("#comparação_dolar")
    const dd = document.querySelector("#data_dolar")

    vad.innerText = " R$ " + valor_atual_dolar
    mvd.innerText = ":" + " R$ " + maior_valor_dolar
    mnvd.innerText = ":" + " R$ " + menor_valor_dolar
    cd.innerText = comp_dolar
    dd.innerText = data_dolar

    //EURO

    const valor_atual_euro = jsonParsed.EURBRL.bid 
    const maior_valor_euro = jsonParsed.EURBRL.high 
    const menor_valor_euro = jsonParsed.EURBRL.low 
    const comp_euro = jsonParsed.EURBRL.name 
    const data_euro = jsonParsed.EURBRL.create_date 


    const vae = document.querySelector("#atual_euro")
    const mve = document.querySelector("#maior_valor_euro")
    const mnve = document.querySelector("#menor_valor_euro")
    const ce = document.querySelector("#comparação_euro")
    const de = document.querySelector("#data_euro")

    vae.innerText = " R$ " + valor_atual_euro
    mve.innerText = ":" + " R$ " + maior_valor_euro
    mnve.innerText = ":" + " R$ "+ menor_valor_euro
    ce.innerText = comp_euro
    de.innerText = data_euro

    //Libra Estelina

    const valor_atual_lb = jsonParsed.GBPBRL.bid 
    const maior_valor_lb = jsonParsed.GBPBRL.high 
    const menor_valor_lb = jsonParsed.GBPBRL.low 
    const comp_lb = jsonParsed.GBPBRL.name 
    const data_lb = jsonParsed.GBPBRL.create_date 


    const valb = document.querySelector("#atual_lb")
    const mvlb = document.querySelector("#maior_valor_libra_estelina")
    const mnvlb = document.querySelector("#menor_valor_libra_estelina")
    const clb = document.querySelector("#comparação_libra_estelina")
    const dlb = document.querySelector("#data_libra_estelina")

    valb.innerText = " R$ " + valor_atual_lb
    mvlb.innerText = ":" + " R$ " + maior_valor_lb
    mnvlb.innerText = ":" + " R$ "+ menor_valor_lb
    clb.innerText = comp_lb
    dlb.innerText = data_lb

    //BITCOIN 

    const valor_atual_b = jsonParsed.BTCBRL.bid 
    const maior_valor_b = jsonParsed.BTCBRL.high 
    const menor_valor_b = jsonParsed.BTCBRL.low 
    const comp_b = jsonParsed.BTCBRL.name 
    const data_b = jsonParsed.BTCBRL.create_date 


    const vab = document.querySelector("#atual_b")
    const mvb = document.querySelector("#maior_valor_bitcoin")
    const mnvb = document.querySelector("#menor_valor_bitcoin")
    const cb = document.querySelector("#comparação_libra_bitcoin")
    const db = document.querySelector("#data_bitcoin")

    vab.innerText = " R$ " + valor_atual_b + " Mil"
    mvb.innerText = ":" + " R$ " + maior_valor_b + " Mil"
    mnvb.innerText = ":" + " R$ "+ menor_valor_b + " Mil"
    cb.innerText = comp_b
    db.innerText = data_b

    // Ethereum 

    const valor_atual_eh = jsonParsed.ETHBRL.bid 
    const maior_valor_eh = jsonParsed.ETHBRL.high 
    const menor_valor_eh = jsonParsed.ETHBRL.low 
    const comp_eh = jsonParsed.ETHBRL.name 
    const data_eh = jsonParsed.ETHBRL.create_date 


    const vaeh = document.querySelector("#atual_eth")
    const mveh = document.querySelector("#maior_valor_ethereum")
    const mneh = document.querySelector("#menor_valor_ethereum")
    const ceh = document.querySelector("#comparação_ethereum")
    const deh = document.querySelector("#data_ethereum")

    vaeh.innerText = " R$ " + valor_atual_eh + " Mil"
    mveh.innerText = ":" + " R$ " + maior_valor_eh + " Mil"
    mneh.innerText = ":" + " R$ "+ menor_valor_eh + " Mil"
    ceh.innerText = comp_eh
    deh.innerText = data_eh

    //peso argentino

    const valor_atual_pa = jsonParsed.ARSBRL.bid 
    const maior_valor_pa = jsonParsed.ARSBRL.high 
    const menor_valor_pa = jsonParsed.ARSBRL.low 
    const comp_pa = jsonParsed.ARSBRL.name 
    const data_pa = jsonParsed.ARSBRL.create_date 


    const vapa = document.querySelector("#atual_pa")
    const mvpa = document.querySelector("#maior_valor_peso_argentino")
    const mnpa = document.querySelector("#menor_valor_peso_argentino")
    const cpa = document.querySelector("#comparação_libra_peso_argentino")
    const dpa = document.querySelector("#data_peso_argentino")

    vapa.innerText = " R$ " + valor_atual_pa 
    mvpa.innerText = ":" + " R$ " + maior_valor_pa 
    mnpa.innerText = ":" + " R$ "+ menor_valor_pa 
    cpa.innerText = comp_pa
    dpa.innerText = data_pa


})

