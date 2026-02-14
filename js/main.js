function convert() {
    var dollar = document.getElementById("dollar").value;
    var currency = document.getElementById("currency").value;
    var result = document.getElementById("result");
    var rates = {
        AED: 13.7,
        AFN: 0.72,
        ALL: 0.59,
        AMD: 0.13,
        ANG: 27.8,
        AOA: 0.055,
        ARS: 0.042,
        AUD: 32.7,
        AWG: 27.82,
        AZN: 29.5,
        BAM: 29.67,
        BBD: 24.85,
        BDT: 0.41,
        BHD: 132.99,
        BIF: 0.0168,
        BMD: 50.15,
        BND: 39.17,
        BOB: 7.24,
        BRL: 9.12,
        BSD: 50.17,
        BTN: 0.58,
        BWP: 3.75,
        BZD: 25.0,
        CAD: 34.29,
        CDF: 1.0,
        CHF: 60.3,
        CLP: 0.05,
        CNY: 6.78,
        COP: 0.012,
        CRC: 0.075,
        CUP: 1.0,
        CVE: 0.095,
        CZK: 2.6,
        DJF: 0.27,
        DKK: 7.44,
        DOP: 0.85,
        DZD: 4.36,
        EGP: 1,
        EUR: 55.33,
        FJD: 24.0,
        FKP: 64.2,
        GBP: 64.0,
        GEL: 17.4,
        GGP: 64.2,
        GHS: 4.0,
        GIP: 64.2,
        GMD: 0.94,
        GNF: 0.005,
        GTQ: 6.8,
        GYD: 0.23,
        HKD: 6.1,
        HNL: 2.0,
        HRK: 7.4,
        HTG: 0.47,
        HUF: 0.14,
        IDR: 0.0035,
        ILS: 14.0,
        INR: 0.58,
        IQD: 0.036,
        IRR: 0.001,
        ISK: 0.35,
        JMD: 0.31,
        JOD: 66.0,
        JPY: 0.29,
        KES: 0.33,
        KGS: 0.61,
        KHR: 0.011,
        KMF: 0.11,
        KRW: 0.038,
        KWD: 153.9,
        KYD: 41.9,
        KZT: 0.11,
        LAK: 0.0025,
        LBP: 0.00063,
        LKR: 0.14,
        LRD: 0.31,
        LSL: 2.68,
        LYD: 6.29,
        MAD: 13.3,
        MDL: 2.9,
        MGA: 0.0106,
        MKD: 0.89,
        MMK: 0.025,
        MNT: 0.012,
        MOP: 6.2,
        MRU: 1.24,
        MUR: 1.15,
        MVR: 3.1,
        MWK: 0.055,
    };
    if (dollar == "") {
        result.innerHTML = "Please enter a value";
    } else if (dollar < 0) {
        result.innerHTML = "Please enter a positive value";
    } else if (isNaN(dollar)) {
        result.innerHTML = "Please enter a valid number";
    } else if (dollar == 0) {
        result.innerHTML = "Please enter a value greater than 0";
    } else if (dollar == 1000000) {
        result.innerHTML = "Please enter a value less than 1,000,000";
    } else {
        var rate = rates[currency];
        var total = dollar * rate;
        result.innerHTML="1 "+currency+" = "+rate+" EGP <br>"+"The result is: "+total.toFixed(2)+" EGP";
    }
    return false;
}