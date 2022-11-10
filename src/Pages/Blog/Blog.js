import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('blog');
    return (
        <div>
           <div className='w-10/12 mx-auto py-5 md:grid grid-cols-2'>
            <div className='bg-slate-300 p-5 mr-5 rounded-md my-5'>
            <h2 className='text-2xl text-green-600 shadow shadow-green-700/40 mb-5'>What are the difference between SQL an NoSQL?</h2>
            <p>SQL databases have fixed or static or predefined schema which are not suited for hierarchical data storage where NoSQL have dynamic schema which are suited for hierarchical data storage. SQL follows ACID property  where noSQL follows CAP. NoSQL are horizontally scalable, SQLs are vertically scalable.
            
            </p>
            </div>
           <div className='bg-slate-300 p-5 mr-5 rounded-md my-5'>
           <h2 className='text-2xl text-green-600 shadow shadow-green-700/40 mb-5'> What is JWT? How Does it work?</h2>
            <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted</p>
           </div>
            <div className='bg-slate-300 p-5 mr-5 rounded-md my-5'>
            <h2 className='text-2xl text-green-600 shadow shadow-green-700/40 mb-5'>What is the difference between javascript and NodeJS??</h2>
            <p>NodeJS is a cross-platform and open source Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.Javascript is capable enough to add HTML and play with the DOM.Nodejs does not have capability to add HTML tags.Javascript is used in frontend development.Nodejs is used in server-side development. </p>
            </div>
            <div className='bg-slate-300 p-5 mr-5 rounded-md my-5'>
            <h2 className='text-2xl text-green-600 shadow shadow-green-700/40 mb-5'>How does NodeJS handle multiple requests at the same time</h2>
            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module. </p>
            </div>
        </div>
        </div>
    );
};

export default Blog;