#!/bin/zsh

TOKEN_JOHN=$(cat ../user/tokens/john_token.txt)

http PATCH http://localhost:8000/reservations/2/complete/ "Authorization: Bearer $TOKEN_JOHN"
