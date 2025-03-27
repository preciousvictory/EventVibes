export const featuredMedia = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Tech Conference Keynote',
    likes: 124,
    comments: 23,
    eventId: '1',
    eventName: 'DevCon 2023',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Networking Session',
    likes: 88,
    comments: 12,
    eventId: '2',
    eventName: 'Blockchain Summit',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    title: 'Panel Discussion',
    likes: 56,
    comments: 8,
    eventId: '1',
    eventName: 'DevCon 2023',
  },
];

export type PhotoView = {
  id: string,
  creator: string,
  name: string,
  image: string,
  time_takes: Date,
  Location: string,
  total_likes: number
}

export type ImageView = {
  event_profile: string,
  event_banner: string,
  event_POAP: string,
}

export type EventView = {
  id: string,
  creator: string,
  time: Date,
  location: string,
  name: string,
  description: string,
  eventImages: ImageView,
  total_Images: number,
  total_likes: number
}

export type categoriesProps = {
  title: string,
  events: EventView[]
}

export const trendingEvents: EventView[] = [
  {
    id: '1',
    creator: "Sui On Campus",
    time: new Date('23rd April, 2024'),
    location: 'San Francisco, CA',
    name: "Karaoke Nights",
    description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
    eventImages: {
      event_profile: 'images/image4.jpeg',
      event_banner: 'images/banner.jpeg',
      event_POAP: 'images/image4.jpeg',
    },
    total_Images: 30,
    total_likes: 45
  },
  {
    id: '2',
    creator: "Sui On Campus",
    time: new Date('23rd April, 2024'),
    location: 'San Francisco, CA',
    name: "FlutterBytes",
    description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
    eventImages: {
      event_profile: 'images/image4.jpeg',
      event_banner: 'images/banner.jpeg',
      event_POAP: 'images/image4.jpeg',
    },
    total_Images: 30,
    total_likes: 45
  },
  {
    id: '3',
    creator: "Sui On Campus",
    time: new Date('23rd April, 2024'),
    location: 'San Francisco, CA',
    name: "Sui Hackathon",
    description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
    eventImages: {
      event_profile: 'images/image2.jpeg',
      event_banner: 'images/banner.jpeg',
      event_POAP: 'images/image2.jpeg',
    },
    total_Images: 30,
    total_likes: 45
  },
  {
    id: '4',
    creator: "Sui On Campus",
    time: new Date('23rd April, 2024'),
    location: 'San Francisco, CA',
    name: "GDG Tech Fest",
    description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
    eventImages: {
      event_profile: 'images/image1.jpeg',
      event_banner: 'images/banner.jpeg',
      event_POAP: 'images/image1.jpeg',
    },
    total_Images: 30,
    total_likes: 45
  },
  {
    id: '5',
    creator: "Sui On Campus",
    time: new Date('23rd April, 2024'),
    location: 'San Francisco, CA',
    name: "GDG Tech Fest",
    description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
    eventImages: {
      event_profile: 'images/image2.jpeg',
      event_banner: 'images/banner.jpeg',
      event_POAP: 'images/image2.jpeg',
    },
    total_Images: 30,
    total_likes: 45
  },
  {
    id: '6',
    creator: "Sui On Campus",
    time: new Date('23rd April, 2024'),
    location: 'San Francisco, CA',
    name: "GDG Tech Fest",
    description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
    eventImages: {
      event_profile: 'images/image3.jpeg',
      event_banner: 'images/banner.jpeg',
      event_POAP: 'images/image3.jpeg',
    },
    total_Images: 30,
    total_likes: 45
  },
]

export const categories: categoriesProps[] = [
  {
    title: "Entertainments",
    events: [
      {
        id: '1',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Karaoke Nights",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image4.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image4.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '2',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Karaoke Nights",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image4.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image4.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '3',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Karaoke Nights",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image2.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image2.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '4',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Karaoke Nights",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image1.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image1.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '5',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Karaoke Nights",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image2.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image2.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
    ]
  },
  {
    title: "Conferences",
    events: [
      {
        id: '1',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Karaoke Nights",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image4.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image4.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '2',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "FlutterBytes",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image4.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image4.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '3',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Sui Hackathon",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image2.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image2.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '4',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "GDG Tech Fest",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image1.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image1.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '5',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "GDG Tech Fest",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image2.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image2.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '6',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "GDG Tech Fest",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image3.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image3.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
    ]
  },
  {
    title: "Sports & Fitness",
    events: [
      {
        id: '1',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Karaoke Nights",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image4.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image4.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '2',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "FlutterBytes",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image4.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image4.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '3',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "Sui Hackathon",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image2.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image2.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '4',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "GDG Tech Fest",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image1.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image1.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '5',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "GDG Tech Fest",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image2.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image2.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
      {
        id: '6',
        creator: "Sui On Campus",
        time: new Date('23rd April, 2024'),
        location: 'San Francisco, CA',
        name: "GDG Tech Fest",
        description: 'The premier developer conference for blockchain and web3 technologies, featuring workshops, keynotes, and networking opportunities.',
        eventImages: {
          event_profile: 'images/image3.jpeg',
          event_banner: 'images/banner.jpeg',
          event_POAP: 'images/image3.jpeg',
        },
        total_Images: 30,
        total_likes: 45
      },
    ]
  },
]


export const photos: PhotoView[] = [
  {
    id: "1",
    creator: "Precious Victory",
    name: "Image 1",
    image: "images/image1.jpeg",
    time_takes: new Date('23rd April, 2024'),
    Location: 'San Francisco, CA',
    total_likes: 49
  },
  {
    id: "2",
    creator: "Umar Faruq",
    name: "Image 2",
    image: "images/image3.jpeg",
    time_takes: new Date('23rd April, 2024'),
    Location: 'San Francisco, CA',
    total_likes: 49
  },
  {
    id: "2",
    creator: "Joshua Obimba",
    name: "Image 3",
    image: "images/image2.jpeg",
    time_takes: new Date('23rd April, 2024'),
    Location: 'San Francisco, CA',
    total_likes: 49
  },
  {
    id: "4",
    creator: "Gospel",
    name: "Image 4",
    image: "images/image4.jpeg",
    time_takes: new Date('23rd April, 2024'),
    Location: 'San Francisco, CA',
    total_likes: 49
  },
]