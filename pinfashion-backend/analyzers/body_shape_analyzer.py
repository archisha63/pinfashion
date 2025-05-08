def analyze_body(data):
    shape = data.get("shape", "hourglass")
    return {
        "shape": shape,
        "message": f"Detected body shape is {shape}. Outfit tips coming soon..."
    }
