#!/bin/zsh

http --form PUT http://localhost:8000/properties/3/upload/ \
  image@bedroom.webp

http --form PUT http://localhost:8000/properties/3/upload/ \
  image@kitchen.webp

http --form PUT http://localhost:8000/properties/3/upload/ \
  image@living.webp

http --form PUT http://localhost:8000/properties/3/upload/ \
  image@sun.webp

http --form PUT http://localhost:8000/properties/3/upload/ \
  image@washroom.webp