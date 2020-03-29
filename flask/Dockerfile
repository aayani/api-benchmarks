FROM python:3-alpine

WORKDIR /usr/src/app

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY app ./

CMD gunicorn --workers 1 --bind 0.0.0.0:5000 wsgi:app
