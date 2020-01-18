
$().ready(() => {
    let parms = getUrlParms();
    display(parms.stock);

    $("#save").click(() => {
        save(parms.stock);
    });
    $("#delete").click(() => {
        delStock(parms.stock);
    });
});

const display = (index) => {
    $("#symbol").val(stocks[index].symbol);
    $("#name").val(stocks[index].name);
    $("#location").val(stocks[index].location);
    $("#current").val(stocks[index].currPrice);
    $("#paid").val(stocks[index].paidPrice);
    $("#shares").val(stocks[index].shares);
}

const save = (index) => {
    console.log(stocks);
    let current = $("#current").val();
    let paid = $("#paid").val();
    let shares = $("#shares").val();
    let oldShares = stocks[index].shares;
    stocks[index].currPrice=current;
    stocks[index].paidPrice = paid;
    stocks[index].shares = shares;
    console.log(stocks);
    window.location = "stock-list.html";
}

const delStock = (index) => {
    delete stocks[index];
    console.log(stocks);
    window.location = "stock-list.html";
}