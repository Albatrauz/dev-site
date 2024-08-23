import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const albums = sqliteTable('albums', {
  album_id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('name').notNull(),
  description: text('name').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})