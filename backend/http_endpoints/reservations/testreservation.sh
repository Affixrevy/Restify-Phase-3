#!/bin/zsh

TOKEN_JOHN=$(cat ../user/tokens/john_token.txt)
TOKEN_TERR=$(cat ../user/tokens/terrance_token.txt)
TOKEN_JOE=$(cat ../user/tokens/joemama_token.txt)

http GET http://localhost:8000/api/currentuid/ \
    "Authorization: Bearer $TOKEN_JOE" \
    > temp.json

#cat temp.json | jq .

JOE_UID=$(cat temp.json | jq .uid)
echo "$JOE_UID"

rm temp.json

http GET http://localhost:8000/api/currentuid/ \
    "Authorization: Bearer $TOKEN_TERR" \
    > temp.json

#cat temp.json | jq .

TERR_UID=$(cat temp.json | jq .uid)
echo "$TERR_UID"

rm temp.json

http POST http://localhost:8000/reservations/create/ \
    "Authorization: Bearer $TOKEN_JOE" \
    "user=$JOE_UID" \
    status="pending_awaiting_confirmation" \
    to_book_property=2 \
    start_date="2023-07-01" \
    end_date="2023-07-05"

http PATCH http://localhost:8000/reservations/3/update/ \
    "Authorization: Bearer $TOKEN_JOHN" \
    status=confirmed

http POST http://localhost:8000/reservations/create/ \
    "Authorization: Bearer $TOKEN_TERR" \
    "user=$TERR_UID" \
    status="pending_awaiting_confirmation" \
    to_book_property=2 \
    start_date="2023-07-03" \
    end_date="2023-07-09"

http PATCH http://localhost:8000/reservations/3/cancel/ \
    "Authorization: Bearer $TOKEN_JOE"

http PATCH http://localhost:8000/reservations/3/confirmcancel/ \
    "Authorization: Bearer $TOKEN_JOHN"

http POST http://localhost:8000/reservations/create/ \
    "Authorization: Bearer $TOKEN_TERR" \
    "user=$TERR_UID" \
    status="pending_awaiting_confirmation" \
    to_book_property=2 \
    start_date="2023-07-03" \
    end_date="2023-07-09"

http PUT http://localhost:8000/reservations/4/terminate/ \
    "Authorization: Bearer $TOKEN_JOHN"



