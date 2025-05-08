# analyzers/skin_analyzer.py

from analyzers.coloranalyzer import get_suitable_colors

def analyze_skin(data):
    skin_tone = data.get("skin_tone", "")
    return get_suitable_colors(skin_tone)
