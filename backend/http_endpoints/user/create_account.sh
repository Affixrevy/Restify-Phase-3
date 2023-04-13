#!/bin/zsh

http POST http://localhost:8000/api/register/ \
  first_name="John" \
  last_name="Doe" \
  email="john.doe@example.com" \
  phone_num=5555551234 \
  password="secret" \
  password2="secret" \
  username="johndoe"

http POST http://localhost:8000/api/register/ \
  first_name="Terrance" \
  last_name="Chan" \
  email="terrance.chan@example.com" \
  phone_num=5555552234 \
  password="jackisawesome" \
  password2="jackisawesome" \
  username="terrance"

http POST http://localhost:8000/api/register/ \
  first_name="Joe" \
  last_name="Mama" \
  email="joe.mama@example.com" \
  phone_num=5555553234 \
  password="12345678" \
  password2="12345678" \
  username="joemama"

#\
#  avatar="$(./avatar.jpg)"