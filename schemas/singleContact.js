export default {
    title: 'Contact Page',
    name: 'contact',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Hero Image',
            name: 'heroImage',
            type: 'image',
            validation: Rule => Rule.required()
        },
        {
            title: 'Hero Heading',
            name: 'heroHeading',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Hero Blurb',
            name: 'heroBlurb',
            type: 'text',
            validation: Rule => Rule.required()
        },
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title
            }
        }
    }
}