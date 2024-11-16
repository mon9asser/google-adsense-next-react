import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  // Post data with slugs and new Unsplash images
  const posts = [
    {
      title: '10-Minute Morning Workout to Kickstart Your Day',
      slug: '10-minute-morning-workout',
      excerpt: 'Start your mornings with this quick and effective routine to boost energy and mood.',
      image: 'https://images.unsplash.com/photo-1731567387463-5d2457b04697?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Top 5 Superfoods for Muscle Recovery',
      slug: 'top-5-superfoods-for-muscle-recovery',
      excerpt: 'Discover the superfoods that aid in muscle recovery and help you perform better.',
      image: 'https://images.unsplash.com/photo-1731535025708-62177247ffe2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: '5 Common Gym Mistakes and How to Avoid Them',
      slug: 'common-gym-mistakes',
      excerpt: 'Learn about the most frequent gym errors and tips to stay on track.',
      image: 'https://images.unsplash.com/photo-1731308003135-713d58bd1947?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Best Cardio Workouts for Fat Loss',
      slug: 'best-cardio-workouts',
      excerpt: 'These cardio exercises are perfect for burning fat and improving heart health.',
      image: 'https://images.unsplash.com/photo-1731347910715-f8ccc7c2d104?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Stretching Techniques for Better Flexibility',
      slug: 'stretching-techniques',
      excerpt: 'Improve your range of motion with these essential stretching techniques.',
      image: 'https://images.unsplash.com/photo-1728963606465-590b0c43dc5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Benefits of Strength Training for Women',
      slug: 'strength-training-for-women',
      excerpt: 'Strength training isn’t just for men. Learn its amazing benefits for women.',
      image: 'https://images.unsplash.com/photo-1731432249483-2418feb8065e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            font-family: 'Roboto', sans-serif;
          }
          h1, h2, h4, h5 {
            font-weight: 700;
          }
          p {
            font-weight: 400;
          }
          .section {
            padding: 5rem 0;
          }
        `}</style>
      </Head>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            CodedTag
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner */}
      <div className="container section">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="mb-4">Welcome to CodedTag</h1>
            <p>
              Discover tips, tricks, and advice to improve your health and
              fitness. Whether you're a beginner or a fitness enthusiast, we've
              got something for everyone!
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1731626756205-ad1237670efc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
              alt="Fitness Banner"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Section Three */}
      <div className="container section">
        <h2 className="text-center mb-5">Latest Posts</h2>
        <div className="row g-4">
          {posts.map((post) => (
            <div className="col-md-4 text-center" key={post.slug}>
              <img
                src={post.image}
                alt={post.title}
                className="img-fluid mb-3 rounded"
              />
              <h5>
                <Link href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </h5>
              <p className="small">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light py-4 shadow-sm">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <a href="#" className="me-3 text-decoration-none text-dark">
                Contact Us
              </a>
              <a href="#" className="me-3 text-decoration-none text-dark">
                Privacy Policy
              </a>
              <a href="#" className="me-3 text-decoration-none text-dark">
                Terms & Conditions
              </a>
              <a href="#" className="text-decoration-none text-dark">
                About
              </a>
            </div>
          </div>
          <div className="row mt-3 text-center">
            <div className="col">
              <p className="small mb-0">&copy; 2024 CodedTag. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
