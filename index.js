let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    const copyofcats = [...cats,name]
    return copyofcats
}

function  prependCat(name) {
    const copyofcats = [name,...cats]
    return copyofcats
}
function removeLastCat() {
    const copyofcats = [...cats]
    copyofcats.pop()
    return copyofcats
}

function removeFirstCat() {
    const copyofcats = [...cats]
    copyofcats.shift()
    return copyofcats
}