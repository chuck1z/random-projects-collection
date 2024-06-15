# JobRecommender - A TensorFlow-powered Job Recommendation API

A real-time job recommendation API built with FastAPI and TensorFlow. It leverages a trained machine learning model to analyze user data and suggest relevant job tasks.

## Features

* **Personalized Job Recommendations:** Based on user data, the API recommends tasks that are likely to be a good fit for the user's skills and interests.
* **Real-Time Predictions:** The model generates recommendations dynamically, ensuring the most up-to-date suggestions.
* **Efficient API:**  Built with FastAPI, the API is lightweight and performant, making it suitable for integration with various applications.

## Getting Started

### Prerequisites

* Python 3.7+
* MySQL server (with a database containing user data)
* TensorFlow 2.x (for loading the model)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/JobRecNet.git
   cd JobRecNet
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Configure database connection:**
   Update the `mysql_config` dictionary in `main.py` with your MySQL database credentials.

4. **Load the model:**
   Ensure you have a trained TensorFlow model file in the `./pleasework` directory.

### Usage
#### Using python
   ```bash
   uvicorn main:app --reload
   ```

#### Using docker
    
    docker build . -t <container_name>
    docker run -p 8080:8080 <container_name> 

#### Testing
**Send POST requests:**
   Use a tool like curl or Postman to send a POST request to the API endpoint `http://localhost:8080/` (unless the port is rerouted using nginx). The request body should contain a JSON object with the following structure:

   ```json
   {
       "userID": 12345 
   }
   ```

   The API will respond with a list of recommended job task titles. 

#### Build using cloudbuild
To use cloudbuild for GCP deployments, you can 

## API Endpoints

* **`/` (POST):** Receives a user ID and returns a list of recommended tasks.

## Deployment

This repo is cloudbuild ready. Just fork this repo and use it as source repository on cloudbuild. Feel free to change the name of the image (default is `jobrec`) and the region (default is `asia-southeast2`)



**Remember to:**
* Replace `your-username` with your actual GitHub username.
* Update the repository URL in the `git clone` command if you host it elsewhere.
* Provide detailed instructions on how to train and load the model.
* Include any additional documentation necessary for your specific project setup.