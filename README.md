# Motherly

Motherly is a user-friendly application designed to help parents keep track of their children's medical records. With Motherly, you can easily manage and access important health information, ensuring you always have your child's medical history at your fingertips.

## Features

- **Medical Records Management:** Store and organize medical records for each child.
- **Vaccination Records:** Record and monitor vaccination schedules.
- **Health Alerts:** Receive notifications for upcoming vaccinations.
- **Secure Storage:** Ensure all medical data is securely stored and easily accessible.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/motherly.git
    cd motherly
    ```

2. **Install client dependencies:**

    ```bash
    cd client
    npm install
    ```

3. **Install server dependencies:**

    ```bash
    cd ../server
    npm install
    ```

4. **Setup your .env file:**

    ```
    PORT = 3000
    MONGO_URI = ...
    ```

### Running the Application

1. **Start the client:**

    ```bash
    cd client
    npm run dev
    ```

2. **Start the server:**

    ```bash
    cd ../server
    npm run dev
    ```

The application should now be running, and you can access it at `http://localhost:3000` for the client interface.


## Acknowledgements

- Insert contributors here...
- Special thanks to the open-source community for their invaluable resources and tools.

---