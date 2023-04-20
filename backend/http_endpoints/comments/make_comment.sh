
TOKEN_JOHN=$(cat ../user/tokens/john_token.txt)
TOKEN_TERR=$(cat ../user/tokens/terrance_token.txt)
TOKEN_JOE=$(cat ../user/tokens/joemama_token.txt)

http POST http://localhost:8000/comments/create/ \
    subject_type="user" \
    subject_id=3 \
    reservation_id=2 \
    content="Joe was an amazing guest. Even cleaned before he left." \
    Authorization:"Bearer $TOKEN_JOHN"


http POST http://localhost:8000/comments/create/ \
    subject_type="property" \
    subject_id=3 \
    reservation_id=2 \
    content="Arthur's mansion was the most amazing vacation experience ever. LETS GO OILERS!!!" \
    Authorization:"Bearer $TOKEN_JOE"

http POST http://localhost:8000/comments/reply/ thread_id=2 content="YES! GO OILERS" Authorization:"Bearer $TOKEN_JOHN"

http POST http://localhost:8000/comments/reply/ thread_id=2 content="The kings suck" Authorization:"Bearer $TOKEN_JOE"




