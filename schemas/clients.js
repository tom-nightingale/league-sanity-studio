export default {
    title: "Clients",
    name: 'clients',
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: 'Client Logo',
            name: 'clientLogo',
            type: 'image',
            validation: Rule => Rule.required()
        },
        {
            title: 'Client URL',
            name: 'clientUrl',
            type: 'url',
            validation: Rule => Rule.required()
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            description: 'This will generate the routes on the front-end and needs to be set',
            validation: Rule => Rule.required(),
            options: {
                source: 'title',
                maxLength: 200,
                slugify: input => input
                .toLowerCase()
                .replace(/\s+/g, '-')
                .slice(0, 200)
            }
        }
    ]
}