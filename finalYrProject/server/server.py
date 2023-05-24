from flask import Flask, jsonify, request, make_response,abort,send_file
# from flask_pymongo import PyMongo
from flask_cors import CORS
from http.server import BaseHTTPRequestHandler,HTTPServer
import os
import io
import datetime
import subprocess
import shutil

detectorify = Flask('DetectOrify')
# detectorify.config['MONGO_URI'] = 'mongodb://127.0.0.1:27017/detectorify'

# mongo = PyMongo(detectorify)

CORS(detectorify)

@detectorify.route('/upload', methods=['POST'])
def upload_file():
    if 'image' not in request.files:
        return 'No file uploaded', 400
    
    file = request.files['image']
    filename = file.filename
    
    if not filename:
        return 'Invalid filename', 400
    
    file.save(os.path.join('uploads', filename))

    subprocess.run(['python', 'detect.py', '--weights', 'last.pt','--conf', '0.90', '--source', f'uploads/{filename}'])
    file_path = os.path.join('runs/detect/exp', filename)
    with open(file_path, 'rb') as f:
        stream = io.BytesIO(f.read())
    blob = stream.getvalue()
    shutil.rmtree('runs/detect/exp')
    return blob, 200

   
if __name__ == '__main__':
    detectorify.run(host='127.0.0.1',port=8085,debug=True)
