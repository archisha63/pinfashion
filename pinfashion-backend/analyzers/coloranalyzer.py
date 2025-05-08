

def get_suitable_colors(skin_tone):
    color_suggestions = {
        "fair": ["Pastel pink", "Baby blue", "Lavender", "Peach"],
        "light": ["Soft green", "Sky blue", "Coral", "Ivory"],
        "medium": ["Turquoise", "Mauve", "Olive green", "Mustard"],
        "olive": ["Emerald", "Burnt orange", "Wine red", "Cream"],
        "tan": ["Bronze", "Teal", "Charcoal", "Terracotta"],
        "golden": ["Maroon", "Deep yellow", "Rust", "Navy"],
        "deep": ["Cobalt blue", "Ruby red", "Plum", "Rose gold"],
        "honey": ["Mustard", "Brick red", "Olive", "Dusky pink"],
        "caramel": ["Copper", "Warm beige", "Forest green", "Golden brown"],
        "brown": ["Jade green", "Chocolate", "Amber", "Champagne"]
    }

    return {
        "skin_tone": skin_tone,
        "suitable_colors": color_suggestions.get(skin_tone.lower(), ["No match found"])
    }
