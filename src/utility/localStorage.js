import { toast } from "react-toastify";

const getReadBooks = () => {
    const ReadList = localStorage.getItem("Read-list");

    if (ReadList) {
        return JSON.parse(ReadList);
    }
    return [];
}
const SetReadBooks = id => {
    const ReadList = getReadBooks();
    const WishedList = getWishedBooks();
    const exist1 = WishedList.find(bookId => bookId == id);
    const exist = ReadList.find(bookId => bookId == id);
    if (!exist) {
        ReadList.push(id);
        localStorage.setItem("Read-list", JSON.stringify(ReadList));

    }
    if (exist1) {
        const index = WishedList.indexOf(id);
        WishedList.splice(index, 1);
        localStorage.setItem("Wish-list", JSON.stringify(WishedList));

    }

}
const getWishedBooks = () => {
    const WishedList = localStorage.getItem("Wish-list");
    if (WishedList) {
        return JSON.parse(WishedList);
    }
    return [];
}
const SetWishedBooks = id => {
    const ReadList = getReadBooks();
    const exist = ReadList.find(bookId => bookId == id);
    const WishedList = getWishedBooks();
    const exist1 = WishedList.find(bookId => bookId == id);

    if (!exist && !exist1) {
        WishedList.push(id);
        localStorage.setItem("Wish-list", JSON.stringify(WishedList));
        toast.success("The book is successfully added to the wishlist")

    }
    if (exist1) {
        toast.warn("The book is already in the wish list");
    }
    if (exist) {
        toast.warn("You have already read this book");
    }

}
export { getReadBooks, SetReadBooks, SetWishedBooks ,getWishedBooks};