//
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import danceblog from '../assets/danceblog.png';
import happyblog from '../assets/happyblog.png';

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
  const score = upvotes - downvotes;

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
      content: (
        <div>
  <h1>Welcome to Resonate!</h1>
  <div style={{ margin: '3% 0' }}>
          </div>

  <p>
    Are you a music enthusiast looking for a place to connect, create, and celebrate the power of music? Look no further than Resonate, your one-stop destination for all things musical! Whether you're a songwriter, a performer, or just someone who loves to jam, Resonate has something special for you.
  </p>
  <div style={{ margin: '2% 0' }}>
          </div>

  
  <div className="features">
    <div className="feature">
      <h2>🔗 Connect</h2>
      <p>
        Our Connect page is where the magic happens. Connect with fellow music lovers, collaborate on projects, and build a network of like-minded individuals who share your passion for music. Discover new talent and create unforgettable musical experiences together.
      </p>
    </div>
    <div style={{ margin: '1% 0' }}>
          </div>

    <div className="feature">
      <h2>📝 Craft Lyrics</h2>
      <p>
        Stuck in a lyrical rut? Our lyric generator is here to help. Spark your creativity and let the words flow with our handy tool. Whether you're writing a love ballad or a rock anthem, you'll find inspiration at your fingertips.
      </p>
    </div>
    <div style={{ margin: '1% 0' }}>
          </div>

    <div className="feature">
      <h2>🎸 Explore Chords</h2>
      <p>
        Dive into the world of chords and harmonies with Resonate. Explore chord progressions, experiment with different sounds, and elevate your music to new heights. Whether you're a seasoned musician or a beginner, our chord resources have got you covered.
      </p>
    </div>
    <div style={{ margin: '1% 0' }}>
          </div>

    <div className="feature">
      <h2>📚 Dive into Blogs</h2>
      <p>
        Immerse yourself in the world of music with our blogs. From artist spotlights to industry insights and everything in between, our curated content is your gateway to all things musical. Stay informed, inspired, and in tune with the latest trends.
      </p>
    </div>
    <div style={{ margin: '1% 0' }}>
          </div>

    <div className="feature">
      <h2>🏆 Rise to the Challenge</h2>
      <p>
        Are you up for a challenge? Join our Album, Cover, and Lyric Challenges to showcase your talent and compete with fellow musicians. Show the world what you're made of and earn recognition for your musical prowess.
      </p>
    </div>
    <div style={{ margin: '3% 0' }}>
          </div>
  </div>
  <p>
    Resonate is more than just a platform; it's a community of passionate music lovers who understand the incredible power of music. So, whether you're here to connect, create, or simply celebrate the universal language of melodies, Resonate is here to amplify your musical journey.
  </p>
  <div style={{ margin: '1% 0' }}>
          </div>
  <p>
    Join us today and let's make beautiful music together! 🎶🌟
  </p>
</div>

      ),
    },
    {
      title: 'Practice, practice, practice!',
      content: (
        <div>
          <div>
            <p className="" style={{ textAlign: 'left' }}>
              "Practice makes perfect" is a saying we've all heard countless times, especially when it comes to mastering a skill or art form like singing or playing a musical instrument. However, today's tip challenges that conventional wisdom. Instead of striving for perfection, we should embrace the idea that practice makes progress. The journey of learning to sing or play an instrument is not about achieving flawless mastery from the start but rather about the beautiful melodies that can emerge from small, consistent steps along the way. In this article, we will explore why this perspective is not only more realistic but also more enjoyable and fulfilling.
            </p>
          </div>
          {/* Add some space here */}
          <div style={{ margin: '3% 0' }}>
          </div>
   
          <h2 className="font-bold underline" style={{ textAlign: 'left' }}>The Myth of Perfection</h2>
          <div style={{ margin: '1% 0' }}>
          </div>
   
          <div>
            <p style={{ textAlign: 'left' }}>
The pursuit of perfection can indeed be a double-edged sword. While setting high standards for ourselves can drive us to achieve excellence, when those standards become impossibly high, they transform from a source of motivation into a relentless burden. As the famous quote by Voltaire reminds us, "Don't let the perfect be the enemy of the good." This wisdom suggests that an unattainable pursuit of perfection can become an obstacle to our own growth and well-being. This dissatisfaction can breed frustration and disheartenment, eroding our self-esteem and motivation over time. Constantly striving for perfection can create a toxic cycle of anxiety and self-doubt. It's important to recognize that perfection is an elusive concept, and in many cases, it may not even exist. The fear of falling short of our impossibly high standards can paralyze us, preventing us from taking risks and pursuing new opportunities. We become so fixated on avoiding mistakes that we lose sight of the valuable lessons and growth that can come from them. Embracing a more balanced perspective, where we aim for excellence while accepting our imperfections, can lead to a healthier and more fulfilling life.


            </p>
          </div>
          <div style={{ margin: '1% 0' }}>
          </div>
          <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Embracing the Journey</h2>
          <div style={{ margin: '1% 0' }}>
          </div>
   
          <div>
            <p style={{ textAlign: 'left' }}>
Instead of fixating on perfection, let's embrace the journey of learning to sing or play an instrument. It's essential to recognize that even the most celebrated musicians and vocalists were once beginners who made mistakes and faced challenges. 'The journey of a thousand miles begins with a single step.' - Lao Tzu. Music, like any other skill, is a process of growth and development. In the world of music, the path to mastery is a remarkable one. Consider this statistic: According to a survey conducted by the National Association for Music Education, approximately 57% of students in the United States participate in some form of music education during their K-12 years. While this statistic reflects the widespread interest in music, it also underscores the fact that many of these students begin as novices. The journey from a beginner to a proficient musician or vocalist is a journey filled with learning, practice, and perseverance. Even the virtuosos who grace the world's grandest stages were once novices who grappled with the basics. They, too, took their first step into the world of music, perhaps feeling the same uncertainty and excitement that beginners do today.




            </p>
          </div>
          <div style={{ margin: '1% 0' }}>
          </div>
   
          <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Small, Consistent Steps</h2>
          <div style={{ margin: '1% 0' }}>
          </div>
   
          <div>
            <p style={{ textAlign: 'left' }}>
              Progress is made through small, consistent steps. Setting achievable goals for your musical practice can make a world of difference. Break down your learning into manageable chunks, focusing on specific techniques, scales, or pieces. Celebrate your achievements along the way, no matter how small they may seem. Each step forward brings you closer to your musical aspirations.
            </p>
          </div>
          <div style={{ margin: '1% 0' }}>
          </div>
   
          <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Learning from Mistakes</h2>
          <div style={{ margin: '1% 0' }}>
          </div>
   
          <div>
            <p style={{ textAlign: 'left' }}>
              Mistakes are an integral part of the learning process. Instead of fearing them, welcome them as valuable lessons. As Albert Einstein once said, "A person who never made a mistake never tried anything new." When you make a mistake while singing or playing an instrument, analyze what went wrong and how you can improve. Every mistake is an opportunity to refine your skills and become a better musician.
            </p>
          </div>
          <div style={{ margin: '1% 0' }}>
          </div>
   
          <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Patience and Persistence</h2>
          <div style={{ margin: '1% 0' }}>
          </div>
   
          <div>
            <p style={{ textAlign: 'left' }}>
              Learning music takes time, and progress may not always be linear. There will be days when you feel like you've taken a step back, but that's perfectly normal. As Beethoven once said, "To play a wrong note is insignificant; to play without passion is inexcusable." The key is to remain patient and persistent. Trust in your ability to improve over time, and don't be discouraged by temporary setbacks.
            </p>
          </div>
          <div style={{ margin: '1% 0' }}>
          </div>
   
          <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Enjoying the Music</h2>
          <div style={{ margin: '1% 0' }}>
          </div>
   
          <div>
            <p style={{ textAlign: 'left' }}>
              Ultimately, the purpose of learning to sing or play an instrument is to create and enjoy music. The joy of playing a beautiful melody or singing with emotion is a reward in itself. When you focus on the music's beauty rather than perfection, you'll find more satisfaction and fulfillment in your musical journey.
            </p>
          </div>
          <div style={{ margin: '1% 0' }}>
          </div>
   
          <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Conclusion</h2>
          <div style={{ margin: '1% 0' }}>
          </div>
   
          <div>
            <p style={{ textAlign: 'left' }}>
              In the pursuit of musical excellence, it's important to remember that perfection is not the goal. Instead, we should strive for progress and embrace the journey of learning to sing or play an instrument. By taking small, consistent steps, learning from mistakes, and maintaining patience and persistence, we can create beautiful melodies and find joy in the process. So, let go of the pressure to be perfect and start making progress one note at a time. 🌟
            </p>
          </div>
          <div style={{ margin: '3% 0' }}>
          </div>
        </div>
      ),
    },


    {
      title: 'Sheet Music',
      content: (
        <div>
        <div>
          <p className="" style={{ textAlign: 'left' }}>
            Learning to read sheet music is an essential skill for musicians. It provides a written language for translating musical ideas into sound. In this educational guide, we will explore the systematic process of learning to read sheet music, breaking it down into manageable steps to help you build a strong foundation in music notation.
          </p>
        </div>
        <div style={{ margin: '3% 0' }}>
        </div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Step 1: Understanding Musical Notes</h2>
        <div style={{ margin: '1% 0' }}>
        </div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            To begin, let's focus on the fundamental elements of sheet music: musical notes. There are seven basic notes in music: A, B, C, D, E, F, and G. These notes repeat throughout the musical alphabet. You'll encounter these notes on the musical staff, which consists of lines and spaces. Learning to recognize these notes and their positions on the staff is crucial.
          </p>
        </div>
        <div style={{ margin: '1% 0' }}>
        </div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Step 2: Grasping Rhythms</h2>
        <div style={{ margin: '1% 0' }}>
        </div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            Rhythms in sheet music are represented by various symbols, such as whole notes, half notes, quarter notes, and more. These symbols indicate the duration of each note and how they relate to each other in a musical piece. To master rhythms, you need to develop a solid sense of timing and the ability to count beats accurately.
          </p>
        </div>
        <div style={{ margin: '1% 0' }}>
        </div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Step 3: Combining Notes and Rhythms</h2>
        <div style={{ margin: '1% 0' }}>
        </div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            Now that you understand both notes and rhythms separately, it's time to bring them together. Sheet music uses these elements to create melodies and harmonies. Start by working on pieces with straightforward melodies and rhythms. Pay close attention to how the notes align with the rhythms in the music.
          </p>
        </div>
        <div style={{ margin: '1% 0' }}>
        </div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Step 4: Exploring Dynamics and Expressive Markings</h2>
        <div style={{ margin: '1% 0' }}>
        </div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            Sheet music contains more than just notes and rhythms; it also provides instructions for dynamics and expression. Dynamics indicate how loudly or softly to play a passage, while expressive markings like crescendos and diminuendos guide your interpretation of the music's emotional qualities.
          </p>
        </div>
        <div style={{ margin: '1% 0' }}>
        </div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Step 5: The Power of Consistent Practice</h2>
        <div style={{ margin: '1% 0' }}>
        </div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            Learning to read sheet music is a skill that requires consistent practice. Dedicate regular practice sessions to reading and playing or singing sheet music. Set achievable goals for yourself, and be patient as you progress. It's natural to face challenging pieces or concepts, but with dedication, you'll overcome them.
          </p>
        </div>
        <div style={{ margin: '1% 0' }}>
        </div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Conclusion</h2>
        <div style={{ margin: '1% 0' }}>
        </div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            Learning to read sheet music is a systematic process that involves understanding notes, rhythms, dynamics, and expressive markings. By taking it one step at a time and focusing on each element, you can build a strong foundation in music notation. Consistent practice is the key to success in your journey to becoming a proficient sheet music reader and musician. 🎵📚
          </p>
        </div>
        <div style={{ margin: '3% 0' }}>
        </div>
      </div>
    )
            },
    {
      title: 'Singing Techniques',
      content: (
        <div>
        <div>
          <p style={{ textAlign: 'left' }}>
            Singing is a beautiful form of expression, and mastering various singing techniques can greatly enhance your vocal prowess. Two fundamental components of singing are the head voice and chest voice. These distinct vocal registers are essential for achieving versatility and control in your singing. In this blog post, we will explore the differences between head voice and chest voice, the importance of transitioning between them, and provide tips for improving your vocal skills.
          </p>
        </div>
        <div style={{ margin: '3% 0' }}></div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Understanding Head Voice and Chest Voice</h2>
        <div style={{ margin: '1% 0' }}></div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            Before diving into the techniques, it's essential to understand what head voice and chest voice are:
          </p>
          <div style={{ margin: '1% 0' }}></div>

          <p style={{ textAlign: 'left' }}>
            <strong>Head Voice:</strong>
          </p>
          <ul>
            <li>
              <p style={{ textAlign: 'left' }}>Head voice is characterized by a lighter, more resonant sound.</p>
            </li>
            <li>
              <p style={{ textAlign: 'left' }}>It resonates in your upper register, typically in your head and the upper part of your throat.</p>
            </li>
            <li>
              <p style={{ textAlign: 'left' }}>Head voice is commonly used for high notes and achieving a more ethereal or delicate quality in your singing.</p>
            </li>
          </ul>
          <div style={{ margin: '1% 0' }}></div>

          <p style={{ textAlign: 'left' }}>
            <strong>Chest Voice:</strong>
          </p>
          <ul>
            <li>
              <p style={{ textAlign: 'left' }}>Chest voice feels deeper in your chest, as the name suggests.</p>
            </li>
            <li>
              <p style={{ textAlign: 'left' }}>It is characterized by a fuller, richer, and more powerful sound.</p>
            </li>
            <li>
              <p style={{ textAlign: 'left' }}>Chest voice is often used for lower notes and for adding strength and depth to your singing.</p>
            </li>
          </ul>
        </div>
        <div style={{ margin: '3% 0' }}></div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>The Importance of Transitioning</h2>
        <div style={{ margin: '1% 0' }}></div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            Mastering the transition between head voice and chest voice is crucial for versatile vocals. Here's why it matters:
          </p>
          <ul>
            <li>
              <p style={{ textAlign: 'left' }}>Expanding Your Vocal Range: Transitioning smoothly between head voice and chest voice allows you to access a wider vocal range, enabling you to sing both high and low notes effectively.</p>
            </li>
            <li>
              <p style={{ textAlign: 'left' }}>Dynamic Expression: Being able to switch between these registers allows you to convey a broader range of emotions in your singing. You can go from gentle and vulnerable to powerful and commanding within a single song.</p>
            </li>
            <li>
              <p style={{ textAlign: 'left' }}>Vocal Health: Learning to transition properly helps prevent straining your voice. When you transition smoothly, you reduce the risk of vocal fatigue and damage, promoting vocal longevity.</p>
            </li>
          </ul>
        </div>
        <div style={{ margin: '3% 0' }}></div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Tips for Transitioning Between Head Voice and Chest Voice</h2>
        <div style={{ margin: '1% 0' }}></div>
  
        <div>
          <ul>
            <li>
              <p style={{ textAlign: 'left' }}><strong>Warm-Up:</strong> Begin every practice session with a proper warm-up routine that includes exercises to engage both your chest and head voices.</p>
            </li>
            <li>
              <p style={{ textAlign: 'left' }}><strong>Vocal Exercises:</strong> Practice specific exercises designed to bridge the gap between head and chest voice. Start with scales and arpeggios, gradually moving across your entire vocal range.</p>
            </li>
            <li>
              <p style={{ textAlign: 'left' }}><strong>Mindful Breath Control:</strong> Focus on your breath support and control. Proper breath control is essential for smooth transitions.</p>
            </li>
            <li>
              <p style={{ textAlign: 'left' }}><strong>Visualization:</strong> Imagine the sound traveling through your body. When moving from chest to head voice, visualize the sound shifting from your chest to the top of your head.</p>
            </li>
            <li>
              <p style={{ textAlign: 'left' }}><strong>Listen and Record:</strong> Record your practice sessions and listen for any abrupt shifts between registers. This will help you identify areas that need improvement.</p>
            </li>
            <li>
              <p style={{ textAlign: 'left' }}><strong>Seek Professional Guidance:</strong> Consider working with a vocal coach or taking singing lessons to receive personalized feedback and guidance on transitioning between vocal registers.</p>
            </li>
          </ul>
        </div>
        <div style={{ margin: '3% 0' }}></div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Conclusion</h2>
        <div style={{ margin: '1% 0' }}></div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            Mastering the art of transitioning between head voice and chest voice is a fundamental aspect of becoming a versatile singer. It allows you to explore the full potential of your vocal range, express a wide range of emotions, and maintain vocal health. With consistent practice, proper technique, and dedication, you can achieve smooth and seamless transitions, taking your singing to new heights and captivating your audience with your versatile vocals. So, keep practicing and embrace the beauty of your voice! 🎤🗣️
          </p>
        </div>
        <div style={{ margin: '3% 0' }}></div>
      </div>
      
      )  
    },
    {
      title: 'Vocal Pitches 101',
      content: (
        <div>
        <div>
          <p style={{ textAlign: 'left' }}>
            Music, with its vast array of instruments and styles, has a unique ability to touch our souls and evoke emotions. One of the most captivating elements of music is the human voice, which can be as diverse and beautiful as the melodies it creates. In this blog post, we will dive into the world of vocal ranges and explore how each range contributes to the harmonious tapestry of music. Just as different instruments bring distinct qualities to a composition, so do the various vocal ranges: soprano, mezzo-soprano, alto, tenor, and bass.
          </p>
        </div>
        <div style={{ margin: '3% 0' }}></div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Soprano: Hitting the High Notes 🎵</h2>
        <div style={{ margin: '1% 0' }}></div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            The soprano is often described as the voice that soars effortlessly into the highest notes of a musical composition. It is the voice that can pierce through a crowd and send shivers down your spine. Sopranos bring an ethereal quality to music, a shimmering brilliance that adds a touch of celestial beauty. Whether it's an opera aria or a soaring ballad, the soprano voice commands attention with its clarity and purity.
          </p>
        </div>
        <div style={{ margin: '1% 0' }}></div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Mezzo-Soprano: Balancing High and Low 🌟</h2>
        <div style={{ margin: '1% 0' }}></div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            The mezzo-soprano, as the name suggests, falls between the soprano and alto ranges. This vocal range possesses the versatility to navigate both high and low notes with grace and finesse. Mezzos bring depth and complexity to a composition, often portraying characters with rich emotional layers. Their ability to balance the highs and lows adds a sense of nuance and storytelling to the music, making it relatable and engaging.
          </p>
        </div>
        <div style={{ margin: '1% 0' }}></div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Alto: Adding Depth and Warmth 🌄</h2>
        <div style={{ margin: '1% 0' }}></div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            The alto voice is characterized by its warm, velvety tones and ability to reach the lower notes of the vocal spectrum. Altos infuse music with a sense of grounding and depth. They provide a solid foundation for harmonies, enriching the overall sound with their resonant timbre. Altos are like the comforting embrace of a musical composition, offering stability and a reassuring presence.
          </p>
        </div>
        <div style={{ margin: '1% 0' }}></div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Tenor: Soaring in the Middle 🌟</h2>
        <div style={{ margin: '1% 0' }}></div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            The tenor voice holds a special place in the vocal world as it occupies the middle range of pitches. It has the ability to convey both power and vulnerability, making it a captivating voice type. Tenors often take on lead roles in operas, musicals, and popular music, using their emotive and resonant voices to convey the heart of a song's message. Their ability to soar through the middle range adds a captivating layer of drama and passion to music.
          </p>
        </div>
        <div style={{ margin: '1% 0' }}></div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Bass: Bringing the Low, Grounding Tones 🌊</h2>
        <div style={{ margin: '1% 0' }}></div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            Last but certainly not least, the bass voice anchors the harmonies with its deep, resonant tones. Basses provide the necessary contrast to the higher voices and create a sense of balance in the music. Their low, grounding tones can be both powerful and soothing, evoking a range of emotions. A well-executed bassline can send vibrations through the listener's body, adding a physical dimension to the music.
          </p>
        </div>
        <div style={{ margin: '1% 0' }}></div>
  
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Conclusion: In the world of music...</h2>
        <div style={{ margin: '1% 0' }}></div>
  
        <div>
          <p style={{ textAlign: 'left' }}>
            Conclusion: In the world of music, each vocal range is a precious instrument, contributing its unique qualities to create a harmonious masterpiece. The soprano soars to the heavens, the mezzo balances the high and low, the alto adds depth and warmth, the tenor stirs emotions in the middle, and the bass provides the grounding, low tones. Together, they form a beautiful choir of voices, each playing a vital role in the creation of memorable melodies and harmonies. So, next time you listen to your favorite song, take a moment to appreciate the intricate interplay of these vocal ranges and the magic they bring to the world of music. 🎸🎼
          </p>
        </div>
        <div style={{ margin: '3% 0' }}></div>
      </div>
      )  
    },
    {
      title: 'Rhythmic Pulse',
      content: (
        <div>
  <div>
    <p style={{ textAlign: 'left' }}>
      Music is a universal language that transcends boundaries and connects people on a deep emotional level. At the heart of every piece of music lies a fundamental element that shapes its character and emotion - tempo. Like discovering your own heartbeat, finding the right tempo for a musical composition is a crucial aspect of creating a meaningful and engaging piece of art. It sets the groove, mood, and rhythm, allowing musicians to convey their emotions and intentions. In this article, we explore the significance of tempo in music and the importance of trusting your instincts when choosing the right pace for your musical masterpiece.
    </p>
  </div>
  <div style={{ margin: '3% 0' }}></div>

  <h2 className="font-bold underline" style={{ textAlign: 'left' }}>The Role of Tempo</h2>
  <div style={{ margin: '2% 0' }}></div>

  <div>

    <p style={{ textAlign: 'left' }}>
      Tempo, simply put, is the speed or pace at which a piece of music is performed. It serves as the backbone of a composition, much like a heartbeat does for a living being. The tempo of a musical piece can vary widely, from slow and solemn to fast and energetic, and everything in between. Each tempo choice evokes distinct emotions and communicates different messages to the audience.
    </p>
    <div style={{ margin: '2% 0' }}></div>

    <h3 className="font-bold" style={{ textAlign: 'left' }}>Expressing Emotion</h3>

    <p style={{ textAlign: 'left' }}>
      One of the primary roles of tempo in music is to convey emotion. A slow tempo might be used to create a sense of melancholy or introspection, while a fast tempo can evoke excitement, joy, or even tension. Think about how the tempo of a song can dramatically change its emotional impact - a ballad may tug at your heartstrings with a gentle, slow tempo, while a dance track can make you want to move with a lively, up-tempo beat.
    </p>
    <div style={{ margin: '2% 0' }}></div>

    <h3 className="font-bold" style={{ textAlign: 'left' }}>Setting the Mood</h3>

    <p style={{ textAlign: 'left' }}>
      Tempo also plays a crucial role in setting the overall mood of a piece. For example, a waltz is typically performed at a moderate tempo, creating a romantic and elegant atmosphere. In contrast, a piece composed at a brisk tempo might feel more energetic and dynamic, perfect for a chase scene in a movie or a thrilling moment in a video game.
    </p>

    <div style={{ margin: '2% 0' }}></div>

    <h3 className="font-bold" style={{ textAlign: 'left' }}>Enhancing Musical Phrasing</h3>
    <p style={{ textAlign: 'left' }}>
      The choice of tempo can greatly affect how musicians phrase and interpret a piece of music. A slower tempo allows for more expressive and detailed phrasing, with room for nuanced dynamics and articulation. Conversely, a faster tempo demands precision and can lead to a more exhilarating and intense performance.
    </p>
  </div>
  <div style={{ margin: '3% 0' }}></div>

  <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Trust Your Instincts</h2>
  <div style={{ margin: '1% 0' }}></div>

  <div>
    <p style={{ textAlign: 'left' }}>
      When it comes to selecting the right tempo for a musical composition, there are guidelines and traditions to consider, but there's also room for personal interpretation and instinct. Musicians often develop a "feel" for tempo through years of practice and experience. Here are some tips for finding the tempo that feels just right for your piece:
    </p>
    <div style={{ margin: '1% 0' }}></div>

    <ul>
      <li>
        <p style={{ textAlign: 'left' }}><strong>Listen Actively:</strong> Start by listening to your musical ideas and melodies. Pay attention to the natural pace at which they flow and how they make you feel. This can be a great starting point for determining the tempo.</p>
      </li>
      <li>
        <p style={{ textAlign: 'left' }}><strong>Experiment:</strong> Don't be afraid to try out different tempos. Play your piece at various speeds to see how it changes the mood and emotion. You might discover a tempo that resonates with your artistic vision.</p>
      </li>
      <li>
        <p style={{ textAlign: 'left' }}><strong>Consider the Context:</strong> Think about the context in which your music will be performed or heard. Is it for a specific occasion, like a wedding or a film soundtrack? The context can help guide your tempo choice.</p>
      </li>
      <li>
        <p style={{ textAlign: 'left' }}><strong>Collaborate:</strong> If you're working with other musicians or a conductor, be open to their input and feedback. Collaboration can lead to exciting tempo choices that you might not have considered on your own.</p>
      </li>
    </ul>
  </div>
  <div style={{ margin: '3% 0' }}></div>

  <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Conclusion</h2>
  <div style={{ margin: '1% 0' }}></div>

  <div>
    <p style={{ textAlign: 'left' }}>
      Finding the right tempo for a musical composition is a deeply personal and artistic endeavor. It's a journey of self-discovery, much like discovering your own heartbeat. Tempo not only sets the groove and mood but also serves as a powerful tool for expressing emotion and connecting with your audience. Trust your instincts, listen to what feels just right for your piece, and let the heartbeat of your music guide you in creating a masterpiece that resonates with the world. 🎶🕺
    </p>
  </div>
  <div style={{ margin: '3% 0' }}></div>
</div>
      )
    },
    {
      title: 'MusicTech',
      content: (<div>
        <div>
          <p style={{ textAlign: 'left' }}>
            In the world of music composition and production, MIDI (Musical Instrument Digital Interface) has revolutionized the way musicians create, experiment, and express their musical ideas. With its digital canvas, MIDI offers a limitless realm where composers can explore melodies, harmonies, and arrangements with unparalleled precision and creativity. In this article, we will delve into the profound impact of MIDI in the realm of music composition.
          </p>
        </div>
        <div style={{ margin: '3% 0' }}></div>
      
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>The Birth of MIDI</h2>
        <div style={{ margin: '1% 0' }}></div>
      
        <div>
          <p style={{ textAlign: 'left' }}>
            MIDI emerged in the early 1980s as a standardized communication protocol, connecting various electronic musical instruments and computers. This innovation allowed for the exchange of musical information, such as note data, tempo, and dynamics, between different devices, enabling musicians to harness the power of technology in their creative process.
          </p>
        </div>
        <div style={{ margin: '3% 0' }}></div>
      
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>A World of Possibilities</h2>
        <div style={{ margin: '1% 0' }}></div>
      
        <div>
          <p style={{ textAlign: 'left' }}>
            One of the most significant advantages of MIDI is its versatility. Unlike traditional sheet music or analog recordings, MIDI is not limited by the constraints of specific instruments or recording equipment. Instead, it serves as a digital representation of musical elements, offering composers a blank canvas on which they can paint their sonic masterpieces.
          </p>
        </div>
        <div style={{ margin: '3% 0' }}></div>
      
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Exploring Melodies</h2>
        <div style={{ margin: '1% 0' }}></div>
      
        <div>
          <p style={{ textAlign: 'left' }}>
            With MIDI, composers have the freedom to experiment endlessly with melodies. They can easily manipulate note lengths, pitches, and rhythms, allowing for precise control over the smallest musical details. This level of precision enables composers to explore unique melodies and adapt them until they perfectly convey the intended emotions and messages of their compositions.
          </p>
        </div>
        <div style={{ margin: '3% 0' }}></div>
      
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Harmonies and Arrangements</h2>
        <div style={{ margin: '1% 0' }}></div>
      
        <div>
          <p style={{ textAlign: 'left' }}>
            Creating harmonies and arrangements becomes an intuitive and flexible process through MIDI. Musicians can layer multiple instrument sounds to build rich, complex textures or simplify arrangements for a minimalist effect. The ability to experiment with harmonies and arrangements in real-time grants composers the freedom to hear how different instrument combinations affect the overall sound of their compositions.
          </p>
        </div>
        <div style={{ margin: '3% 0' }}></div>
      
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Efficiency and Productivity</h2>
        <div style={{ margin: '1% 0' }}></div>
      
        <div>
          <p style={{ textAlign: 'left' }}>
            MIDI also offers a significant boost in efficiency and productivity. Composers can compose, edit, and revise their music directly within digital audio workstations (DAWs) using MIDI data. This eliminates the need for laborious notation and transcription, streamlining the creative process and allowing for rapid iterations.
          </p>
        </div>
        <div style={{ margin: '3% 0' }}></div>
      
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Interpreting the Imagination</h2>
        <div style={{ margin: '1% 0' }}></div>
      
        <div>
          <p style={{ textAlign: 'left' }}>
            Perhaps one of the most remarkable features of MIDI is its ability to translate the composer's imagination into reality. It bridges the gap between the creative vision and its actualization, making it easier for musicians to bring their musical ideas to life. With MIDI, composers can quickly audition different sounds, instrumentations, and arrangements until they capture the precise atmosphere they envision.
          </p>
        </div>
        <div style={{ margin: '3% 0' }}></div>
      
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Collaboration and Sharing</h2>
        <div style={{ margin: '1% 0' }}></div>
      
        <div>
          <p style={{ textAlign: 'left' }}>
            MIDI's digital nature makes it an ideal tool for collaboration and sharing. Musicians from different parts of the world can exchange MIDI files and work on compositions together, even if they are miles apart. This interconnectedness fosters creativity by allowing artists to draw inspiration from diverse sources and perspectives.
          </p>
        </div>
        <div style={{ margin: '3% 0' }}></div>
      
        <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Conclusion</h2>
        <div style={{ margin: '1% 0' }}></div>
      
        <div>
          <p style={{ textAlign: 'left' }}>
            In the world of music composition, MIDI stands as a powerful tool that empowers musicians to explore, experiment, and create with unparalleled precision and creativity. It offers a digital canvas where melodies, harmonies, and arrangements can be meticulously crafted, all while translating the composer's imagination into sonic reality. MIDI's adaptability, efficiency, and collaborative potential make it an indispensable asset for today's composers, shaping the future of music with every note played and every composition conceived. 🎼🎹
          </p>
        </div>
        <div style={{ margin: '3% 0' }}></div>
      </div>
      )
    },
    {
      title: 'Piano Time',
      content: (<div>
  <div>
    <p style={{ textAlign: 'left' }}>
      In the realm of piano music, the glissando is a technique that adds a touch of magic to a performance. Like a graceful slide through the musical spectrum, a pianist's glissando involves the swift movement of fingers along the keys, creating a seamless, shimmering effect. In this article, we explore the artistry behind the glissando and its role in creating musical elegance.
    </p>
  </div>
  <div style={{ margin: '3% 0' }}></div>

  <h2 className="font-bold underline" style={{ textAlign: 'left' }}>The Essence of Glissando</h2>
  <div style={{ margin: '1% 0' }}></div>

  <div>
    <p style={{ textAlign: 'left' }}>
      The word "glissando" finds its origins in the Italian word "sliding." When a pianist executes a glissando, they essentially glide their fingers across the keys, connecting one note to another in a fluid, continuous motion. This technique can be heard in various musical genres, from classical to jazz, as it adds an element of drama, passion, or whimsy, depending on the context.
    </p>
  </div>
  <div style={{ margin: '3% 0' }}></div>

  <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Seamless Transitions</h2>
  <div style={{ margin: '1% 0' }}></div>

  <div>
    <p style={{ textAlign: 'left' }}>
      One of the defining characteristics of a well-executed glissando is its ability to create seamless transitions between notes. Instead of hearing individual pitches, the listener is treated to a captivating and almost ethereal sweep of sound. This seamless flow makes the glissando a powerful tool for conveying emotion and drawing the audience into the music.
    </p>
  </div>
  <div style={{ margin: '3% 0' }}></div>

  <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Shimmering Effect</h2>
  <div style={{ margin: '1% 0' }}></div>

  <div>
    <p style={{ textAlign: 'left' }}>
      The shimmering effect produced by a glissando is akin to the play of light on water. As the pianist swiftly moves their fingers, the notes blend into one another, creating a captivating auditory display. This effect can evoke feelings of nostalgia, romance, or even excitement, depending on the speed and context of the glissando.
    </p>
  </div>
  <div style={{ margin: '3% 0' }}></div>

  <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Expressive Variations</h2>
  <div style={{ margin: '1% 0' }}></div>

  <div>
    <p style={{ textAlign: 'left' }}>
      The glissando is a versatile technique that can be executed in various ways to suit the mood and style of a composition. Pianists can choose to perform glissandos softly, gently caressing the keys, or with fervor and intensity, adding a touch of drama to the music. These variations in execution allow pianists to express themselves and imbue their performances with their unique artistic flair.
    </p>
  </div>
  <div style={{ margin: '3% 0' }}></div>

  <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Glissando in Different Genres</h2>
  <div style={{ margin: '1% 0' }}></div>

  <div>
    <p style={{ textAlign: 'left' }}>
      The glissando is not confined to a single musical genre. It finds its place in classical music, where it can be used to create romantic and evocative moments, as well as in jazz, where it adds a playful and improvisational element to performances. It's also prevalent in contemporary and experimental music, where it can take on avant-garde and innovative forms.
    </p>
  </div>
  <div style={{ margin: '3% 0' }}></div>

  <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Mastering the Art of Glissando</h2>
  <div style={{ margin: '1% 0' }}></div>

  <div>
    <p style={{ textAlign: 'left' }}>
      Executing a flawless glissando requires skill, practice, and a deep understanding of the piano's mechanics. Pianists must be mindful of the angle and pressure applied to the keys to achieve the desired effect. Proper finger placement and coordination are essential to maintain control and accuracy during the glide.
    </p>
  </div>
  <div style={{ margin: '3% 0' }}></div>

  <h2 className="font-bold underline" style={{ textAlign: 'left' }}>Conclusion</h2>
  <div style={{ margin: '1% 0' }}></div>

  <div>
    <p style={{ textAlign: 'left' }}>
      In the hands of a skilled pianist, the glissando is more than just a technical flourish; it is a tool for conveying emotion, enhancing expression, and adding a touch of enchantment to the music. As the fingers slide gracefully along the keys, the pianist creates a seamless, shimmering effect that captivates the audience and leaves a lasting impression. The glissando is a testament to the artistry and versatility of the piano, showcasing its ability to paint vivid musical landscapes with each stroke of the keys. 🎹🎵
    </p>
  </div>
  <div style={{ margin: '3% 0' }}></div>
</div>
)
    },
  ];
  const selectedBlogPost = blogPosts.find(post => post.title === title);

  const containerStyle = {
    width: '90%',
    padding: '40px',
    marginTop: '12%',
    zIndex: '1',
    margin: '0px auto',
    textAlign: 'center',
    backgroundColor: '#F1F0E8',
    boxShadow: '0px 0px 10px rgba(204, 200, 170, 1)',
    borderRadius: '8px'
  ,
  };
  
  const imageStyle = {
    maxWidth: '900px', // Set a defined width (e.g., 400px)
    display: 'block',
    margin: '0 auto', // Center the image horizontally
    marginBottom: '5%',
    marginTop: '6%',
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
    textDecoration: 'underline', // Add text underline
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
    <div className='flex flex-col'>
    <img className='w-[40rem] z-10 absolute' src={danceblog} alt="Blog Post"/>
    <img className='w-[40rem] z-10 absolute ml-[63%]' src={happyblog} alt="Blog Post"/>
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
    </div>
  );
  
};

export default BlogPostDetails;
