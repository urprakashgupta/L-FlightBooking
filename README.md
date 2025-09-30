# Base Node.js Project Template

This is a base Node.js project template, which anyone can use as it has been prepared by keeping some of the most important code principles and project management recommendations in mind. Feel free to change anything.

---

## Folder Structure

All the actual source code regarding the project will reside inside the `src` folder. This will not include any kind of tests. (You might want to make a separate `tests` folder).

Let's take a look inside the `src` folder:

* **`config`**: In this folder, anything and everything regarding any configurations or setup of a library or module will be done.
    * *Example 1*: Setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion is done in `server-config.js`.
    * *Example 2*: Setting up a logging library to prepare meaningful logs. The configuration for this library should also be done here.

* **`routes`**: In the routes folder, we register a route and the corresponding middleware and controllers to it.

* **`middlewares`**: They are just going to intercept the incoming requests where we can write our validators, authenticators, etc.

* **`controllers`**: They are the last middleware before calling the business layer. In controllers, we receive the incoming requests and data, pass it to the business layer, and once the business layer returns an output, we structure the API response and send the output.

* **`repositories`**: This folder contains all the logic using which we interact with the DB by writing queries. All the raw queries or ORM/ODM queries will go here.

* **`services`**: This folder contains the business logic and interacts with repositories for data from the database.

* **`utils`**: This folder contains helper methods, error classes, etc.

---

## Project Setup

1.  Download this template and open it in your favorite text editor.

2.  Navigate to the project's root directory in your terminal and execute the following command to install the required dependencies:
    ```bash
    npm install
    ```

3.  In the root directory, create a `.env` file and add the following environment variable:
    ```env
    PORT=<port number of your choice>
    ```
    For example:
    ```env
    PORT=3000
    ```

4.  Navigate into the `src` folder and execute the following command to initialize Sequelize:
    ```bash
    npx sequelize init
    ```
    This command will create `migrations` and `seeders` folders, along with a `config/config.json` file.

5.  Open the `config/config.json` file and update the database credentials:
    * For the **development** environment, provide your database `username`, `password`, and `dialect` (e.g., `mysql`, `postgres`, `mariadb`).
    * For **test** or **production** environments, make sure you also replace the `host` with your hosted database URL.

6.  To run the server, execute the following command from the root directory:
    ```bash
    npm run dev
    ```