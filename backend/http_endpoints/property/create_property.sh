#!/bin/zsh

TOKEN_JOHN=$(cat ../user/tokens/john_token.txt)
TOKEN_TERR=$(cat ../user/tokens/terrance_token.txt)

http --form POST http://localhost:8000/properties/create/ \
    "Authorization: Bearer $TOKEN_JOHN" \
    name="A House on Neptune" \
    address="123 Main Road" \
    country="Neptune" \
    city="Neptune City" \
    province="Space" \
    start_date="2023-01-01" \
    end_date="2024-01-01" \
    amenities="No air" \
    description="Literally on Neptune" \
    num_guests=4 \
    num_beds=2 \
    num_baths=2 \
    price=1000 \
    stars=4.3 \
    main_pic@neptune_house.webp

http --form POST http://localhost:8000/properties/create/ \
    "Authorization: Bearer $TOKEN_JOHN" \
    name="Harry's Hut" \
    address="123 Boonies Road" \
    country="Canada" \
    city="Aurora"\
    province="Ontario"\
    start_date="2023-01-01" \
    end_date="2024-01-01" \
    amenities="Nothing" \
    description="Literally in the middle of nowhere" \
    num_guests=4 \
    num_beds=2 \
    num_baths=2 \
    price=5 \
    stars=1.0 \
    main_pic@harrys_hut.webp

http --form POST http://localhost:8000/properties/create/ \
    "Authorization: Bearer $TOKEN_JOHN" \
    name="Arthur's Mansion" \
    address="123 Awesome Road" \
    country="Canada" \
    city="Edmonton" \
    province="Alberta" \
    start_date="2023-01-01" \
    end_date="2024-01-01" \
    amenities="Everything you could ever wish for" \
    description="Welcome to Arthur's Mansion, a luxurious Restify property that will exceed all of your expectations and transport you to a world of unparalleled comfort and style.\n

Located in the heart of a vibrant city, Arthur's Mansion is a stunning architectural masterpiece that boasts sweeping views of the skyline and is surrounded by lush gardens and sprawling lawns. From the moment you arrive, you'll be greeted by the elegant facade of this grand estate, which hints at the opulent interiors that await you inside.\n

As you step through the front door, you'll be awed by the sheer scale and beauty of the space. The foyer is illuminated by a dazzling chandelier and features a dramatic staircase that leads up to the second floor. The living room is a masterpiece of design, with soaring ceilings, intricate moldings, and sumptuous furnishings that invite you to sink in and relax.\n

Arthur's Mansion has nine exquisitely appointed bedrooms, each with its own distinctive style and charm. The master suite is a sanctuary of luxury, with a king-sized bed, a spacious sitting area, and a private balcony that overlooks the lush gardens. The other bedrooms are just as inviting, with plush bedding, comfortable seating areas, and breathtaking views of the city.\n

The gourmet kitchen is a chef's dream, with top-of-the-line appliances, a large center island, and ample counter space for preparing meals. The adjacent dining room is an elegant space, perfect for hosting formal dinners or casual gatherings with friends and family.\n

Outside, the grounds are equally impressive. You can relax by the sparkling pool, soak in the hot tub, or enjoy a game of tennis on the private court. There's also a spacious patio area with plenty of seating, perfect for al fresco dining or evening cocktails under the stars.\n

Arthur's Mansion is the perfect destination for those seeking the ultimate in luxury and sophistication. With its impeccable design, breathtaking views, and endless amenities, this property will leave you feeling pampered, rejuvenated, and completely enchanted. Book your stay today and experience the magic of Arthur's Mansion for yourself." \
    num_guests=18 \
    num_beds=9 \
    num_baths=12 \
    price=2500 \
    stars=4.9 \
    main_pic@mansion.webp

http --form POST http://localhost:8000/properties/create/ \
    "Authorization: Bearer $TOKEN_JOHN" \
    name="Beachfront Villa" \
    address="123 Ocean Drive" \
    city="Miami" \
    province="FL" \
    country="USA" \
    start_date="2023-06-01" \
    end_date="2023-12-07" \
    amenities="Private beach access, swimming pool, jacuzzi, tennis court" \
    description="Experience the ultimate in luxury and relaxation at this beachfront villa located at 123 Ocean Drive, in Miami, Florida, USA. Imagine waking up to the sound of the waves gently lapping against the shore, stepping outside onto your private beach access, and feeling the soft sand between your toes as the sun warms your face.\n

This inviting villa is perfect for a group or family vacation, with four spacious bedrooms and four bathrooms, comfortably accommodating up to eight guests. The villa is well-appointed with luxurious amenities such as a swimming pool, a jacuzzi, and a tennis court, all of which are sure to provide you with endless hours of entertainment and relaxation.\n

Take a refreshing swim in the pool, relax in the jacuzzi, or challenge your friends or family to a game of tennis on the private court. The villa is also equipped with private beach access, so you can enjoy the beauty of the ocean at any time.\n

With breathtaking views of the ocean, this villa is an ideal spot for guests who want to indulge in the beauty of nature while enjoying the comfort of modern amenities. The description provided indicates that the villa is a perfect getaway spot for guests who want to unwind and rejuvenate in a serene and tranquil environment.\n

Book now and get ready to make unforgettable memories that you will cherish forever at this inviting beachfront villa in Miami." \
    num_guests=8 \
    num_beds=4 \
    num_baths=4 \
    price=325 \
    stars=4.6 \
    main_pic@beachfront_villa.webp


http --form POST http://localhost:8000/properties/create/ \
    "Authorization: Bearer $TOKEN_JOHN" \
    name="Mountain Cabin" \
    address="456 Pine Street" \
    city="Aspen" \
    province="CO" \
    country="USA" \
    start_date="2023-12-01" \
    end_date="2023-12-07" \
    amenities="Hot tub, fireplace, BBQ grill" \
    description="Cozy cabin nestled in the mountains" \
    num_guests=6 \
    num_beds=3 \
    num_baths=2 \
    price=200 \
    stars=4.3 \
    main_pic@mountain_cabin.webp


http --form POST http://localhost:8000/properties/create/ \
    "Authorization: Bearer $TOKEN_TERR" \
    name="Luxury Apartment" \
    address="789 Park Avenue" \
    city="New York" \
    province="NY" \
    country="USA" \
    start_date="2023-09-01" \
    end_date="2023-09-07" \
    amenities="Gym, pool, rooftop terrace" \
    description="Elegant apartment in the heart of the city" \
    num_guests=4 \
    num_beds=2 \
    num_baths=2 \
    price=1000 \
    stars=3.9 \
    main_pic@luxury_apartment.webp


http --form POST http://localhost:8000/properties/create/ \
    "Authorization: Bearer $TOKEN_TERR" \
    name="Lakeside Cottage" \
    address="1234 Lakeview Drive" \
    city="Lake Tahoe" \
    province="CA" \
    country="USA" \
    start_date="2023-07-01" \
    end_date="2023-07-07" \
    amenities="Dock, kayak, fishing gear" \
    description="Charming cottage on the shores of Lake Tahoe" \
    num_guests=6 \
    num_beds=3 \
    num_baths=2 \
    price=1200 \
    stars=4.3 \
    main_pic@lakeside_cottage.webp


http --form POST http://localhost:8000/properties/create/ \
    "Authorization: Bearer $TOKEN_TERR" \
    name="Modern Apartment" \
    address="567 Main Street" \
    city="Los Angeles" \
    province="CA" \
    country="USA" \
    start_date="2023-10-01" \
    end_date="2023-10-07" \
    amenities="Gym, pool, rooftop lounge" \
    description="Sleek and stylish apartment in downtown LA" \
    num_guests=4 \
    num_beds=2 \
    num_baths=2 \
    price=650 \
    stars=4.4 \
    main_pic@modern_apartment.webp


http --form POST http://localhost:8000/properties/create/ \
    "Authorization: Bearer $TOKEN_TERR" \
    name="Rustic Cabin" \
    address="789 Forest Road" \
    city="Yellowstone" \
    province="WY" \
    country="USA" \
    start_date="2023-11-01" \
    end_date="2023-11-07" \
    amenities="Wood-burning stove, outdoor fire pit" \
    description="Cozy cabin in the woods near Yellowstone National Park" \
    num_guests=4 \
    num_beds=2 \
    num_baths=1 \
    price=200 \
    stars=4.2 \
    main_pic@rustic_cabin.webp


http --form POST http://localhost:8000/properties/create/ \
    "Authorization: Bearer $TOKEN_TERR" \
    name="Desert Retreat" \
    address="123 Sand Dune Drive" \
    city="Palm Springs" \
    province="CA" \
    country="USA" \
    start_date="2023-04-01" \
    end_date="2023-04-07" \
    amenities="Pool, spa, outdoor kitchen" \
    description="Relaxing oasis in the middle of the desert" \
    num_guests=6 \
    num_beds=3 \
    num_baths=3 \
    price=250 \
    stars=4.7 \
    main_pic@desert_retreat.webp


http --form POST http://localhost:8000/properties/create/ \
  "Authorization: Bearer $TOKEN_JOHN" \
  name="Ski Chalet" \
  address="789 Mountain Road" \
  city="Vail" \
  province="CO" \
  country="USA" \
  start_date="2023-12-20" \
  end_date="2023-12-27" \
  amenities="Hot tub, fireplace, ski-in/ski-out access" \
  description="Luxury chalet with stunning views of the mountains" \
  num_guests=8 \
  num_beds=4 \
  num_baths=4 \
  price=500 \
  stars=4.5 \
  main_pic@ski_chalet.webp

http --form POST http://localhost:8000/properties/create/ \
  "Authorization: Bearer $TOKEN_JOHN" \
  name="Seaside Villa" \
  address="123 Beach Road" \
  city="Santa Monica" \
  province="CA" \
  country="USA" \
  start_date="2023-05-01" \
  end_date="2023-05-07" \
  amenities="Private beach access, swimming pool, outdoor kitchen" \
  description="Mediterranean-style villa steps away from the beach" \
  num_guests=10 \
  num_beds=5 \
  num_baths=5 \
  price=489 \
  stars=4.1 \
  main_pic@seaside_villa.webp