    async function treelize(items, id = null, link = 'parentId') {
        return Promise.all(items
        .filter((item) => item[link] === id)
        .map(async(item) => ({ ...item, children: await treelize(items, item._id) })))
        }

        module.exports = treelize