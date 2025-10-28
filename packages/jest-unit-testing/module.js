function sum(a, b) {
    return a+b;
}
function div(a, b) {
    return a/b;
}
function containsNumbers(text){
    for (let i=0; i<text.length; i++) {
        if (!isNaN(text.charAt(i))) {
            return true;
        }
    }
    return false; // Pretty sure this is the bug. Moved it out of the for loop
}

export default {sum, div, containsNumbers};