document.getElementById("btn1").onclick = function () {

    let price = Number(document.getElementById("price").value);
    let discount1 = Number(document.getElementById("discount1").value);
    let discount2 = Number(document.getElementById("discount2").value);

    let firstDiscount = price - (price * discount1 / 100);

    let finalPrice = firstDiscount -
    (firstDiscount * discount2 / 100);

    document.getElementById("result1").innerText =
    "Final Price = " + finalPrice;
};



document.getElementById("btn2").onclick = function () {

    let totalCost =
    Number(document.getElementById("totalCost").value);

    let quantity =
    Number(document.getElementById("quantity").value);

    let unit = totalCost / quantity;

    document.getElementById("result2").innerText =
    "Unit Price = " + unit;
};



document.getElementById("btn3").onclick = function () {

    let food =
    Number(document.getElementById("food").value);

    let beverages =
    Number(document.getElementById("beverages").value);

    let snacks =
    Number(document.getElementById("snacks").value);

    let totalCharge = food + beverages + snacks;

    document.getElementById("result3").innerText =
    "Total Charge = " + totalCharge;
};



document.getElementById("btn4").onclick = function () {

    let room1 =
    Number(document.getElementById("room1").value);

    let room2 =
    Number(document.getElementById("room2").value);

    let room3 =
    Number(document.getElementById("room3").value);

    let total = room1 + room2 + room3;

    document.getElementById("result4").innerText =
    "Total Earnings = " + total;
};



document.getElementById("btn5").onclick = function () {

    let attendees =
    Number(document.getElementById("attendees").value);

    let chargePerPerson =
    Number(document.getElementById("chargePerPerson").value);

    let totalCost = attendees * chargePerPerson;

    document.getElementById("result5").innerText =
    "Event Cost = " + totalCost;
};



document.getElementById("btn6").onclick = function () {

    let days =
    Number(document.getElementById("days").value);

    let parkingPerDay =
    Number(document.getElementById("parkingPerDay").value);

    let total = days * parkingPerDay;

    document.getElementById("result6").innerText =
    "Parking Cost = " + total;
};



document.getElementById("btn7").onclick = function () {

    let members =
    Number(document.getElementById("members").value);

    let feePerMember =
    Number(document.getElementById("feePerMember").value);

    let total = members * feePerMember;

    document.getElementById("result7").innerText =
    "Membership Fees = " + total;
};



document.getElementById("btn8").onclick = function () {

    let mathBook =
    Number(document.getElementById("mathBook").value);

    let scienceBook =
    Number(document.getElementById("scienceBook").value);

    let englishBook =
    Number(document.getElementById("englishBook").value);

    let total = mathBook + scienceBook + englishBook;

    document.getElementById("result8").innerText =
    "Textbook Cost = " + total;
};



document.getElementById("btn9").onclick = function () {

    let materials =
    Number(document.getElementById("materials").value);

    let refreshments =
    Number(document.getElementById("refreshments").value);

    let honorarium =
    Number(document.getElementById("honorarium").value);

    let total = materials + refreshments + honorarium;

    document.getElementById("result9").innerText =
    "Workshop Cost = " + total;
};



document.getElementById("btn10").onclick = function () {

    let musicFee =
    Number(document.getElementById("musicFee").value);

    let danceFee =
    Number(document.getElementById("danceFee").value);

    let dramaFee =
    Number(document.getElementById("dramaFee").value);

    let total = musicFee + danceFee + dramaFee;

    document.getElementById("result10").innerText =
    "Activity Fee = " + total;
};