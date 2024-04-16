const getBookedListId = () => {
    const storeBookedId = localStorage.getItem('Booked-list')
    if (storeBookedId) {
        return JSON.parse(storeBookedId)
    }
    return []
}

const setBookedId = (id) => {
    const storeBookedId = getBookedListId()
    const exist = storeBookedId.find(i=> i===id)     //ekhane dekhbo store id gulo ekta ekta kre match krabo click kora id r sthe
    if (!exist){                                  // jodi match na hoi .. mane store id te click kora id nei
        storeBookedId.push(id)
        localStorage.setItem('Booked-list',JSON.stringify(storeBookedId))
    }
    return exist 
}

const removeBookedListId = (id) => {
    let BookedList = JSON.parse(localStorage.getItem('Booked-list')) || [];
    BookedList = BookedList.filter(itemId => itemId !== id);
    localStorage.setItem('Booked-list', JSON.stringify(BookedList));
};

export {getBookedListId,setBookedId,removeBookedListId}