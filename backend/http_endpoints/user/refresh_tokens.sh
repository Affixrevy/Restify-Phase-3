#!/bin/zsh

REFRESH_JOHN=$(cat tokens/john_refresh.txt)
REFRESH_TERR=$(cat tokens/terrance_refresh.txt)
REFRESH_JOE=$(cat tokens/joemama_refresh.txt)

http POST http://localhost:8000/api/token/refresh/ \
    refresh="$REFRESH_JOHN" | jq -r .access > tokens/john_token.txt

NEW_JOHN=$(cat tokens/john_token.txt)

http POST http://localhost:8000/api/token/refresh/ \
    refresh="$REFRESH_TERR" | jq -r .access > tokens/terrance_token.txt

NEW_TERR=$(cat tokens/terrance_token.txt)

http POST http://localhost:8000/api/token/refresh/ \
    refresh="$REFRESH_JOE" | jq -r .access > tokens/joemama_token.txt

NEW_JOE=$(cat tokens/joemama_token.txt)

http POST http://localhost:8000/api/token/verify/ \
    token="$NEW_JOHN"

http POST http://localhost:8000/api/token/verify/ \
    token="$NEW_TERR"

http POST http://localhost:8000/api/token/verify/ \
    token="$NEW_JOE"
