export default {
    title: 'Home Page',
    name: 'home',
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
        {
            title: 'Who We Are Heading',
            name: 'whoWeAreHeading',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Who We Are Blurb',
            name: 'whoWeAreBlurb',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            title: 'What We Do Heading',
            name: 'whatWeDoHeading',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'What We Do Subheading',
            name: 'whatWeDoSubheading',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'What We Do Blurb',
            name: 'whatWeDoBlurb',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            title: 'How We Help Heading',
            name: 'howWeHelpHeading',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'How We Help Blurb',
            name: 'howWeHelpBlurb',
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