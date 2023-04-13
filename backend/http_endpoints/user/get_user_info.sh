#!/bin/zsh

TOKEN=$(cat $1)

http GET http://localhost:8000/api/currentuid/ \
    "Authorization: Bearer $TOKEN" \
    > temp.json

cat temp.json | jq .

CURRENT_UID=$(cat temp.json | jq .uid)
echo $CURRENT_UID

rm temp.json

http GET http://localhost:8000/api/view/$CURRENT_UID \
    "Authorization: Bearer $TOKEN"