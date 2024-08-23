export default eventHandler(async (event) => {
    const { title } = await readBody(event)
  
    const album = await useDrizzle().insert(tables.albums).values({
      title,
      createdAt: new Date()
    }).returning().get()
  
    return album
  })
  