#!/bin/zsh

TOKEN=$(cat tokens/john_token.txt)

http GET http://localhost:8000/api/currentuid/ \
    "Authorization: Bearer $TOKEN" \
    > temp.json

#cat temp.json | jq .

CURRENT_UID=$(cat temp.json | jq .uid)
echo $CURRENT_UID

rm temp.json