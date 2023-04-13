#!/bin/zsh

http POST http://localhost:8000/api/token/ \
    username="johndoe" \
    password="secret" \
    | jq -r '.access' \
    > tokens/john_token.txt

echo "\nJOHN:"
cat tokens/john_token.txt

http POST http://localhost:8000/api/token/ \
    username="terrance" \
    password="jackisawesome" \
    | jq -r '.access' \
    > tokens/terrance_token.txt

echo "\nTERRANCE:"
cat tokens/terrance_token.txt

http POST http://localhost:8000/api/token/ \
    username="joemama" \
    password="12345678" \
    | jq -r '.access' \
    > tokens/joemama_token.txt

echo "\nJOEMAMA"
cat tokens/joemama_token.txt