import { Knex } from 'knex'

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const seed = async function (knex: Knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    {
      id: 1,
      title: 'A History of Western Philosophy',
      author: 'Bertrand Russell',
      genre: 'non-fiction',
    },
    {
      id: 2,
      title: 'A Guide to the Good Life: The Ancient Art of Stoic Joy',
      author: 'William Irvine',
      genre: 'non-fiction',
    },
    {
      id: 3,
      title: 'This Is Happiness',
      author: 'Niall Williams',
      genre: 'non-fiction',
    },
    {
      id: 4,
      title: 'The School that Escaped the Nazis',
      author: 'Deborah Cadbury',
      genre: 'non-fiction',
    },
    {
      id: 5,
      title: 'Hitler: Ascent, 1889-1939',
      author: 'Volker Ullrich',
      genre: 'non-fiction',
    },
    {
      id: 6,
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      genre: 'non-fiction',
    },
    {
      id: 7,
      title: 'Stalingrad',
      author: 'Anthony Beevor',
      genre: 'non-fiction',
    },
    {
      id: 8,
      title: 'Why We Sleep: The New Science of Sleep and Dreams',
      author: 'Matthew Walker',
      genre: 'non-fiction',
    },
    {
      id: 9,
      title:
        'The Righteous Mind: Why Good People Are Divided by Politics and Religion',
      author: 'Jonathan Haidt',
      genre: 'non-fiction',
    },
    {
      id: 10,
      title: 'Istanbul: A Tale of Three Cities',
      author: 'Bettany Hughes',
      genre: 'non-fiction',
    },
    {
      id: 11,
      title: '61 Hours: Jack Reacher 14',
      author: 'Lee Child',
      genre: 'fiction',
    },
    {
      id: 12,
      title: 'Empire of Pain: The Secret History of the Sackler Dynasty',
      author: 'Patrick Radden Keefe',
      genre: 'non-fiction',
    },
    {
      id: 13,
      title: 'Lady Chatterleys Lover',
      author: 'Lydia West',
      genre: 'fiction',
    },
    {
      id: 14,
      title: 'A Gentleman in Moscow',
      author: 'Amor Towles',
      genre: 'fiction',
    },
    {
      id: 15,
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      genre: 'fiction',
    },
  ])
}

export { seed }
