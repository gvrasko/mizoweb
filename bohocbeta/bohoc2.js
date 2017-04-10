function bohocosJatek() {
    if ( confirm('Te vagy a szamár eleje?')) {
    alert( 'Kurva anyád, bohóc!' );
}
else {
    alert( 'Akkor te egy szamár vagy!' );
}}

function buziJatek() {
    var nev = document.getElementById("keresztnev").value;
    if ( nev == 'Viktor' ) {
        alert( 'Sajnáljuk, te bizony buzi vagy! :(');
    } else {
        alert( 'Szerencsére veled minden rendben! További szép napot! :)');
    } }