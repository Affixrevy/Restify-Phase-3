#!/bin/zsh

#TOKEN_JOHN=$(cat ../user/tokens/john_token.txt)
#TOKEN_TERR=$(cat ../user/tokens/terrance_token.txt)
TOKEN_JOE=$(cat ../user/tokens/joemama_token.txt)

http GET http://localhost:8000/api/currentuid/ \
    "Authorization: Bearer $TOKEN_JOE" \
    > temp.json

#cat temp.json | jq .

CURRENT_UID=$(cat temp.json | jq .uid)
echo "$CURRENT_UID"

rm temp.json

http --form POST http://localhost:8000/reservations/create/ \
    "Authorization: Bearer $TOKEN_JOE" \
    "user=$CURRENT_UID" \
    status="pending_awaiting_confirmation" \
    to_book_property=4 \
    start_date="2023-07-01" \
    end_date="2023-07-05"