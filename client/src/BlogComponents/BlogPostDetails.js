import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const BlogPostDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const title = queryParams.get('title');
  const imageUrl = queryParams.get('imageUrl');

  const username = localStorage.getItem('username');

  const initialUpvotes = parseInt(localStorage.getItem(`upvotes-${id}`)) || 0;
  const initialDownvotes = parseInt(localStorage.getItem(`downvotes-${id}`)) || 0;

  const userUpvoted = localStorage.getItem(`upvoted-${id}-${username}`) === 'true';
  const userDownvoted = localStorage.getItem(`downvoted-${id}-${username}`) === 'true';

  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);
  const [hasUpvoted, setHasUpvoted] = useState(userUpvoted);
  const [hasDownvoted, setHasDownvoted] = useState(userDownvoted);

  const handleUpvote = () => {
    if (!hasUpvoted) {
      setUpvotes(upvotes + 1);
      setHasUpvoted(true);

      if (hasDownvoted) {
        setDownvotes(downvotes - 1);
        setHasDownvoted(false);
        localStorage.removeItem(`downvoted-${id}-${username}`);
      }

      localStorage.setItem(`upvoted-${id}-${username}`, 'true');
    }
  };

  const handleDownvote = () => {
    if (!hasDownvoted) {
      setDownvotes(downvotes + 1);
      setHasDownvoted(true);

      if (hasUpvoted) {
        setUpvotes(upvotes - 1);
        setHasUpvoted(false);
        localStorage.removeItem(`upvoted-${id}-${username}`);
      }

      localStorage.setItem(`downvoted-${id}-${username}`, 'true');
    }
  };

  useEffect(() => {
    localStorage.setItem(`upvotes-${id}`, upvotes.toString());
    localStorage.setItem(`downvotes-${id}`, downvotes.toString());
  }, [upvotes, downvotes, id]);
  const blogPosts = [
    {
      title: 'Welcome!',
      content: 'This is the longer content for the "Welcome!" blog post. It contains more details about the topic.',
    },
    {
      title: 'Practice, practice, practice!',
      content: 'This is the longer content for the "Practice, practice, practice!" blog post. It provides in-depth information about practicing.'
    },
    {
      title: 'Sheet Music',
      content: 'This is the longer content for the "Sheet Music" blog post. It contains more details about the topic.'
    },
    {
      title: 'Singing Techniques',
      content: 'This is the longer content for the "Singing Techniques" blog post. It contains more details about the topic.'
    },
    {
      title: 'Vocal Pitches 101',
      content: 'This is the longer content for the "Vocal Pitches 101" blog post. It contains more details about the topic.'
    },
    {
      title: 'Rhythmic Pulse',
      content: 'This is the longer content for the "Rhythmic Pulse" blog post. It contains more details about the topic.'
    },
    {
      title: 'MusicTech',
      content: 'This is the longer content for the "MusicTech" blog post. It contains more details about the topic.'
    },
    {
      title: 'Piano Time',
      content: 'This is the longer content for the "Piano Time" blog post. It contains more details about the topic.'
    },
  ];
  const selectedBlogPost = blogPosts.find(post => post.title === title);

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
  };

  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  };

 
  useEffect(() => {
    localStorage.setItem(`upvotes-${title}`, upvotes.toString());
    localStorage.setItem(`downvotes-${title}`, downvotes.toString());
  }, [upvotes, title, downvotes]);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <img src={imageUrl} alt="Blog Post" style={imageStyle} />
      {selectedBlogPost && <p>{selectedBlogPost.content}</p>}

      {/* Display vote counts and buttons */}
      <div>
        <button onClick={handleUpvote} disabled={hasUpvoted}>
          <FontAwesomeIcon icon={faThumbsUp} /> {/* Upvote icon */}
        </button>
        <span>{upvotes}</span>
        <button onClick={handleDownvote} disabled={hasDownvoted}>
          <FontAwesomeIcon icon={faThumbsDown} /> {/* Downvote icon */}
        </button>
        <span>{downvotes}</span>
      </div>
    </div>
  );
};

export default BlogPostDetails;
