function getAverage1(a,b,c) {
    const result = (a+b+c)/3;
    return 'resul : '+ result;
}
getAverage1(10,20,30);

///Functiondan geri dönücek değer string
function getAverage2(a: number,b: number,c : number) : string {
    const result = (a+b+c)/3;
    return 'resul : '+ result;
2}
getAverage2(10,20,30)


///Functiondan c değeri undefined gelebilme ihtimaline karşılık ? verdik 
function getAverage3(a: number,b: number,c?: number) : string {
    let total = a+b;
    let count = 2;
    if (typeof c !== 'undefined') {
        total =+c
        total++;
    }
    const result = total / count;
    return 'result : '+ result;}
getAverage3(10,20)

//peki parametre bilgisi belli değilse;
//Rest parameter kavramıyla yapabiliriz
function getAverage4(...a: number[]) : string {
    let total =0 ;
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        total += a[i];
    }
    count = a.length;
    const result = total / count;
    return 'result : '+ result;}
getAverage4(10,20,30,40,50) 

//aynı functions Arrow function olarak yazılımı
//burda geri dönüş string olabilir 
const getAverage5 = (...a: number[]) : string => {
    let total =0 ;
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        total += a[i];
    }
    count = a.length;
    const result = total / count;
    return 'result : '+ result;}
getAverage5(10,20,30,40,50) 