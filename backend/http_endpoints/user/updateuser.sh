#!/bin/zsh
echo "\nREADING TOKEN"
TOKEN=$(cat $1)

echo "\nGETTING UID"
http GET http://localhost:8000/api/currentuid/ \
    "Authorization: Bearer $TOKEN" \
    > temp.json

cat temp.json | jq .

CURRENT_UID=$(cat temp.json | jq .uid)
echo $CURRENT_UID

rm temp.json

echo "\nMAKING UPDATE REQUEST"
http PUT http://localhost:8000/api/update/profile/"$CURRENT_UID" \
    "Authorization: Bearer $TOKEN" \
    first_name="Spongebob" \
    last_name="Squarepants" \
    phone_num=1234567890 \
    email="Squidward@underthesea.com"

