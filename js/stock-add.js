$().ready(()=>{
    $("#save").click(()=>{
        save();
    });
});




const save = () => {
    console.log(stocks);
    let symbol = $("#symbol").val();
    let name = $("#name").val();
    let location=$("#location").val();
    let current = $("#current").val();
    let paid = $("#paid").val();
    let shares = $("#shares").val();
    let stock = {symbol:symbol,name:name,location:location,currPrice:current,paidPrice:paid,shares:shares};
    stocks.push(stock);
    console.log(stocks);
    window.location = "stock-list.html";
}