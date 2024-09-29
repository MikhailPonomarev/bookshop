export const fetchBooks = async (startIndex, category = 'Architecture') => {
    const apiKey = '';
    const url = `https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=${apiKey}&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`;
    let books;

    try {
        const response = await fetch(url);
        const body = await response.json();

        books = Array.from(body.items).map((it) => {
            return {
                thumbnail: it.volumeInfo.imageLinks.thumbnail,
                authors: it.volumeInfo.authors,
                title: it.volumeInfo.title,
                averageRating: it.volumeInfo.averageRating,
                ratingsCount: it.volumeInfo.ratingsCount,
                description: it.volumeInfo.description,
                retailPrice: it.saleInfo.retailPrice?.amount,
            };
        });
    } catch (error) {
        console.log(error);
    }

    return books;
};
