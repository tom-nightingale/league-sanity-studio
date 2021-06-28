export default {
    title: "Reviews",
    name: 'review',
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: "Company",
            name: "company",
            type: "array",
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'client'},
                    ]
                }
            ]
        },
        {
            title: "Review",
            name: "review",
            type: "text",
            validation: Rule => Rule.required()
        },
    ]
}