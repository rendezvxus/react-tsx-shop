export type apiData = {
    id: string,
    title: string,
    description: string,
    price: number,
    images: string[],
    category: category,
}

export type itemData = apiData & {
    amount: number
}

export type category = {
    slug: String;
    name: String;
    url: String;
}

export type apiPayload = {
    limit?: number,
    skip?: number,
    category?: category
}
