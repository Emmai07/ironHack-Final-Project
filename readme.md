# CRUD Tutorial and Comments System

This project is a simple CRUD (Create, Read, Update, Delete) application with a comments adding system. It is built using *Spring Boot* on the backend, *React.js* on the frontend, and *MySQL* as the database.

## Features

•⁠  ⁠*CRUD Operations*: Basic operations (Create, Read, Update, Delete) for managing entities.
•⁠  ⁠*Comments System*: Add, view, and manage comments associated with specific entities.
•⁠  ⁠*RESTful API*: Backend exposes RESTful API endpoints for interaction with the frontend.
•⁠  ⁠*Frontend UI*: Built with React.js, providing a clean and responsive interface.
•⁠  ⁠*MySQL Database*: Data is stored and managed using MySQL.

## Technologies Used

•⁠  ⁠*Backend*: Spring Boot
•⁠  ⁠*Frontend*: React.js
•⁠  ⁠*Database*: MySQL
•⁠  ⁠*API Client*: Axios (for API requests in React)

## Prerequisites

Before running this project, ensure you have the following installed:

•⁠  ⁠*Java JDK 11 or higher*
•⁠  ⁠*Node.js and npm*
•⁠  ⁠*MySQL Server*

## Installation

1.⁠ ⁠*Clone the repository*:

   ⁠ bash
   git clone https://github.com/your-repo/iron-hack-final-project.git
   cd iron-hack-final-project
    ⁠

2.⁠ ⁠*Backend Setup (Spring Boot)*:

   - Navigate to the ⁠ backend ⁠ directory:

     ⁠ bash
     cd backend
      ⁠

   - Configure MySQL database settings in ⁠ application.properties ⁠:

     ⁠ properties
     spring.datasource.url=jdbc:mysql://localhost:3306/your_db_name
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     spring.jpa.hibernate.ddl-auto=update
      ⁠

   - Build and run the Spring Boot application:

     ⁠ bash
     mvn clean install
     mvn spring-boot:run
      ⁠

3.⁠ ⁠*Frontend Setup (React.js)*:

   - Navigate to the ⁠ frontend ⁠ directory:

     ⁠ bash
     cd frontend
      ⁠

   - Install dependencies and start the development server:

     ⁠ bash
     npm install
     npm start
      ⁠

## Usage

•⁠  ⁠*Access the Frontend*: Open your browser and go to ⁠ http://localhost:3000 ⁠.
•⁠  ⁠*API Endpoints*: The backend API is available at ⁠ http://localhost:8080/api ⁠.

## API Endpoints

•⁠  ⁠*GET* ⁠ /api/entities ⁠: Retrieve all entities
•⁠  ⁠*POST* ⁠ /api/entities ⁠: Create a new entity
•⁠  ⁠*PUT* ⁠ /api/entities/{id} ⁠: Update an existing entity
•⁠  ⁠*DELETE* ⁠ /api/entities/{id} ⁠: Delete an entity
•⁠  ⁠*GET* ⁠ /api/comments/{entityId} ⁠: Get comments for a specific entity
•⁠  ⁠*POST* ⁠ /api/comments ⁠: Add a comment


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---