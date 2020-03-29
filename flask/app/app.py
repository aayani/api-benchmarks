from flask import Flask, request, Response

def create_app():
    app = Flask(__name__)
    
    @app.route('/', methods=['GET'])
    def hello():
        return Response('Hello world from flask!', mimetype='text/plain')

    @app.errorhandler(404)
    def not_found(error):
        return Response('Cannot ' + request.method + ' ' + request.path, 404, mimetype='text/plain')

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='0.0.0.0')
