import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            {/* qna-1 */}
            <section className='qna m-5 p-5'>
                <div className='question'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</div>
                <div>
                    <span className='ans-title'>Access Token:</span> A short-lived certificate that verifies a user's identity and grants access to protected        resources.
                    <br />
                    <br />
                    <span className='ans-title'>Refresh Token:</span> A long-lived certificate used to obtain a new access token when the current one expires, allowing users to continue accessing resources without re-authentication.
                    <br />
                    <br />
                    <span className='ans-title'>Client-side storage:</span> Store access tokens securely in memory and avoid persistent storage such as local storage or cookies. For refresh tokens, use secure storage methods such as secure HTTP-only cookies or encrypted storage options provided by the platform.
                </div>
            </section>
        </div>
    );
};

export default Blog;