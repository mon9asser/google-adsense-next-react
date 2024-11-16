import { useRouter } from 'next/router';
import Head from 'next/head';

const posts = [
    {
      title: '10-Minute Morning Workout to Kickstart Your Day',
      slug: '10-minute-morning-workout',
      excerpt: 'Start your mornings with this quick and effective routine to boost energy and mood.',
      image: 'https://images.unsplash.com/photo-1731567387463-5d2457b04697?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
      content: `
        <section>
          <h2 class="mb-4">Why Morning Workouts are Beneficial</h2>
          <p>
            Starting your day with a workout boosts your metabolism, increases energy levels, 
            and sets a positive tone for the rest of the day. Morning workouts are known to enhance mental clarity, making you feel sharper throughout the day. 
            Plus, they help reduce stress by releasing endorphins early on.
          </p>
          <p>
            If you’re busy juggling work, family, and personal time, squeezing in a morning workout ensures that fitness doesn’t take a backseat. 
            A consistent routine also helps regulate your sleep patterns, ensuring you wake up refreshed.
          </p>
        </section>
        <!-- More sections -->
      `,
    },
    {
      title: 'Top 5 Superfoods for Muscle Recovery',
      slug: 'top-5-superfoods-for-muscle-recovery',
      excerpt: 'Discover the superfoods that aid in muscle recovery and help you perform better.',
      image: 'https://images.unsplash.com/photo-1731535025708-62177247ffe2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D',
      content: `
        <section>
          <h2 class="mb-4">Why Muscle Recovery Matters</h2>
          <p>
            Muscle recovery is a crucial part of any fitness routine. Without proper recovery, your muscles may feel sore and weak, hindering your progress. 
            Incorporating nutrient-rich superfoods into your diet can speed up the recovery process and improve performance.
          </p>
        </section>
        <!-- More sections -->
      `,
    },
    {
      title: '5 Common Gym Mistakes and How to Avoid Them',
      slug: 'common-gym-mistakes',
      excerpt: 'Learn about the most frequent gym errors and tips to stay on track.',
      image: 'https://images.unsplash.com/photo-1731308003135-713d58bd1947?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
      content: `
        <section>
          <h2 class="mb-4">Introduction to Gym Mistakes</h2>
          <p>
            The gym can be an intimidating place for beginners and even seasoned fitness enthusiasts. Understanding the common pitfalls can save you time, prevent injuries, and help you achieve your goals faster.
          </p>
        </section>
        <!-- More sections -->
      `,
    },
    {
      title: 'Best Cardio Workouts for Fat Loss',
      slug: 'best-cardio-workouts',
      excerpt: 'These cardio exercises are perfect for burning fat and improving heart health.',
      image: 'https://images.unsplash.com/photo-1731347910715-f8ccc7c2d104?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D',
      content: `
        <section>
          <h2 class="mb-4">Why Cardio is Key</h2>
          <p>
            Cardio workouts are among the most effective exercises for fat loss. They burn calories, improve cardiovascular health, and boost overall stamina.
          </p>
        </section>
        <!-- More sections -->
      `,
    },
    {
      title: 'Stretching Techniques for Better Flexibility',
      slug: 'stretching-techniques',
      excerpt: 'Improve your range of motion with these essential stretching techniques.',
      image: 'https://images.unsplash.com/photo-1728963606465-590b0c43dc5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
      content: `
        <section>
          <h2 class="mb-4">Why Stretching is Essential</h2>
          <p>
            Stretching improves flexibility, reduces stiffness, and prevents injury. It also promotes better posture and aids in muscle recovery.
          </p>
        </section>
        <section>
          <h2 class="mb-4">Essential Stretching Techniques</h2>
          <ul class="list-group list-group-flush mb-4">
            <li class="list-group-item"><strong>Hamstring Stretch:</strong> Great for relieving tightness in your legs.</li>
            <li class="list-group-item"><strong>Child’s Pose:</strong> Opens your back and stretches the spine.</li>
            <li class="list-group-item"><strong>Cat-Cow Stretch:</strong> Improves spinal flexibility and posture.</li>
            <li class="list-group-item"><strong>Quadriceps Stretch:</strong> Reduces stiffness in the front of your thighs.</li>
          </ul>
        </section>
      `,
    },
    {
      title: 'Benefits of Strength Training for Women',
      slug: 'strength-training-for-women',
      excerpt: 'Strength training isn’t just for men. Learn its amazing benefits for women.',
      image: 'https://images.unsplash.com/photo-1731432249483-2418feb8065e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D',
      content: `
        <section>
          <h2 class="mb-4">Strength Training Myths Debunked</h2>
          <p>
            Many women shy away from strength training due to myths about "bulking up." However, strength training builds lean muscle, increases metabolism, and boosts confidence.
          </p>
        </section>
        <section>
          <h2 class="mb-4">Top Benefits of Strength Training</h2>
          <ul class="list-group list-group-flush mb-4">
            <li class="list-group-item"><strong>Stronger Bones:</strong> Strength training increases bone density and reduces osteoporosis risk.</li>
            <li class="list-group-item"><strong>Improved Metabolism:</strong> Muscle burns more calories at rest than fat.</li>
            <li class="list-group-item"><strong>Better Balance:</strong> Strength training improves stability and coordination.</li>
            <li class="list-group-item"><strong>Increased Strength:</strong> Everyday tasks become easier with stronger muscles.</li>
          </ul>
        </section>
      `,
    },
  ];
  
  

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find((post) => post.slug === params.slug);
  return { props: { post } };
}

export default function PostPage({ post }) {
  const router = useRouter();

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
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
      <div className="container-fluid bg-light py-5">
        <div className="container text-center">
          <img src={post.image} alt={post.title} className="img-fluid rounded mb-4" />
          <h1>{post.title}</h1>
          <p className="text-muted">{post.excerpt}</p>
        </div>
      </div>

      {/* Post Content */}
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light py-4">
        <div className="container text-center">
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
          <div className="mt-3">
            <p className="small">&copy; 2024 CodedTag. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
