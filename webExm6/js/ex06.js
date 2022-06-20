let price = 0;
let coffee = prompt("무슨 커피 드릴까요?", "");
switch (coffee) {
    case "espresso":
    case "에스프레소":
        price = 2000;
        break
    case "카푸치노":
        price = 3000;
        break
    case "카페라떼" :
        price = 3500;
        break
    default:
        document.write(coffee + "는 없습니다.");
}
if (price != 0)
    document.write(coffee + "는" + price + "원입니다.");

let i = 0, sum = 0;
while (true) {//무한 반복
    sum += i;
    if (sum > 3000)
        break;//합이 3000보다 큼. 반복문 벗어남
    i++;
}
document.write(i + "까지 더하면 3000을 넘음:" + sum);

let suop = 0;
for (let i = 1; i <= 10; i++) { //i가 1에서 10까지 반복
    if (i % 3 != 1) //3으로 나눈 나머지가 1이 아닌 경우
        continue; //다음 반복으로 점프(i++코드로)
    suop += i;
}
document.write("<h1>sil suop<h1> " + suop);