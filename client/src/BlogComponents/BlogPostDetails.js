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
    width: '90%',
    padding: '40px',
    margin: '40px auto',
    textAlign: 'center',
    backgroundColor: '#F1F0E8',
    boxShadow: '0px 0px 10px rgba(204, 200, 170, 1)',
    borderRadius: '8px'
  ,
  };
  
  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto', // Center the image horizontally
    marginBottom: '5%',
    marginTop: '4%',
    borderRadius: '8px',
    alignSelf: 'center',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',

  };
  
  const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    marginTop: '5%',
    color: '#979D92',
    textAlign: 'center',
    textShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  };

  const voteButtonStyle = {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    color: '#333', // Change the color to your preference
    margin: '0 10px', // Add horizontal spacing between the buttons
  };
  
  // Styles for the icons
  const iconStyle1 = {
    marginRight: '8px', // Add some spacing between the icon and text
    color:'#9EB384'
  };
  const iconStyle2 = {
    marginRight: '8px', // Add some spacing between the icon and text
    color:'#E19898'
  }


  // Functions to handle upvoting and downvoting

  const voteContainerStyle = {
    display: 'flex',
    alignItems: 'center', // Align items vertically in the center
    marginRight: '10px', // Add some spacing between the buttons and counts
    flexDirection: 'row', // Arrange items in a row (side by side)
  };
  
  

  // Update localStorage with the latest upvotes and downvotes counts whenever they change
  useEffect(() => {
    localStorage.setItem(`upvotes-${title}`, upvotes.toString());
    localStorage.setItem(`downvotes-${title}`, downvotes.toString());
  }, [upvotes, title, downvotes]);

  return (
    <div style={containerStyle}>
      <h1 className="font-reborn text-9xl" style={titleStyle}>
        {title}
      </h1>
      <img src={imageUrl} alt="Blog Post" style={imageStyle} />
      {selectedBlogPost && (
        <p className="text-1xl font-CG_Reg text-teal-900">
          {selectedBlogPost.content}
        </p>
      )}
  
      {/* Display vote counts and buttons */}
      <div>
        <div style={voteContainerStyle}>
          <button
            className="font-CG_Reg"
            style={voteButtonStyle}
            onClick={handleUpvote}
            disabled={hasUpvoted}
          >
            <FontAwesomeIcon icon={faThumbsUp} style={iconStyle1} />
          </button>
          <span className="font-CG_Reg">{upvotes}</span>
        </div>
        <div style={voteContainerStyle}>
          <button
            className="font-CG_Reg"
            style={voteButtonStyle}
            onClick={handleDownvote}
            disabled={hasDownvoted}
          >
            <FontAwesomeIcon className='' icon={faThumbsDown} style={iconStyle2} />
          </button>
          <span className="font-CG_Reg">{downvotes}</span>
        </div>
      </div>
    </div>
  );
  
};

export default BlogPostDetails;
