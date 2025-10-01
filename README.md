Features :-------- >



The backend exposes a REST API for quizzes.

The frontend fetches data from the API and shows interactive questions.

Users can pick a quiz, choose an answer, and immediately see if they are correct.

A clean, simple workflow makes it easy to extend and add more quizzes.

Workflow of the Application:---- >> 


On load, the frontend calls the backend endpoint /api/quizzes to fetch a list of available quizzes.

The user selects a quiz, and the frontend fetches the full quiz details from /api/quizzes/:id.

The user selects an answer and submits it. The frontend sends the answer to the backend via POST /api/quizzes/:id/submit.

The backend checks the answer against the stored correct option and responds with whether it is correct or wrong.

The frontend displays the result instantly (Correct / Wrong) along with the correct answer.


API Endpoints :------>



GET /api/quizzes → Get all quizzes (without answers).

GET /api/quizzes/:id → Get a single quiz by ID.

POST /api/quizzes/:id/submit → Submit an answer and receive feedback.

GET / → Root route, returns JSON with API inf
