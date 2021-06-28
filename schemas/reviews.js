export default {
    title: "Reviews",
    name: 'review',
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required()
        },
    ]
}