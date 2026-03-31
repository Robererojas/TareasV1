from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample route
@app.route('/api/supervision', methods=['GET'])
def get_supervision_data():
    data = {
        'status': 'operational',
        'line_capacity': 100,
        'current_output': 75
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)