#!/bin/zsh

TOKEN_JOHN=$(cat ../../user/tokens/john_token.txt)

http --form PUT http://localhost:8000/properties/3/upload/ \
  "Authorization: Bearer $TOKEN_JOHN" \
  image@bedroom.webp

http --form PUT http://localhost:8000/properties/3/upload/ \
  "Authorization: Bearer $TOKEN_JOHN" \
  image@kitchen.webp

http --form PUT http://localhost:8000/properties/3/upload/ \
  "Authorization: Bearer $TOKEN_JOHN" \
  image@living.webp

http --form PUT http://localhost:8000/properties/3/upload/ \
  "Authorization: Bearer $TOKEN_JOHN" \
  image@sun.webp

http --form PUT http://localhost:8000/properties/3/upload/ \
  "Authorization: Bearer $TOKEN_JOHN" \
  image@washroom.webp