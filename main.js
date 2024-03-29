var rule=[
"1.交換遊戲","2.加分雙倍","3.神秘骰子",
"4.虛無遊戲","5.永恆之數","6.時間倒流",
"7.知識之盾","8.幸運之星","9.隨機交換(開發中)",
"10.雙倍扣分","11.分數賭注","12.幸運輪盤",
"13.祝福降臨","14.風險骰子(開發中)","15.成績大樂透"];
var ruleinfo=[
"1.交換遊戲:當月結算成績時，總平均(含額外加分)最低的人可以選擇與任何一人的任何一個成績與自己的一個成績進行兌換",
"2.加分雙倍:當月結算成績時，總平均(含額外加分)倒數2低的人可將額外加分的部分進行2倍增益",
"3.神秘骰子:當月結算成績時，總平均(含額外加分)倒數3低的人可以將成績套用至骰子公式中(公式:input+magnification*((100-input)/100)*4，其中magnification為隨機數值1~6)進行成績加成",
"4.虛無遊戲:當月結算成績時，總平均(含額外加分)倒數2低的人可個指定任何人(包含自己)的任何1個成績不列入計算",
"5.永恆之數:該月所有平時成績無法超過永恆之數，若超過則以永恆之數作為該次平時成績，永恆之數(上限)為(85+隨機1~6的數字)，永恆之數(下限)為(70+隨機-6~6的數字)",
"6.時間倒流:當月結算成績時，總平均(含額外加分)倒數2低的人，可選擇任何人的成績回復到該月特定時間點(如尚未被扣分時的時間點，或平時考平均還很低的時間點)",
"7.知識之盾:當月結算成績時，隨機2人可選擇保護3個平時成績，使其不受任何挑戰規則影響",
"8.幸運之星:隨機選擇一人，該月立即獲得5分的額外加分",
"9.隨機交換:當月結算成績時，所有人的隨機其中二個平時分數將被隨機交換",
"10.雙倍扣分:當月結算成績時，最高的2人的最高的平時成績扣分雙倍",
"11.分數賭注:所有人接有一次機會在平時考前進行預測成績，如果誤差範圍在5分以內，則可以額外加分5分，若高於或低於則額外加分扣5分",
"12.幸運輪盤:當月結算成績時，所有人可轉轉盤1次，獲得隨機額外加分1~5分",
"13.祝福降臨:當月每次平時考最低的兩人，可在平時考後各抽取1次祝福，效果持續到月底(若同一人抽取到重覆祝福(已經擁有的)，則強化該祝福)(祝福只對抽取人有效果)(中途強化祝福則強化後作用只在強化後產生)",
"14.風險骰子:當月結算成績時，所有人接有機會投擲風險骰子，投擲方法如下:每投擲一次會有12分之1的機率發生爆破，若無發生爆破則額外加分+1，但接下來骰子爆破機率提升為12分之2，已次類推，若發生爆破，將清除所有骰子加的分數，且-6分額外加分(注:每人機率獨立計算)",
"15.成績大樂透:當月結算成績時，每個人皆可以有3次機會丟掉一個成績(不列入計算)並抽取一個成績(一定要列入計算，不可再丟棄)，抽取到的成績為78~95中間的隨機成績，但也有低機率(12%)會抽到0分"];
var gift1=[
"1.扣分減免(1級):接下來的平時考(含這次)，扣分減少至原本的0.9倍",
"2.無視題目(1級):接下來的平時考(含這次)，可無視1題題目不計分",
"3.天眼(1級):接下來的平時考(不含這次)，25%的單選題可提前刪除1個不是答案的選項",
"4.解除負面效果(1級):接下來的平時考(不含這次)直到結算完畢，可免疫1次對自己的負面效果規則",
"5.不等價交換(1級):接下來的平時考(含這次)，可選擇1人與他猜拳1次，若猜贏，可獲得你和他該次平時考成績差3分之1的分數加入你這次平時考成績",
"6.作業加分(1級):接下來直到結算成績(含這次)，只要有寫作業，總平均額外加分0.33分",
"7.降低懲罰(1級):當月結算成績時，如果需要受到懲罰，懲罰程度下降30%"];
var gift2=[
"1.扣分減免(2級):接下來的平時考(含這次)，扣分減少至原本的0.75倍",
"2.無視題目(2級):接下來的平時考(含這次)，可無視2題題目不計分",
"3.天眼(2級):接下來的平時考(不含這次)，50%的單選題可提前刪除1個不是答案的選項",
"4.解除負面效果(2級):接下來的平時考(不含這次)直到結算完畢，可免疫2次對自己的負面效果規則",
"5.不等價交換(2級):接下來的平時考(含這次)，可選擇1人與他猜拳1次，若猜贏，可獲得你和他該次平時考成績差3分之2的分數加入你這次平時考成績",
"6.作業加分(2級):接下來直到結算成績(含這次)，只要有寫作業，總平均額外加分0.66分",
"7.降低懲罰(2級):當月結算成績時，如果需要受到懲罰，懲罰程度下降60%"];
var gift3=[
"1.扣分減免(3級):接下來的平時考(含這次)，扣分減少至原本的0.55倍",
"2.無視題目(3級):接下來的平時考(含這次)，可無視3題題目不計分",
"3.天眼(3級):接下來的平時考(不含這次)，75%的單選題可提前刪除1個不是答案的選項",
"4.解除負面效果(3級):接下來的平時考(不含這次)直到結算完畢，可免疫3次對自己的負面效果規則",
"5.不等價交換(3級):接下來的平時考(含這次)，可選擇1人與他猜拳1次，若猜贏，可獲得你和他該次平時考成績差3分之3的分數加入你這次平時考成績",
"6.作業加分(3級):接下來直到結算成績(含這次)，只要有寫作業，總平均額外加分1分",
"7.降低懲罰(3級):當月結算成績時，如果需要受到懲罰，懲罰程度下降90%"];
var gift4=[
"1.扣分減免(最高級):接下來的平時考(含這次)，扣分減少至原本的0.35倍",
"2.無視題目(最高級):接下來的平時考(含這次)，可無視6題題目不計分",
"3.天眼(最高級):接下來的平時考(不含這次)，100%的單選題可提前刪除2個不是答案的選項",
"4.解除負面效果(最高級):接下來的平時考(不含這次)直到結算完畢，可免疫5次對自己的負面效果規則",
"5.不等價交換(最高級):接下來的平時考(含這次)，可選擇1人與他猜拳1次，若猜贏，可獲得你和他該次平時考成績差3分之5的分數加入你這次平時考成績",
"6.作業加分(最高級):接下來直到結算成績(含這次)，只要有寫作業，總平均額外加分1.8分",
"7.降低懲罰(最高級):當月結算成績時，如果需要受到懲罰，懲罰程度下降100%"];
var gift = -1,giftlevel = 1;
function get(id) {
    return document.getElementById(id);
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function calculate(){
    var input = Number(get("score").value);
    var magnification = random(1,6);
    var anser = input+magnification*((100-input)/100)*4;
    if(anser>100) anser = 100;
    get("anser").value = anser.toFixed(2);
    var number = ((get("anser").value/get("score").value)-1)*100;
    get("prompt").innerHTML = "提升分數"+number.toFixed(2)+"%，提升倍率:"+magnification;
}
function copy(id){
    var inputElement = get(id);
    inputElement.select();
    inputElement.setSelectionRange(0, 99999);
    document.execCommand('copy');
}
function randomRule(){
    var randRule = random(0,14);
    get("rule").innerHTML = "<h2>"+rule[randRule]+"</h2>";
    get("ruleinfo").innerHTML = ruleinfo[randRule];
    get("num").innerHTML = randRule+1;
}
function enternalNumber(){
    get("enternalNumber1").value = 85+random(1,6);
    get("enternalNumber2").value = 70+random(-6,6);
}
function luckyNumber(){
    get("luckyNumber").value = random(1,5);
}
function giftget(){
    gift = random(0,6);
    giftlevel = 1;
    get("gift").innerHTML = "抽取到的祝福:<br>"+gift1[gift];
}
function giftup(){
    if(giftlevel == 1) get("gift").innerHTML = "抽取到的祝福:<br>"+gift2[gift];
    if(giftlevel == 2) get("gift").innerHTML = "抽取到的祝福:<br>"+gift3[gift];
    if(giftlevel == 3) get("gift").innerHTML = "抽取到的祝福:<br>"+gift4[gift];
    if(giftlevel >= 4) get("gift").innerHTML = "抽取到的祝福:<br>(以強化至最高級，請再抽一次)";
    giftlevel++;
}
function randomscore(){
    if(random(1,100)<13){
        get("scorerandom").value = 0;
    }else{
        get("scorerandom").value = random(78,95);
    }
}
document.getElementById('spinBtn').addEventListener('click', function() {

    this.disabled = true;
  

    setTimeout(function() {
      document.getElementById('spinBtn').disabled = false;
    }, 1000);
  

    var stopAngle = Math.floor(Math.random() * 360);
  

    var spinner = document.getElementById('spinner');
  

    spinner.style.transition = 'transform 1s ease-out';
  

    var currentRotation = getCurrentRotation(spinner);
    var totalRotation = currentRotation + stopAngle;

    rotateSpinner(spinner, totalRotation);
    randomRule();
  });

  function getCurrentRotation(element) {
    var st = window.getComputedStyle(element, null);
    var tr = st.getPropertyValue('transform');
    if (tr && tr !== 'none') {

      var values = tr.split('(')[1];
      values = values.split(')')[0];
      values = values.split(',');
      var a = values[0];
      var b = values[1];
      var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

      return angle >= 0 ? angle : (angle + 360);
    }
    return 0;
  }
  

  function rotateSpinner(element, angle) {
    element.style.transform = 'rotate(' + angle + 'deg)';
  }
  