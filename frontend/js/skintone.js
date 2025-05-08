const skinTones = [
    "#fcecd4", "#fcd5b4", "#f9c89c", "#f4b183", "#f1a066",
    "#e99650", "#e68a3a", "#d17c2c", "#c0701f", "#b3651a",
    "#eed1b9", "#e6b899", "#d9a27e", "#cb8f67", "#bb7a52",
    "#ab6943", "#9b5b35", "#8c4e2a", "#7c4120", "#6e3619"
];

const toneToColors = {
    "#fcecd4": [
        { color: "#ff69b4", name: "Pastel Pink" },
        { color: "#8b008b", name: "Deep Plum" },
        { color: "#ffc0cb", name: "Baby Pink" },
        { color: "#f4a460", name: "Sandy Brown" },
        { color: "#dda0dd", name: "Lavender Blush" }
    ],
    "#fcd5b4": [
        { color: "#8a2be2", name: "Blue Violet" },
        { color: "#daa520", name: "Goldenrod" },
        { color: "#ff7f50", name: "Coral" },
        { color: "#ffd700", name: "Gold" },
        { color: "#db7093", name: "Pink Rose" }
    ],
    "#f9c89c": [
        { color: "#ffb6c1", name: "Light Pink" },
        { color: "#9932cc", name: "Dark Orchid" },
        { color: "#ffa07a", name: "Light Salmon" },
        { color: "#deb887", name: "Burlywood" },
        { color: "#e9967a", name: "Peach" }
    ],
    "#f4b183": [
        { color: "#ff8c69", name: "Soft Coral" },
        { color: "#ba55d3", name: "Orchid" },
        { color: "#d2b48c", name: "Tan" },
        { color: "#f08080", name: "Light Coral" },
        { color: "#ffc3a0", name: "Peach Cream" }
    ],
    "#f1a066": [
        { color: "#ff6347", name: "Tomato" },
        { color: "#dda0dd", name: "Plum" },
        { color: "#ffe4c4", name: "Bisque" },
        { color: "#da70d6", name: "Orchid Blush" },
        { color: "#ffdab9", name: "Peach Puff" }
    ],
    "#e99650": [
        { color: "#dc143c", name: "Crimson" },
        { color: "#ff1493", name: "Deep Pink" },
        { color: "#ffb347", name: "Apricot" },
        { color: "#c71585", name: "Medium Violet" },
        { color: "#ffdead", name: "Navajo White" }
    ],
    "#e68a3a": [
        { color: "#e75480", name: "Dark Pink" },
        { color: "#9932cc", name: "Purple Orchid" },
        { color: "#ffcc99", name: "Peachy Glow" },
        { color: "#b0e0e6", name: "Powder Blue" },
        { color: "#ff69b4", name: "Hot Pink" }
    ],
    "#d17c2c": [
        { color: "#d2691e", name: "Chocolate" },
        { color: "#ff82ab", name: "Cotton Candy" },
        { color: "#ffcba4", name: "Light Apricot" },
        { color: "#dda0dd", name: "Pale Plum" },
        { color: "#c71585", name: "Vibrant Magenta" }
    ],
    "#c0701f": [
        { color: "#c2185b", name: "Raspberry" },
        { color: "#ffb6c1", name: "Blush Pink" },
        { color: "#f5deb3", name: "Wheat" },
        { color: "#bc8f8f", name: "Rosy Brown" },
        { color: "#ffa07a", name: "Sun Kissed" }
    ],
    "#b3651a": [
        { color: "#b22222", name: "Firebrick" },
        { color: "#e9967a", name: "Peach Spice" },
        { color: "#f4a460", name: "Warm Sand" },
        { color: "#ff69b4", name: "Pink Glow" },
        { color: "#cd5c5c", name: "Indian Red" }
    ],
    "#eed1b9": [
        { color: "#ff7f50", name: "Coral Breeze" },
        { color: "#ffb6c1", name: "Light Rose" },
        { color: "#fa8072", name: "Salmon" },
        { color: "#dda0dd", name: "Soft Lavender" },
        { color: "#ffcccb", name: "Blush Coral" }
    ],
    "#e6b899": [
        { color: "#ffa07a", name: "Peachy Pink" },
        { color: "#ff69b4", name: "Hot Pink" },
        { color: "#deb887", name: "Bronzed Nude" },
        { color: "#d8bfd8", name: "Thistle" },
        { color: "#ffe4e1", name: "Misty Rose" }
    ],
    "#d9a27e": [
        { color: "#cd853f", name: "Peru" },
        { color: "#f08080", name: "Rosé" },
        { color: "#fa8072", name: "Soft Salmon" },
        { color: "#bc8f8f", name: "Rosy Tan" },
        { color: "#ffb6b9", name: "Pink Glow" }
    ],
    "#cb8f67": [
        { color: "#b76e79", name: "Rose Dust" },
        { color: "#ff9999", name: "Pink Frost" },
        { color: "#db7093", name: "Blush Wine" },
        { color: "#f4a460", name: "Sunset Sand" },
        { color: "#ffe4b5", name: "Light Moccasin" }
    ],
    "#bb7a52": [
        { color: "#a0522d", name: "Sienna" },
        { color: "#f4a460", name: "Light Sand" },
        { color: "#e9967a", name: "Soft Coral" },
        { color: "#ffe4e1", name: "Delicate Pink" },
        { color: "#cd5c5c", name: "Red Rose" }
    ],
    "#ab6943": [
        { color: "#c04000", name: "Burnt Orange" },
        { color: "#ffa07a", name: "Peach Blush" },
        { color: "#deb887", name: "Golden Beige" },
        { color: "#ff6347", name: "Vibrant Tomato" },
        { color: "#ffcccb", name: "Blushing Petal" }
    ],
    "#9b5b35": [
        { color: "#d2691e", name: "Rusty Brown" },
        { color: "#ff7f50", name: "Coral Pink" },
        { color: "#cd853f", name: "Desert Tan" },
        { color: "#ff9999", name: "Rosé Frost" },
        { color: "#dda0dd", name: "Lilac Shine" }
    ],
    "#8c4e2a": [
        { color: "#a0522d", name: "Copper" },
        { color: "#e9967a", name: "Amber Blush" },
        { color: "#ff69b4", name: "Girly Pink" },
        { color: "#ffe4c4", name: "Light Biscuit" },
        { color: "#bc8f8f", name: "Dusty Rose" }
    ],
    "#7c4120": [
        { color: "#cd5c5c", name: "Brick Rose" },
        { color: "#ffb6c1", name: "Peach Rose" },
        { color: "#d2b48c", name: "Soft Tan" },
        { color: "#fa8072", name: "Glow Salmon" },
        { color: "#da70d6", name: "Soft Orchid" }
    ],
    "#6e3619": [
        { color: "#a0522d", name: "Warm Cocoa" },
        { color: "#f4a460", name: "Golden Caramel" },
        { color: "#ff7f50", name: "Coral Charm" },
        { color: "#ffb6c1", name: "Rosy Pink" },
        { color: "#cd853f", name: "Golden Bronze" }
    ]
};

const skinTonePalette = document.getElementById("skinTonePalette");
const resultSection = document.getElementById("colorRecommendation");
const colorMatchBox = document.getElementById("colorMatchBox");




skinTones.forEach(color => {
    const swatch = document.createElement("div");
    swatch.className = "swatch";
    swatch.style.backgroundColor = color;
    swatch.onclick = () => showColors(color);
    skinTonePalette.appendChild(swatch);
});

function showColors(selectedTone) {
    const matchedColors = toneToColors[selectedTone] || [];
    colorMatchBox.innerHTML = "";

    document.getElementById("selectedToneDisplay").style.backgroundColor = selectedTone;
    document.getElementById("selectedToneDisplay").textContent = `Selected Tone`;
    
    matchedColors.forEach(entry => {
        const colorDiv = document.createElement("div");
        colorDiv.className = "color-box";

        const colorName = document.createElement("p");
        colorName.className = "color-name";
        colorName.textContent = entry.name;

        colorDiv.style.backgroundColor = entry.color;
        colorDiv.appendChild(colorName);
        colorMatchBox.appendChild(colorDiv);
    });

    resultSection.style.display = "block";
}
