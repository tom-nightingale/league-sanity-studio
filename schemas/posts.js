export default {
    title: "Posts",
    name: 'post',
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: 'Post Date',
            name: 'postDate',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY',
                calendarTodayLabel: 'Today'
            },
        },
        {
            title: "Content",
            name: "content",
            type: "text",
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