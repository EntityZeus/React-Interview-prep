export class InfiniteScrollDataClass {
    Items = [];
    constructor() {
        this.#generateRandomListItems();
    }

    #generateRandomListItems() {
        for (let i=0; i<1000000; i++) {
            this.Items.push({id: i, name: `Item ${i}`});
        }
    }

    infiniteScrollData(startIndex, itemCount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = [];
                for(let i=startIndex; i<startIndex+itemCount; i++) {
                    data.push(this.Items[i]);
                }
                resolve(data);
            }, 500);
        })
    }
}