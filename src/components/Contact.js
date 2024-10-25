// import React from 'react';
// import './Contact.css'; 
// import twitterIcon from './images/twitter-icon.png';
// import githubIcon from './images/github-icon.png';
// import linkedinIcon from './images/linkedin-icon.png';
// import emailIcon from './images/email-icon.png';

// const Contact = () => {
//     return (
//         <div id="contact">
//             <h2>Lets chat!</h2>
//             <form>
//                 <div>
//                     <input type="text" id="name" name="name" placeholder=" " required />
//                     <label htmlFor="name">Name</label>
//                 </div>
//                 <div>
//                     <input type="email" id="email" name="email" placeholder=" " required />
//                     <label htmlFor="email">Email</label>
//                 </div>
//                 <div>
//                     <textarea id="message" name="message" placeholder=" " required></textarea>
//                     <label htmlFor="message">Message</label>
//                 </div>
//                 <button type="submit">Send Message</button>
//             </form>

//             <div id="social-links">
//                 <a href="https://x.com/_ruraaa" target="_blank" rel="noopener noreferrer">
//                     <img src={twitterIcon} alt="Twitter" /> Twitter
//                 </a>
//                 <a href="https://github.com/RuraMuchenga" target="_blank" rel="noopener noreferrer">
//                     <img src={githubIcon} alt="GitHub" /> GitHub
//                 </a>
//                 <a href="https://www.linkedin.com/in/ruramai-muchenga-a20454165/" target="_blank" rel="noopener noreferrer">
//                     <img src={linkedinIcon} alt="LinkedIn" /> LinkedIn
//                 </a>
//                 <a href="ruramaimuchenga@gmail.com">
//                     <img src={emailIcon} alt="Email" /> Email
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Contact;















import React from 'react';
import './Contact.css'; 
import twitterIcon from './images/twitter-icon.png';
import githubIcon from './images/github-icon.png';
import linkedinIcon from './images/linkedin-icon.png';
import emailIcon from './images/email-icon.png';

const Contact = () => {
    return (
        <div id="contact">
            <h2>Let's Talk</h2>
            <p>If you are interested in working with me. Feel free to reach out to me.</p>

            <div id="social-links">
                <a href="https://x.com/_ruraaa" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" /> Twitter
                </a>
                <a href="https://github.com/RuraMuchenga" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/ruramai-muchenga-a20454165/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" /> LinkedIn
                </a>
                <a href="ruramaimuchenga@gmail.com">
                    <img src={emailIcon} alt="Email" /> Email
                </a>
            </div>
        </div>
    );
};

export default Contact;
