#!/bin/bash

source ./venv/bin/activate
python3 backend/restify/manage.py makemigrations
python3 backend/restify/manage.py migrate
python3 backend/restify/manage.py runserver