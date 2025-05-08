

def generate_reply(user_input):
    user_input = user_input.lower()

    # Outfit Matching
    if "hello"in user_input or  "hie" in user_input or  "hey" in user_input or"hi" in user_input:
        return "Hey beauty! ✨ How can I style you today?"
    elif "blue jeans" in user_input:
        return "Pair your blue jeans with a white crop top, silver hoops, and sneakers! 💙👟"
    elif "black jeans" in user_input:
        return "Try a pastel or red top with black jeans. Add a belt for a chic look! 🖤✨"
    elif "white trousers" in user_input:
        return "Go for a bright or floral top with white trousers — classy and clean! 🤍🌸"
    elif "red top" in user_input or "cherry red top" in user_input:
        return "Black, beige, or white bottoms work perfectly with a red top. Add gold accessories! ❤️✨"
    elif "crop top" in user_input and "skirt" in user_input:
        return "A high-waisted A-line or pleated skirt goes so well with a crop top! 💃🎀"
    elif "denim on denim" in user_input:
        return "Yes girl! Just mix light and dark washes, and add bold accessories. 👖🧥"
    elif "green pants" in user_input:
        return "Pair green pants with a white, black, or pastel pink top. Add hoops for style! 🌿💗"
    elif "white dress" in user_input and "jacket" in user_input:
        return "Try a denim or pastel bomber jacket over your white dress! 🎀🧥"
    elif "trousers" in user_input and "cherry red" in user_input:
        return "Beige, black, or even tan trousers will slay with a cherry red top! 🔥👠"
    elif "floral shirt" in user_input and "printed pants" in user_input:
        return "Avoid overdoing it! If your shirt is loud, keep the pants subtle 🌼🧘‍♀️"

    # Occasion-Based Styling
    elif "college" in user_input:
        return "High-waisted jeans, a tee, and sneakers are perfect for college. Add a backpack! 🎒👟"
    elif "office" in user_input:
        return "Try a blazer, tucked-in blouse, and tailored pants for boss vibes! 💼👠"
    elif "date" in user_input:
        return "A midi dress or jeans with a satin top is perfect for a date! 💌💄"
    elif "wedding" in user_input:
        return "Go for a pastel lehenga, anarkali, or saree with heavy jhumkas and soft curls! 💍🌸"
    elif "beach" in user_input:
        return "A flowy maxi dress, hat, and cute flats are beach-perfect! 🌊👒"
    elif "gym" in user_input:
        return "Go for high-waisted tights, a sports bra or tank top, and trainers. 💪💜"
    elif "brunch" in user_input:
        return "Try a cute sundress, straw bag, and nude sandals — light & lovely! 🥐🌼"
    elif "birthday" in user_input:
        return "Wear a sequin top, leather skirt, and heels — it's your time to shine! 🎉✨"
    elif "airport" in user_input:
        return "A matching co-ord set or joggers with a sweatshirt = comfy & cute 💺✈️"
    elif "family dinner" in user_input:
        return "A kurti with jeans or palazzos gives elegant and comfy vibes. 🍽️❤️"

    # Body Shape / Comfort
    elif "pear" in user_input and "body" in user_input:
        return "Go for A-line skirts, boat neck tops, and flared pants. Balance your shape! 🍐👗"
    elif "hourglass" in user_input:
        return "Wear body-hugging or belted outfits to flaunt your curves 💃🔥"
    elif "comfortable" in user_input and "summer" in user_input:
        return "Flowy dresses, cotton shirts, and wide-legged pants are summer musts! ☀️👒"
    elif "modest" in user_input:
        return "Try full-sleeve tops, high-neck dresses, or maxi skirts with layers 🌸💫"
    elif "look taller" in user_input:
        return "Wear vertical stripes, high-waisted pants, and nude heels for that tall illusion! 📏👠"
    elif "look slimmer" in user_input:
        return "Dark colors, V-neck tops, and monochrome outfits help you look slimmer ✨🖤"
    elif "plus size" in user_input:
        return "Empire waist dresses and structured outfits are amazing for plus size queens 💪💖"
    elif "short girls" in user_input:
        return "Cropped jackets, high-waist pants, and pointed shoes are great for petite frames 👢👗"
    elif "broad shoulders" in user_input:
        return "Try V-necks, soft fabrics, and avoid shoulder pads 💫🧣"
    elif "heavy bust" in user_input:
        return "Go for wrap tops, square necks, and avoid high necklines. Balance is key! 🎀"

    # Color / Pattern Related
    elif "lavender" in user_input:
        return "Lavender goes with white, beige, mint green, and even grey 💜🤍"
    elif "mix prints" in user_input:
        return "Yes, but balance it! One bold print + one subtle pattern works best 🎨👚"
    elif "beige trousers" in user_input:
        return "Pair beige with black, red, or even light blue tops! 💼🌸"
    elif "white in winter" in user_input:
        return "Totally! Layer it with cozy beige, brown, or black tones ❄️🧥"
    elif "black" in user_input and "navy blue" in user_input:
        return "Yes, especially with a pop of white or silver to break the combo 🖤💙"
    elif "neon dress" in user_input and "shoes" in user_input:
        return "Pair with neutral shoes like beige or white — let the dress pop! 💚👟"
    elif "pastel green" in user_input:
        return "Pastel green is trending! Match with white, nude, or lilac 💚💜"
    elif "nail color" in user_input and "red outfit" in user_input:
        return "Go for nude, gold, black, or even a matching red mani 💅❤️"
    elif "brown and black" in user_input:
        return "Yes! Just mix different textures or shades to make it intentional 🤎🖤"
    elif "lipstick" in user_input and "yellow dress" in user_input:
        return "Try nude, peachy pink, or a soft coral lip with yellow 💄💛"

    # Accessories / Styling
    elif "lehenga" in user_input and "accessories" in user_input:
        return "Statement earrings, maang tikka, and bangles go perfectly with a lehenga 💫💍"
    elif "bag" in user_input and "formal" in user_input:
        return "A structured tote or clutch works well with a formal outfit 👜🖤"
    elif "earrings" in user_input and "short hair" in user_input:
        return "Go for danglers or big hoops to show off those pretty ears! ✨👂"
    elif "black dress" in user_input:
        return "Add red lipstick, heels, and statement jewelry — instant glam! 🖤💋"
    elif "hairstyle" in user_input and "saree" in user_input:
        return "Go for a sleek bun, soft curls, or side braid with your saree 💇‍♀️🌺"
    elif "belt" in user_input and "dress" in user_input:
        return "Use a thin metallic or wide waist belt to define your silhouette! 🔗🎀"
    elif "sunglasses" in user_input and "round face" in user_input:
        return "Try angular or cat-eye frames to balance your round face 😎💗"
    elif "heels" in user_input and "jeans" in user_input:
        return "Block heels or stilettos look fab with skinny or mom jeans 👠👖"
    elif "sneakers" in user_input and "dress" in user_input:
        return "Yes girl! It’s a trendy street-style vibe — cute & comfy 🏙️👗"
    elif "layer necklaces" in user_input:
        return "Start with a choker, then add mid and long chains — perfect with deep necklines 💖📿"

    # Default
    else:
        return "Hmm... I couldn't find a match. Try rephrasing or asking about a style, color, or occasion 💬💖"
