import React from 'react';

const Blogs = () => {
    return (
        <div className='text-left ml-5 mt-5'>
            <h1 className='text-2xl text-accent'>How will you improve the performance of react application</h1>
            <p>Here are some methods for improving react application performance.</p>
            <p className='font-bold'>Use a Production build before deployment.</p>
            <p>If you're benchmarking or facing performance-related issues in your React apps, you always need first to make sure that you are testing with the minified production build.</p>
            <p className='font-bold'>Avoid Adding Extra Nodes to the DOM by using React. Fragment</p>
            <p>When we need to render the multiple elements in a component or return a group of related items, using a div or another element to enclose the elements could add a node in the DOM. So to avoid this, we can use React Fragmentin React, which will not add any other nodes to the DOM.</p>
            <p className='font-bold'>Immutable Data Structures</p>
            <p>The term Immutability refers to something whose value or state cannot be changed. So, in programming, a variable is immutable when its value cannot change after it's created.</p>
            <p className='font-bold'>Avoid Anonymous Functions</p>
            <p>Another useful way to improve the performance of React app would be to avoid any inline function definition inside the render function.</p>
            <p className='font-bold'>App's loading time improvement by lazy loading</p>
            <p>Using lazy loading in an app provides better performance and load time. When using lazy loading, we reduce the number of resources that need to be loaded on the page initially. </p>
            <h1 className='text-2xl text-accent mt-5'>What are the different ways to manage a state in a react application</h1>
            <p className='text-xl'>There are four main types of state you need to properly manage in your React apps:<br/>Local state<br/>Global State<br/>Server State<br/>URL State</p>
            <p className='font-bold'>Local UI state -</p>
            <p>Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form's inputs.</p>
            <p className='font-bold'>Global UI state -</p>
            <p> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application</p>
            <p className='font-bold'>Server state -</p>
            <p>Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>
            <p className='font-bold'>URL state -</p>
            <p> Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>
            <h1 className='text-xl text-accent mt-5'>How dose prototypical inheritance works</h1>
            <p>When you attempt to access a property or method of an object, JavaScript will first search on the object itself, and if it is not found, it will search the object's [[Prototype]]. If after consulting both the object and its [[Prototype]] still no match is found, JavaScript will check the prototype of the linked object, and continue searching until the end of the prototype chain is reached.At the end of the prototype chain is Object.prototype. All objects inherit the properties and methods of Object. Any attempt to search beyond the end of the chain results in null.In our example, x is an empty object that inherits from Object. x can use any property or method that Object has, such as toString().<br/>x.toString();<br/>This prototype chain is only one link long. x Object. We know this, because if we try to chain two [[Prototype]] properties together, it will be null.<br/>x.__proto__.__proto__;<br/>output:-    null<br/>Let’s look at another type of object. If you have experience Working with Arrays in JavaScript, you know they have many built-in methods, such as pop() and push(). The reason you have access to these methods when you create a new array is because any array you create has access to the properties and methods on the Array.prototype.<br/>You will notice a constructor property on the prototype that is set to Array(). The constructor property returns the constructor function of an object, which is a mechanism used to construct objects from functions.<br/>This chain is now referring to Object.prototype. We can test the internal [[Prototype]] against the prototype property of the constructor function to see that they are referring to the same thing.</p>
            <h1 className='text-2xl text-accent'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
            <p>One should never update the state directly because of the following reasons:<br/>If you update it directly, calling the setState() afterward may just replace the update you made.<br/>When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.<br/>You will lose control of the state across all components.</p>
            <h1 className='text-2xl text-accent mt-5'>What is a unit test? Why should write unit tests?</h1>
            <p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.</p>
            <p> <p className='font-bold'>Manual:</p> As the name implies, unit tests are run manually to verify the correctness of your code. This is done before writing automated tests. Its drawback is that you have to manually test your functions/classes whenever you make changes to them.<br/><p className='font-bold'>Automated:</p>This is the preferred unit testing method as it can be carried out by simply running a script. Automated tests also make it easier to run tests when your application scales.</p>
            <p className='text-xl'>Why Do We Need Unit Testing?</p>
            <p>To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:</p>
            <p>1. Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could've been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.</p>
            <p>2. Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.</p>
            <p>3. Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.</p>
            <p>4. Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.</p>
            <p>5. In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback.</p>
        </div>
    );
};

export default Blogs;