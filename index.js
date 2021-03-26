//-----------------
function aa() {
    var q = "xxx";
    console.log(q);
}
//console.log(q);

//-----------------
{
    {
        var x = 30;
        var x = 20;
    }
    console.log("var x:", x)
    console.log("window.x :", window.x)

    let y = 30;
    //let y = 20; //error
    console.log("var y:", y)
    console.log("window.y :", window.y)
}

//-----------------
{
    let title = "ES6";
    let content = "새로운문자열";
    //let template = `<section>  //String.raw가 개행문자도 그대로보여줌
    let template = String.raw `<section> 
                        <h1 > ${title} \n</h1>  
                        <p> ${content} </p>  
                    </section >`;

    console.log(template);
}

//-----------------
{
    let kor = 30;
    let eng = 40;
    let math = 50;
    let exam = {
        kor,
        eng,
        math,
        total() {
            return kor + eng + math;
        },
        avg() {
            return (kor + eng + math) / 3;
        }

    };
    console.log("exam: ", exam);
    console.log("exam.kor: ", exam.kor);
    console.log("exam.avg():", exam.avg());
    console.log("exam.total():", exam.total());
}

//-----------------
{
    let attr = "eng";
    let exam = {
        [attr]: 10
    };
    console.log(exam);
}
console.log(`--------------------------------`);


console.log(`Object Destructuring1_______________`);
//Object Destructuring1 -----------------
{
    let exam = {
        kor: 90,
        eng: 80,
        math: 70
    }

    //function print(exam) {
    function print({ kor, eng, math }) {
        //let kor = exam.kor;
        //let eng = exam.eng;  
        //let { kor, eng, math } = exam;
        //console.log(`kor:${exam.kor}, eng:${exam.eng}, math:{exam.math}`); //연산이많이 일어남
        console.log(`kor:${kor}, eng:${eng}, math:${math}`);
    }

    print(exam);
}

console.log(`Object Destructuring2_______________`);
//Object Destructuring2 -----------------
{
    let exam = {
        kor: 90,
        eng: 80,
        math: 70
    }

    let { kor, eng, math, total = kor + eng + math } = exam;
    console.log(`step1- kor:${kor}, eng:${eng}, math:${math}, total:${total}`);

    exam.kor = 40;
    exam.eng = 60;
    //let { kor, eng, math } = exam; error
    //{ kor, eng, math } = exam; error
    ({ kor, eng, math, total = kor + eng + math } = exam);
    console.log(`step2- kor:${kor}, eng:${eng}, math:${math}, total:${total}`);

    let exam2 = {
        kor: 90,
        eng: 80,
        math: 70,
        total: kor + eng + math,
        avg: (kor + eng + math) / 3
    }
    console.log(`step3: total: ${exam2.total}, avg:${exam2.avg}`);
}

console.log(`Object Destructuring3_______________`);
//Object Destructuring3 -----------------
{
    let exam = {
        kor: 99,
        eng: 88,
        math: 77,
        student: {
            name: "june",
            phone: "010-8924-0899"
        }
    }

    let { kor: k, eng: e } = exam;
    console.log(`k:${k}, e:${e}`);

    //let { student: { name } } = exam;
    //console.log("name : ", name);

    let { kor, eng, student: { name, phone } } = exam;
    console.log(`kor:${kor}, eng:${eng}, name:${name}, phone:${phone}`);
}

console.log(`\n\nArray Destructuring1_______________`);
//Array Destructuring1 -----------------
{
    let kors = [10, 20, 30];
    let [kor1, kor2] = kors;
    let [, , kor3] = kors;
    console.log(`kor1:${kor1}, kor2:${kor2}, kor3:${kor3}`);

    let temp = [40, 50, 60];
    [kor1, kor2, kor3] = temp;
    console.log(`kor1:${kor1}, kor2:${kor2}, kor3:${kor3}`);

    //위치바꿈
    let x = 2,
        y = 3;
    [x, y] = [y, x];
    console.log(`x:${x}, y:${y}`);

}

console.log(`Array Destructuring2_______________`);
//Array Destructuring1 -----------------
{
    let 시험 = [10, 20, 30];
    console.log(`시험: ${시험}`);

    let exam = [10, 20, 30];
    let [kor, eng, math, com = 40] = exam;
    console.log(com);

    let exam2 = [10, 20, 30, [40, 50]];
    let [kor1, eng1, math1, [com1, history1]] = exam2;
    console.log(com1);

    let notices = {
        title: "공지사항",
        list: [
            { title: "공지1", cotent: "내일휴무입니다." },
            { title: "공지2", cotent: "내일휴무입니다." },
            { title: "공지3", cotent: "내일휴무입니다." },
            { title: "공지4", cotent: "내일휴무입니다." },
            { title: "공지5", cotent: "내일휴무입니다." }
        ]
    }

    //let { list: [, , notice] } = notices;
    let [, , notice] = notices.list;
    console.log(`notice: ${notice.title}`);
}

console.log(`Set_______________`);
//Set -----------------
{
    let set = new Set();
    set.add(5);
    set.add("5");
    set.add(5);
    set.add(2);

    let set2 = new Set();
    set2.add(5)
        .add("5")
        .add(5)
        .add(2);

    let set3 = new Set([2, 3, 4, 4, 4, 2, 3]);

    console.log("set:", set);
    console.log("set2:", set2);
    console.log("set3:", set3);
    console.log("");

    set.forEach(function(value, key, ownerSet) {
        //console.log("ownerSet:", ownerSet);
        console.log(`key:${key}, value:${value}`);
    })
    console.log("");

    for (let v of set2)
        console.log(v);

    for (let [key, value] of set3.entries())
        console.log(key, value);

    console.log(set3.has(5)); //true or false
    set.delete("5");
    set.clear(); //모두 삭제 
}

console.log(`Map_______________`);
//Map -----------------
{
    let exam = new Map();
    exam.set("kor", 90);
    exam.set("eng", 80);
    exam.set("math", 70);
    exam.set("com", 60);
    for (let v of exam)
        console.log(v);

    for (let [k, v] of exam)
        console.log(k, v);

    console.log("");

    let exam2 = new Map([
        [1, "hello"],
        [2, "hi"],
        [3, "okay"]
    ]);
    for (let v of exam2)
        console.log(v);

    for (let [k, v] of exam2)
        console.log(k, v);
}

console.log(`Rest Parameter_______________`);
//Rest Parameter -----------------
{
    function print(x, y, ...values) {
        console.log(`x:${x}, y:${y}`);
        console.log(`arg[0]:${arguments[0]}, arg[1]:${arguments[1]}`);

        for (let i = 0; i < values.length; i++) {
            console.log(`val:${values[i]}`);
        }

    }

    print(2, 3);
    print(2, 3, "hi~", "world");
}

console.log(`Spread Operator_______________`);
//Spread Operator -----------------
{
    function print(x, y, z) {
        console.log(`x:${x}, y:${y}, z:${z}`);
    }

    let nums1 = [1, 2, 3];
    let setNums2 = new Set([2, 4, 6]);
    print(...nums1);
    print(...setNums2);

    let nums3 = [...setNums2]; //set를 array로 copy
    print(...nums3);

    let exam = new Map();
    exam.set("kor", 90);
    exam.set("eng", 80);
    exam.set("math", 70);
    exam.set("com", 60);

    let temp = [...exam]; //map을 array로 copy
    console.log([...exam]);
    console.log([...exam][0]);
    console.log("########");
    console.log(temp);
    console.log(temp[0]);
    console.log(temp[0][0]);
}

console.log(`Default Value_______________`);
// Default Value -----------------
{
    function add(x, y) {
        x = x || 0;
        y = y || 0;
        return x + y;
    }

    console.log("step1 - add(2,3): ", add(2, 3));
    console.log("step1 - add(2): ", add(2));
    console.log("########");

    function addNew(x = 0, y = 0) {
        return x + y;
    }
    console.log("step2 - addNew(6,8): ", addNew(6, 8));
    console.log("step2 - addNew(7): ", addNew(7));
}

console.log(`Arrow Functions와 그 특징_______________`);
// Arrow Functions와 그 특징 -----------------
{
    let nums1 = [18, 21, 1, 2, 3, 11, 20, 13, 9];
    let nums2 = [66, 55, 1, 22, 3, 11, 20, 13, 9];
    nums1.sort();
    console.log("step1 - nums1 : ", nums1);

    function compare(x, y) {
        return x - y;
    }
    nums1.sort(compare);
    console.log("step2 - nums1 : ", nums1);

    nums2.sort((x, y) => x - y);
    console.log("step3 - nums2 : ", nums2);

}

console.log(`class _______________`);
//class  -----------------
{
    function Exam(k, e, m) {
        this.kor = k || 0;
        this.eng = e || 0;
        this.math = m || 0;
    }

    let exam1 = new Exam(10, 20, 30);
    let exam2 = new Exam(90);
    console.log("exam1 : ", exam1);
    console.log("exam2: ", exam2);

    Exam.prototype.total = function() {
        return this.kor + this.eng + this.math;
    };

    console.log("exam1.total : ", exam1.total());
    console.log("exam2.total : ", exam2.total());
    console.log("########");


    //prototype sample
    let sam = { a: 10, b: 20 };

    function Examx() {}
    Examx.prototype = sam;

    let examx = new Examx();
    console.log("proto examx : ", examx);
    console.log("proto examx.a : ", examx.a);
    console.log("########");

    //class
    class NewExam {
        #kor;
        #eng;
        #math;
        static #info = "안녕하세요. 저는 Exam클래스 입니다." ;
        constructor(k = 0, e = 0, m = 0) {
            this.#kor = k;
            this.#eng = e;
            this.#math = m;
        }
        total() { // #total() {      함수은닉화(avg에서도 #total를 붙여줘야함)
            return this.#kor + this.#eng + this.#math;
        }
        avg() {
            return this.total() / 3.0;
        }
        static info() {
            return NewExam.#info ;
        }
    }

    let nexam1 = new NewExam(10, 20, 30);
    let nexam2 = new NewExam(90);
    console.log("Newexam1 typeof: ", typeof NewExam); // --> function
    console.log("Newexam1.kor : ", nexam1.kor); //#kor(클래스 은닉화 undefined)
    console.log("Newexam1.info : ", NewExam.info()); //static이므로 굳이 instance선언후 사용할 필요없음.
    console.log("Newexam1 : ", nexam1);
    console.log("Newexam2: ", nexam2);
    console.log("Newexam1.total : ", nexam1.total());
    console.log("Newexam2.total : ", nexam2.total());
    console.log("Newexam2.avg : ", nexam2.avg());
}



console.log(`xx_______________`);
//xx -----------------
{
}
