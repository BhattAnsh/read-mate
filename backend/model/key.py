from dotenv import load_dotenv
import os

# Load environment variables from the .env file
load_dotenv()

# Access the API key
API_KEY = os.getenv("GOOGLE_API_KEY")

# Use the API key in your project
print(f"My API key: {API_KEY}")