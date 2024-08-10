export default eventHandler(async () => {
    const db = hubDatabase();

    await db.exec('CREATE TABLE IF NOT EXISTS albums (album_id INTEGER PRIMARY KEY, title VARCHAR(255), description TEXT, created_at INTEGER)')

    const result = await db.prepare('SELECT * FROM albums ORDER BY created_at DESC').all()

    return result
})