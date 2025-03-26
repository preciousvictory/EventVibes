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

export type events = {
  name: string,
  organization: string,
  favourite: number,
  image: string
}

export type categories = {
  title: string,
  events: events[]
}

export const categories = [
  {
    title: "Entertainments",
    events: [
      {
        name: "Karaoke Nights",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image1.jpeg'
      },
      {
        name: "Karaoke Nights",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image4.jpeg'
      },
      {
        name: "Karaoke Nights",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image4.jpeg'
      },
      {
        name: "Karaoke Nights",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image2.jpeg'
      },
      {
        name: "GDG Tech Fest",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image3.jpeg'
      },
      {
        name: "Karaoke Nights",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image4.jpeg'
      },
    ]
  },
  {
    title: "Tech Meetups", events: [
      {
        name: "FlutterBytes",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image1.jpeg'
      },
      {
        name: "Sui Hackathon",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image2.jpeg'
      },
      {
        name: "GDG Tech Fest",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image3.jpeg'
      },
      {
        name: "Karaoke Nights",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image4.jpeg'
      },
      {
        name: "Karaoke Nights",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image4.jpeg'
      },
      {
        name: "Networking Session",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image4.jpeg'
      },
    ]
  },
  {
    title: "Lifestyles",
    events: [
      {
        name: "Karaoke Nights",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image1.jpeg'
      },
      {
        name: "Karaoke Nights",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image2.jpeg'
      },
      {
        name: "Karaoke Nights",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image3.jpeg'
      },
      {
        name: "Karaoke Nights",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image4.jpeg'
      },
      {
        name: "Karaoke Nights",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image4.jpeg'
      },
      {
        name: "Karaoke Nights",
        organization: "Sui On Campus",
        favourite: 43,
        image: 'images/image4.jpeg'
      },
    ]
  },
];

export const trendingEvents = [
  {
    name: "Karaoke Nights",
    organization: "Sui On Campus",
    favourite: 43,
    image: 'images/image1.jpeg'
  },
  {
    name: "Karaoke Nights",
    organization: "Sui On Campus",
    favourite: 43,
    image: 'images/image2.jpeg'
  },
  {
    name: "Karaoke Nights",
    organization: "Sui On Campus",
    favourite: 43,
    image: 'images/image3.jpeg'
  },
  {
    name: "Karaoke Nights",
    organization: "Sui On Campus",
    favourite: 43,
    image: 'images/image4.jpeg'
  },
  {
    name: "Karaoke Nights",
    organization: "Sui On Campus",
    favourite: 43,
    image: 'images/image4.jpeg'
  },
]
