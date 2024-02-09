export default {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
        name:'author',
        title: 'Author Name',
        type: 'string'
    },
    {
        name:'authorProfile',
        title: 'Author Profile',
        type: 'image',
    },
    {
        name: 'reviewDescription',
        title: 'Review desciption',
        type: 'text'
    }
  ]
}
