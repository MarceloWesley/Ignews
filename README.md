# About
- this project consists of a blog that the user will only be able to access the content of the posts if he has a subscription, in this project I was able to learn a lot about payment api and CMS and also user control.


## Cloning the Project
- you will need git installed on your machine, you can install it from this link [Git](https://git-scm.com/)
- Now, open your terminal and clone the project remotely with ```git clone (SSH key or web http)``` Example: git clone git@github.com:MarceloWesley/Ignews.git
- Now go to the file you cloned, and from the terminal, type ```code Ignews ```
or if you are inside the Ignews folder, type ```code . ```

## Getting Started
   Now, with the project open, in your editor, open the terminal and run the following commands.
 
- first run the ```Yarn``` command to install the dependencies.
- run the project with ```yarn dev```

## Stripe
- for subscription to work, type this command in terminal ```./stripe listen --forward-to localhost:3000/api/webhooks ```
- when being redirected to the payment page, you can use this card number 4242 4242 4242 4242

## Technologies
- ReactJS
- Typescript
- Sass
- NextJs

## Tools
- CMS Prismic
- Stripe

## DataBase
- FaunaDB 


