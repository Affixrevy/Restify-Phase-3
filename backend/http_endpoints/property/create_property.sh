#!/bin/zsh

TOKEN=$(cat ../user/tokens/john_token.txt)

http --form POST http://localhost:8000/properties/create/ \
    "Authorization: Bearer $TOKEN" \
    name="A House on Neptune" \
    address="123 Main Road" \
    country="Neptune" \
    start_date="2023-01-01" \
    end_date="2024-01-01" \
    amenities="No air" \
    description="Literally on Neptune" \
    num_guests=4 \
    num_beds=2 \
    num_baths=2 \
    price=1000 \
    main_pic@test.webp

#http POST http://localhost:8000/properties/create/ \
#    "Authorization: Bearer $TOKEN" \
#    name="Harry's Hut" \
#    address="123 Boonies Road Aurora ON" \
#    country="Canada" \
#    start_date="2023-01-01" \
#    end_date="2024-01-01" \
#    amenities="Nothing" \
#    description="Literally in the middle of nowhere" \
#    num_guests=4 \
#    num_beds=2 \
#    num_baths=2 \
#    price=5
#
#http POST http://localhost:8000/properties/create/ \
#    "Authorization: Bearer $TOKEN" \
#    name="Arthur's Mansion" \
#    address="123 Awesome Road" \
#    country="Canada" \
#    start_date="2023-01-01" \
#    end_date="2024-01-01" \
#    amenities="Everything you could ever wish for" \
#    description="Welcome to Arthur's Mansion, a luxurious Restify property that will exceed all of your expectations and transport you to a world of unparalleled comfort and style.
#
#Located in the heart of a vibrant city, Arthur's Mansion is a stunning architectural masterpiece that boasts sweeping views of the skyline and is surrounded by lush gardens and sprawling lawns. From the moment you arrive, you'll be greeted by the elegant facade of this grand estate, which hints at the opulent interiors that await you inside.
#
#As you step through the front door, you'll be awed by the sheer scale and beauty of the space. The foyer is illuminated by a dazzling chandelier and features a dramatic staircase that leads up to the second floor. The living room is a masterpiece of design, with soaring ceilings, intricate moldings, and sumptuous furnishings that invite you to sink in and relax.
#
#Arthur's Mansion has nine exquisitely appointed bedrooms, each with its own distinctive style and charm. The master suite is a sanctuary of luxury, with a king-sized bed, a spacious sitting area, and a private balcony that overlooks the lush gardens. The other bedrooms are just as inviting, with plush bedding, comfortable seating areas, and breathtaking views of the city.
#
#The gourmet kitchen is a chef's dream, with top-of-the-line appliances, a large center island, and ample counter space for preparing meals. The adjacent dining room is an elegant space, perfect for hosting formal dinners or casual gatherings with friends and family.
#
#Outside, the grounds are equally impressive. You can relax by the sparkling pool, soak in the hot tub, or enjoy a game of tennis on the private court. There's also a spacious patio area with plenty of seating, perfect for al fresco dining or evening cocktails under the stars.
#
#Arthur's Mansion is the perfect destination for those seeking the ultimate in luxury and sophistication. With its impeccable design, breathtaking views, and endless amenities, this property will leave you feeling pampered, rejuvenated, and completely enchanted. Book your stay today and experience the magic of Arthur's Mansion for yourself." \
#    num_guests=18 \
#    num_beds=9 \
#    num_baths=12 \
#    price=2500