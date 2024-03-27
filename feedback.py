from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/get_feedback', methods=['POST'])
def get_feedback():
    feedback_data = request.get_json()

    # Process the feedback data (store in a database, etc.)
    # ...

    # Send email
    send_email(feedback_data)

    return jsonify({'message': 'Feedback received successfully!'})

if __name__ == '__main__':
    app.run(debug=True)


