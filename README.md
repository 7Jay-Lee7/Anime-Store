## Anime Store
Anime Store is a Next.js application that allows users to browse and purchase anime-related products.

![3D Website](Anime-Store.png)

## Getting Started
To get started with the Anime Store application, follow the instructions below.

## Prerequisites
To run the Anime Store application, you will need the following:
* Node.js v14 or later installed on your system
* MongoDB instance to store data
* Stripe API keys to process payments
* A JWT secret for authentication

## Installing
To install the Anime Store application, follow the steps below:

1. Clone the repository to your local machine:
git clone https://github.com/7Jay-Lee7/anime-store.git

2. Install dependencies using npm or yarn:
cd anime-store
npm install

3. Update the .env.example file to just a .env in the root of the project and add the following variables:
MONGODB_URI=your-mongodb-uri
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLIC_KEY=your-stripe-public-key
JWT_SECRET=your-jwt-secret

4. Start the development server:
npm run dev

The application should now be available at http://localhost:3000.

### Contributing
If you would like to contribute to the Anime Store application, please follow the steps below:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
git checkout -b my-feature-branch

3. Make your changes and commit them:
git commit -am 'Add some feature'

4. Push your branch to your forked repository:
git push origin my-feature-branch

5. Create a pull request.

### License
This project is licensed under the MIT License - see the LICENSE.md file for details.
