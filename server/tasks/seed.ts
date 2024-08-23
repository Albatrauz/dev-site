export default defineTask({
    meta: {
      name: 'db:seed',
      description: 'Run database seed task'
    },
    async run() {
      console.log('Running DB seed task...')
      const users = [
        {
            title: 'Album 2',
            description: 'Tweede album',
            createdAt: new Date(),
        },
        {   
            title: 'Album 1',
            description: 'Eerste album',
            createdAt: new Date(),
        }
      ]
      await useDrizzle().insert(tables.albums).values(users)
      return { result: users }
    }
  })
  