import '../css/style.css';
import Forest from "./Forest";

// Na uvod se rozbali cele seznamy zvirat rostlin.
// Kliknutim na polozky seznamu se rozbali detail, opetovnym kliknutim kamkoliv na detail (do textu) se detail zase zavre.
// Je mozne mit otevreno vic detailu najednou.
// Funguji selekty podle biomu - oba seznamy se upravi
// Aplikace je celkem snadno rozsiritelna o pripadne dalsi seznamy nebo biomy.


function initialize() {
    const forest = new Forest();
    forest.render();
}

initialize();