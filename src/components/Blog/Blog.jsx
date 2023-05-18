import React from 'react';
import './Blog.css'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className='m-5'>
                <Marquee>
                    <div className='fs-2'>Blog page written by Abdullah Al Numan Rahi</div>
                </Marquee>
            </div>
            {/* qna-1 */}
            <section className='qna m-5 p-5'>
                <div className='question'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</div>
                <div className='pt-4'>
                    <span className='ans-title'>Access Token:</span> A short-lived certificate that verifies a user's identity and grants access to protected        resources.
                    <br />
                    <br />
                    <span className='ans-title'>Refresh Token:</span> A long-lived certificate used to obtain a new access token when the current one expires, allowing users to continue accessing resources without re-authentication.
                    <br />
                    <br />
                    <span className='ans-title'>Client-side storage:</span> Store access tokens securely in memory and avoid persistent storage such as local storage or cookies. For refresh tokens, use secure storage methods such as secure HTTP-only cookies or encrypted storage options provided by the platform.
                </div>
            </section>
            {/* qna-2 */}
            <section className='qna m-5 p-5'>
                <div className='question'>Compare SQL and NoSQL databases?</div>
                <div className='pt-4'>
                    <ul>
                        <li className='py-2'>SQL databases are relational, and NoSQL databases are non-relational.</li>
                        <li className='py-2'>SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                        <li className='py-2'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                        <li className='py-2'>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                        <li className='py-2'>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                    </ul>
                </div>
            </section>
            {/* qna-3 */}
            <section className='qna m-5 p-5'>
                <div className='question'>What is express js? What is Nest JS?</div>
                <div className='pt-4'>
                    <span className='ans-title'>Express js :</span>Express.js is a lightweight and flexible web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a concise approach, easy routing and integration of middleware. It has a large ecosystem of third-party libraries and is known for fast performance.
                    <br />
                    <br />
                    <span className='ans-title'>Nest JS :</span>Nest.js is a server-side web application framework for Node.js inspired by Angular. It promotes a modular and structured approach to building scalable and maintainable applications. It uses TypeScript, dependency injection, decorators, and metadata to provide a robust and opinionated framework for server-side development. Nest.js offers features such as middleware, pipes, built-in routing, exception handling, and support for various databases. It is suitable for developing complex and enterprise-level applications.
                </div>
            </section>
            {/* qna-4 */}
            <section className='qna m-5 p-5'>
                <div className='question'>What is MongoDB aggregate and how does it work ?</div>
                <div className='pt-4'>
                    The MongoDB Aggregation Framework is a feature that allows you to perform advanced data processing and analysis on MongoDB collections. It works by performing a sequence of processing steps, such as matching, projecting, grouping, sorting and so on. Each stage transforms the data and passes it on to the next stage. It lets you perform complex queries and aggregations in a controlled manner, enabling sophisticated data manipulation and analysis. The overall framework works on the server-side and efficiently processes large datasets without transferring all the data to the client.
                </div>
            </section>
            <div className='text-center my-3 pb-5'>&copy;<Link className='text-decoration-none' to="https://github.com/numanrahi">Abdullah Al Numan Rahi</Link></div>
        </div>
    );
};

export default Blog;