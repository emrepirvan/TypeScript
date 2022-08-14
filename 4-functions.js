function getAverage1(a, b, c) {
    var result = (a + b + c) / 3;
    return 'resul : ' + result;
}
getAverage1(10, 20, 30);
///Functiondan geri dönücek değer string
function getAverage2(a, b, c) {
    var result = (a + b + c) / 3;
    return 'resul : ' + result;
    2;
}
getAverage2(10, 20, 30);
///Functiondan c değeri undefined gelebilme ihtimaline karşılık ? verdik 
function getAverage3(a, b, c) {
    var total = a + b;
    var count = 2;
    if (typeof c !== 'undefined') {
        total = +c;
        total++;
    }
    var result = total / count;
    return 'result : ' + result;
}
getAverage3(10, 20);
//peki parametre bilgisi belli değilse;
//Rest parameter kavramıyla yapabiliriz
function getAverage4() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
    }
    count = a.length;
    var result = total / count;
    return 'result : ' + result;
}
getAverage4(10, 20, 30, 40, 50);
//aynı functions Arrow function olarak yazılımı
//burda geri dönüş string olabilir 
var getAverage5 = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
    }
    count = a.length;
    var result = total / count;
    return 'result : ' + result;
};
getAverage5(10, 20, 30, 40, 50);
