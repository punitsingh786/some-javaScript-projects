const insert=document.getElementById('insert');

window.addEventListener('keydown',(e)=>{

    insert.innerHTML=`<div id='color'>
    <table>
        <tr>
            <th>key</th>
            <th>keycode</th>
            <th>code</th>
        </tr>
        <tr>
            <th>${e.key==' '?'space':e.key}</th>
            <th>${e.keycode}</th>
            <th>${e.code}</th>
        </tr>


    </table>

    </div>`

})