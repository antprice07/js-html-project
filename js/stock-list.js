

$().ready(() => {
    list();
})



const list = () => {
    let tbody = $("#list");
    tbody.html("");
    for(let i = 0;i<stocks.length;i++){
        let tr = $("<tr></tr>");
        let symbol=`<td>${stocks[i].symbol}</td>`;
        let name=`<td>${stocks[i].name}</td>`;
        let location=`<td>${stocks[i].location}</td>`;
        let current=`<td>${formatter.format(stocks[i].currPrice)}</td>`;
        let paid=`<td>${formatter.format(stocks[i].paidPrice)}</td>`;
        let changeLoss=`<td>${formatter.format(stocks[i].currPrice-stocks[i].paidPrice)}</td>`;
        let shares=`<td>${stocks[i].shares}</td>`;
        let value=`<td>${formatter.format(stocks[i].shares*stocks[i].currPrice)}</td>`;
        tr.append(symbol,name,location,current,paid,changeLoss,shares,value);
        let edit = (`<a href='stock-edit.html?stock=${i}'>Edit</a>`);
        let td = $("<td></td>");
        td.append(edit);
        tr.append(td);
        tbody.append(tr);
    }
}


const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
