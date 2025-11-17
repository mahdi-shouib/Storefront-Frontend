# Storefront Frontend

This is the frontend for a storefront application built with **Node.js**, **TypeScript**, **Angular**, and tested with **Karma** and **Jasmine**. It uses Angular to create a dynamic and responsive user interface for the storefront.

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mahdi-shouib/Storefront-Frontend.git

cd Storefront-Frontend
```

### 2. Install Dependencies

```bash
npm i
```

### 3. Run Development Server

To start the Angular development server, run:

```bash
npm start
```
The application will be running at: `http://localhost:4200`

### 4. Build and Run Production Server

To build and serve the production version of the application, run the following commands:

**1.** Build the project:

```bash
npm run build
```

**2.** Run the server:

```bash
node dist/Storefront-Frontend/server/server.mjs
```

The production server will be created in `/dist/Storefront-Frontend` and will be running at: `http://localhost:4000`

## Usage

The application consists of 4 main pages:

1. **Product Listing Page**: Displays all available products with options to view details and add to cart.

2. **Product Details Page**: Shows detailed information about a selected product, including name, image, description, and price.

3. **Shopping Cart Page**: Allows users to view items added to their cart, update quantities, and proceed to checkout.

4. **Order Success Page**: Displays a confirmation message after a successful order placement, with order details.

## Testing

To run the tests, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome!  
Please open an issue or submit a pull request.