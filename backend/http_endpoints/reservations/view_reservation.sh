#!/bin/zsh

#TOKEN_JOHN=$(cat ../user/tokens/john_token.txt)
#TOKEN_TERR=$(cat ../user/tokens/terrance_token.txt)
TOKEN_JOE=$(cat ../user/tokens/joemama_token.txt)

http GET http://localhost:8000/reservations/host/view/ \
  "Authorization: Bearer $TOKEN_JOE" \

http GET http://localhost:8000/reservations/guest/view/ \
  "Authorization: Bearer $TOKEN_JOE" \
