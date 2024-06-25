import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import movie from './movie.js';

async function main() {
  // Create Users
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      name: 'User One',
      password: 'password1',
    },
  });

  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: 'adminpassword',
      isAdmin: true,
    },
  });

  // Create Movies
  const movie1 = await prisma.movie.create({
    data: {
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      releaseDate: new Date('2010-07-16'),
      genre: 'Sci-Fi',
      rating: 8.8,
      duration: 148,
      image: 'https://example.com/inception.jpg',
    },
  });

  const movie2 = await prisma.movie.create({
    data: {
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of his reality.',
      releaseDate: new Date('1999-03-31'),
      genre: 'Action',
      rating: 8.7,
      duration: 136,
      image: 'https://example.com/matrix.jpg',
    },
  });

  for (let m of movie.slice(2)) {
    await prisma.movie.create({
      data: m,
    });
  }

  // Create MovieList
  const movieList1 = await prisma.movieList.create({
    data: {
      name: 'Sci-Fi Favorites',
      user: {
        connect: {
          id: user1.id,
        },
      },
    },
  });

  // Create MovieListItems
  await prisma.movieListItem.create({
    data: {
      movieList: {
        connect: {
          id: movieList1.id,
        },
      },
      movie: {
        connect: {
          id: movie1.id,
        },
      },
    },
  });

  await prisma.movieListItem.create({
    data: {
      movieList: {
        connect: {
          id: movieList1.id,
        },
      },
      movie: {
        connect: {
          id: movie2.id,
        },
      },
    },
  });

  // Create Reviews
  await prisma.review.create({
    data: {
      rating: 5,
      comment: 'Amazing movie!',
      user: {
        connect: {
          id: user1.id,
        },
      },
      movie: {
        connect: {
          id: movie1.id,
        },
      },
    },
  });

  await prisma.review.create({
    data: {
      rating: 4,
      comment: 'Great action scenes!',
      user: {
        connect: {
          id: user1.id,
        },
      },
      movie: {
        connect: {
          id: movie2.id,
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
