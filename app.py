from flask import Flask, render_template

# Initialize Flask app
app = Flask(__name__)

# Define route for homepage
@app.route('/')
def home():
    return render_template('index.html')

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
