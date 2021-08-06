
export const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck
}

export const splitDeck = (deck) => {
    let arr1 = deck.slice(0,26)
    let arr2 = deck.slice(26,52)
    let deckObj = {deck1: arr1, deck2: arr2}
    return deckObj
}

export const takeCard = () => {

}

export const addCardDecks = (cards) => {
    
}