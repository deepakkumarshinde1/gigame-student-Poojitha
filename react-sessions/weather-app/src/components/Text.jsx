import { Helmet } from "react-helmet";

export default function Text(props) {
  return (
    <>
      <Helmet>
        <title>About ESO | Discover Our Mission and Team</title>
        <meta
          name="description"
          content="Learn more about ESO — our journey, mission, and the team behind the immersive online experience enjoyed by millions worldwide."
        />
        <meta
          name="keywords"
          content="About ESO, ESO mission, ESO team, our story, company background, Elder Scrolls Online, online RPG creators"
        />
        <meta name="author" content="ESO Team" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.your-esosite.com/about.html" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.your-esosite.com/about.html"
        />
        <meta
          property="og:title"
          content="About ESO | Discover Our Mission and Team"
        />
        <meta
          property="og:description"
          content="Explore the vision and values behind ESO. Meet the people who bring the world of Tamriel to life."
        />
        <meta
          property="og:image"
          content="https://www.your-esosite.com/images/about-eso-preview.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content="https://www.your-esosite.com/about.html"
        />
        <meta
          name="twitter:title"
          content="About ESO | Discover Our Mission and Team"
        />
        <meta
          name="twitter:description"
          content="Get to know ESO — the game, the vision, and the creators. Explore what drives our community and story."
        />
        <meta
          name="twitter:image"
          content="https://www.your-esosite.com/images/about-eso-preview.jpg"
        />
      </Helmet>
      <h2>Hello {props.text}</h2>
    </>
  );
}
