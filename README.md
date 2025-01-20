# See Demo
You can see it in demo [here](https://d5yz76nkbhlyy.cloudfront.net).
Served through CloudFront and AWS S3.

# Introduction
This is a learning project specific to micro-frontend.
The idea is that there will have to be a "Container" for all of this app, regardless of the stack.
Also, this was learned in the past using Webpack while Vite was not used much yet.
You have to build things from scratch, so knowledge about Webpack and tinkering their documentation is a must!

## About the project
So in the project there will be:
1. `container` package, which uses React, main goal is to contain all the apps, manage routing, manage authentication.
2. `auth` package, React, focused on Sign In and Sign Up page. (Although a bit buggy)
3. `dashboard` package, Vue, focused on displaying charts, data, etc.
4. `marketing` package, React, displaying the Landing and Pricing page.

# Conclusion
## Things Learned
1. Turn the frontend tech stack irrelevant!  
Some features are better developed in another stack, in my real case after learning this I had to implement specific data visualization using D3.js and I wanted to separate the packages, and since the material in D3.js is written mostly in vanilla Javascript and D3.js itself. I use Javascript in React-based project.
2. Knows module bundlers better  
While the current use case is using Webpack, this can be implemented using Vite. The term to look for is **Module Federation**. Things don't have to be handled fully micro-frontend though. In the same case of D3.js, I don't separate the repo!
3. Integration with other technologies becomes effortless.  
Integration can now be done better while everyone is happy with their stack!
4. Slimmer repository  
This comes with the cost of having multiple codes!
5. What it felt like to manage a bigger codebase in the future  

## Other opinion
Everything comes with a pros and cons. While there are benefits of things like:
1. Developers don't have to be tied to specific technology anymore  
   Since the frontend tech stack can be diversified. This can mean you don't have to hire specific "Vue Developer" or "React Developer". In the end, it's just JavaScript.
2. Better development experience!  
   In focused development, you can do separate updates just in case the same dependencies are needed but need certain features because each `packages` can be updated independently.
3. Security, somehow I got the worry of someone stealing all of the frontend apps, now that's addressed! 😂

It also comes with more management!
1. Someone has to master, manage, and lead all of this to work!
2. Managing multiple codes
   Maybe documentation and communication matter now more than ever.
4. Tech Stack diversification
   Is really a double-edged sword. It means you need to hire people who are willing to continuously learn and handle different code bases, Vue, React, D3, and more!
5. This will introduce new bugs!
   New things, will introduce new bugs. In my case, the sign-in page's CSS wouldn't load unless you refreshed it first! 
   

## Another Development
While this is the end of my learning using Webpack, this doesn't have to be the end of the learning journey!
I have another case where this can be developed more!
1. Upgrading the app to use Vite
2. How about use cases in NextJS?
3. Would this be better used in a mono repo setting or a separate repo?
4. Using Lerna for managing the app (if mono repo)
