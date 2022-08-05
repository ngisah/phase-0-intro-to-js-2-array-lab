const cats = ["Milo", "Otis", "Garfield"];
cats;

function destructivelyAppendCat(name) {
    return cats.push(name);
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {

    return cats.unshift(name);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(name) {

    return cats.pop(name);
}
destructivelyAppendCat();

function destructivelyRemoveFirstCat(name) {

    return cats.shift(name);
}
destructivelyRemoveFirstCat();

function appendCat(name) {

    return [...cats, name];
}
appendCat("Broom");

function prependCat(name) {

    return [name, ...cats];
}
prependCat("Arnold");

function removeLastCat() {

    return cats.slice(0, -1);
}
removeLastCat();

function removeFirstCat() {

    return cats.slice(1);
}
removeFirstCat();