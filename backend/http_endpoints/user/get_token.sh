#!/bin/zsh

http POST http://localhost:8000/api/token/ \
    username="johndoe" \
    password="secret" \
    > john_temp.json

cat john_temp.json | jq -r '.access' \
    > tokens/john_token.txt

cat john_temp.json | jq -r '.refresh' \
    > tokens/john_refresh.txt

rm john_temp.json

echo "\nJOHN:"
cat tokens/john_token.txt
cat tokens/john_refresh.txt

http POST http://localhost:8000/api/token/ \
    username="terrance" \
    password="jackisawesome" \
    > terr_temp.json

cat terr_temp.json | jq -r '.access' \
    > tokens/terrance_token.txt
cat terr_temp.json | jq -r '.refresh' \
    > tokens/terrance_refresh.txt

rm terr_temp.json

echo "\nTERRANCE:"
cat tokens/terrance_token.txt
cat tokens/terrance_refresh.txt

http POST http://localhost:8000/api/token/ \
    username="joemama" \
    password="12345678" \
    > joe_temp.json

cat joe_temp.json | jq -r '.access' \
    > tokens/joemama_token.txt
cat joe_temp.json | jq -r '.refresh' \
    > tokens/joemama_refresh.txt

rm joe_temp.json

echo "\nJOEMAMA"
cat tokens/joemama_token.txt
cat tokens/joemama_refresh.txt
