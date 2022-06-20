function firstFunction(param1) {
    return param1 + "입니다."
}

let result = firstFunction("홍길동");

document.write(`<div><h1>${result} </h1>`);
document.write(`<h1>${eval("2*3+3*8")} </h1></div>`);

let car = {
    color: "black",
    wheels: 4,
    windows: 6,
    clarkson: function () {
        return "빵빵"
    },
    run: function () {
        return "주행중"
    }
}

document.write(`<div>차의 색상은 ${car.color}<br>`)
document.write(`차의 휠은 ${car.wheels}개<br>`)
document.write(`차의 창문이 ${car.windows}개<br>`)
document.write(`차의 경적이 ${car.clarkson()}<br>`)
document.write(`차는 지금 ${car.run()}</div>`)

document.write(`<div" ><h2>Array Silsuop</h2>`)

let colors = ["MediumSlateBlue", "Salmon", "DarkOliveGreen", "RosyBrown", "SlateGrey"];
for (let i = 0; i < colors.length; i++) {
    document.write(`<h2 style =background-color:${colors[i]}>${colors[i]} </h2>`)
}

document.write(`</div>`)
document.write(`<hr><h2>게시판 실습</h2>`)

let list = [
    {title: '글 제목은 이러쿵1', author: '작성자1', create_at: '2022-06-01', counts: 12, likes: 1000},
    {title: '글 제목은 이러쿵2', author: '작성자2', create_at: '2022-06-02', counts: 1432, likes: 2000},
    {title: '글 제목은 이러쿵3', author: '작성자3', create_at: '2022-06-03', counts: 1232, likes: 3000},
    {title: '글 제목은 이러쿵4', author: '작성자4', create_at: '2022-06-04', counts: 1662, likes: 4000},
    {title: '글 제목은 이러쿵5', author: '작성자5', create_at: '2022-06-05', counts: 1882, likes: 5000},
    {title: '글 제목은 이러쿵6', author: '작성자6', create_at: '2022-06-06', counts: 142, likes: 6000},
    {title: '글 제목은 이러쿵7', author: '작성자7', create_at: '2022-06-07', counts: 182, likes: 7000},
    {title: '글 제목은 이러쿵8', author: '작성자8', create_at: '2022-06-08', counts: 182, likes: 8000},
    {title: '글 제목은 이러쿵9', author: '작성자9', create_at: '2022-06-09', counts: 132, likes: 9000},
    {title: '글 제목은 이러쿵10', author: '작성자10', create_at: '2022-06-10', counts: 122, likes: 19000}
]
document.write(`<table class='table table-striped'>`);
document.write(`<thead><th>Title</th>`);
document.write(`<th>Author</th>`);
document.write(`<th>Create_at</th>`);
document.write(`<th>Counts</th>`);
document.write(`<th>Likes</th></thead>`);

for (let i = 0; i < list.length; i++) {
    const row = list[i];
    document.writeln('<tbody class="table-group-divider"><tr>');
    document.write(`<td><span>${row.title}</span></td>`);
    document.write(`<td><span>${row.author}</span></td>`);
    document.write(`<td><span>${row.create_at}</span></td>`);
    document.write(`<td><span>${row.counts}</span></td>`);
    document.write(`<td><span>${row.likes}</span></td>`);
}
document.writeln("</tr></tbody>")
document.writeln(`</table>`)


/*
document.write("<table class='table table-striped-columns'>");
        for (let x = 1; x < 10; x++) {
            document.writeln("<tr>");
            for (let y = 1; y < 10; y++) {
                let suop = x * y;
                document.write("<td>" + y + " * " + x + " = " + suop + " </td>");
            }
            document.writeln("</tr>")
        }
        document.writeln("</table>")
 */



