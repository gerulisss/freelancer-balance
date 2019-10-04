function renderBalance( data ) {
    let HTML = '';

    for ( let i=0; i<data.length; i++ ) {

      let item = data[i]
        if (typeof item.expense === 'undefined')   item.expense === '0' ;
            
            
        
        HTML +=   `<div class="table-row">
                        <div class="cell">${i+1}</div>
                        <div class="cell">${item.month}</div>
                        <div class="cell">${item.expense}.Eur</div>
                        <div class="cell">${item.income}.Eur</div>
                        <div class="cell">${item.account}.Eur</div>
                      </div>`;
    

        }
return document.querySelector( '.table > .table-content' ).innerHTML = HTML;
    }



