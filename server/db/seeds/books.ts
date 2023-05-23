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
      status: 'unread',
      rating: 0,
      description: '',
      completed: 0,
    },
    {
      id: 2,
      title: 'A Guide to the Good Life: The Ancient Art of Stoic Joy',
      author: 'William Irvine',
      genre: 'non-fiction',
      status: 'reading',
      rating: 4,
      description:
        'It&apos;s a practical and accessible book that explores Stoic philosophy, offering readers insights and strategies for leading a fulfilled and virtuous life. Through engaging anecdotes and practical exercises, Irvine presents a modern interpretation of Stoicism, emphasizing the importance of cultivating inner virtues, resilience, and a sense of purpose in navigating life&apos;s challenges.',
      completed: 0,
    },
    {
      id: 3,
      title: 'This Is Happiness',
      author: 'Niall Williams',
      genre: 'non-fiction',
      status: 'unread',
      rating: 0,
      description: '',
      completed: 0,
    },
    {
      id: 4,
      title: 'The School that Escaped the Nazis',
      author: 'Deborah Cadbury',
      genre: 'non-fiction',
      status: 'reading',
      rating: 4.5,
      description:
        'This a compelling and remarkable true story that recounts the efforts of a Jewish school in Berlin, Germany, to save its students from the clutches of the Nazis during World War II. This book highlights the courage, determination, and ingenuity of the school&apos;s teachers and staff who orchestrated a daring escape to ensure the safety and education of their students in the face of immense danger and persecution. It sheds light on the indomitable spirit and resilience of those who refused to let darkness prevail, showcasing the power of education and the human will to overcome adversity.',
      completed: 0,
    },
    {
      id: 5,
      title: 'Hitler: Ascent, 1889-1939',
      author: 'Volker Ullrich',
      genre: 'non-fiction',
      status: 'reading',
      rating: 5,
      description:
        'This book is a concise and comprehensive biography that traces Adolf Hitler&apos;s journey from his humble beginnings to his rise as the leader of Nazi Germany. This book explores the influential factors, political climate, and personal experiences that shaped Hitler&apos;s worldview, leading to his radical ideologies and the devastating consequences of his reign. It offers valuable insights into the early life and political ascent of one of history&apos;s most notorious figures.',
      completed: 0,
    },
    {
      id: 6,
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      genre: 'non-fiction',
      status: 'unread',
      rating: 0,
      description: '',
      completed: 0,
    },
    {
      id: 7,
      title: 'Stalingrad',
      author: 'Anthony Beevor',
      genre: 'non-fiction',
      status: 'unread',
      rating: 0,
      description: '',
      completed: 0,
    },
    {
      id: 8,
      title: 'Why We Sleep: The New Science of Sleep and Dreams',
      author: 'Matthew Walker',
      genre: 'non-fiction',
      status: 'reading',
      rating: 0,
      description:
        'This book goes into Matthew Walker&apos;s exploration of the significance of sleep, drawing on the latest research to reveal its crucial role in our physical and mental well-being. The book emphasizes the importance of prioritizing and optimizing our sleep habits for improved memory, emotional balance, creativity, and overall health.',
      completed: 0,
    },
    {
      id: 9,
      title:
        'The Righteous Mind: Why Good People Are Divided by Politics and Religion',
      author: 'Jonathan Haidt',
      genre: 'non-fiction',
      status: 'unread',
      rating: 0,
      description: '',
      completed: 0,
    },
    {
      id: 10,
      title: 'Istanbul: A Tale of Three Cities',
      author: 'Bettany Hughes',
      genre: 'non-fiction',
      status: 'reading',
      rating: 0,
      description:
        'This book delves into the rich history and cultural tapestry of Istanbul. In this book, the author delves into the city&apos;s fascinating evolution as Byzantium, Constantinople, and Istanbul, chronicling its rise and fall through the centuries. Through vivid storytelling and meticulous research, the book unveils the layers of Istanbul&apos;s past, its diverse influences, and its enduring significance as a bridge between East and West.',
      completed: 0,
    },
    {
      id: 11,
      title: '61 Hours: Jack Reacher 14',
      author: 'Lee Child',
      genre: 'fiction',
      status: 'read',
      rating: 4,
      description:
        'This gripping thriller by Lee Child follows the enigmatic protagonist, Jack Reacher. In this novel, Reacher finds himself trapped in a small town in South Dakota during a brutal winter storm. As the clock ticks down, he becomes embroiled in a high-stakes conflict involving a dangerous criminal network and a witness in need of protection. With tension and suspense building, Reacher must use his sharp instincts and formidable skills to survive and uncover the truth in a race against time.',
      completed: 2023,
    },
    {
      id: 12,
      title: 'Empire of Pain: The Secret History of the Sackler Dynasty',
      author: 'Patrick Radden Keefe',
      genre: 'non-fiction',
      status: 'read',
      rating: 5,
      description:
        'Patrick Keefe&apos;s book is a revealing and unsettling exposé that uncovers the controversial legacy of the Sackler family, the founders of Purdue Pharma, the manufacturer of OxyContin. This meticulously researched book delves into the intricate web of deceptive marketing tactics, corporate greed, and the devastating impact of the opioid crisis, shedding light on the personal and societal consequences of their actions.',
      completed: 2023,
    },
    {
      id: 13,
      title: 'Lady Chatterleys Lover',
      author: 'Lydia West',
      genre: 'fiction',
      status: 'unread',
      rating: 5,
      description: '',
      completed: 0,
    },
    {
      id: 14,
      title: 'A Gentleman in Moscow',
      author: 'Amor Towles',
      genre: 'fiction',
      status: 'reading',
      rating: 0,
      description:
        'This is an enchanting novel that follows the life of Count Alexander Rostov, who is sentenced to house arrest in a luxury hotel in Moscow during the tumultuous years of the Russian Revolution. Confined to the hotel&apos;s premises, the Count navigates his restricted existence with elegance and grace, forming unexpected friendships and experiencing moments of love and purpose. This captivating tale explores themes of resilience, human connection, and the indomitable spirit that can flourish even in the face of confinement and adversity.',
      completed: 0,
    },
    {
      id: 15,
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      genre: 'fiction',
      status: 'reading',
      rating: 0,
      description:
        'Charlotte Brontë&apos;s classic novel Jane Eyre follows the life of the titular character, Jane Eyre. The story takes us through Jane&apos;s challenging upbringing in a harsh orphanage to her experiences as a governess at Thornfield Hall, where she develops a complex relationship with the brooding and enigmatic Mr. Rochester. Through trials, secrets, and self-discovery, Jane navigates themes of love, independence, and societal constraints, ultimately finding her own voice and happiness in a world that seeks to confine her.',
      completed: 0,
    },
  ])
}

export { seed }
