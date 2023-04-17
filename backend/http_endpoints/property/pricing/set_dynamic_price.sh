#!/bin/zsh

TOKEN_JOHN=$(cat ../../user/tokens/john_token.txt)

http POST http://localhost:8000/properties/2/daily_prices/2023-07-01/2023-07-07/ price:=100 Authorization:"Bearer $TOKEN_JOHN"

http http://localhost:8000/properties/2/daily_prices/2023-06-28/2023-07-03/
