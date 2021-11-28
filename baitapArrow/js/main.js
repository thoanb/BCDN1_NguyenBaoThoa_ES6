const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon","saffron", "fuschia", "cinnabar" ]

loadColor = color => {
    let content = '';
    for (let i = 0; i< color.length; i++){
        content += `
        <button class="color-button ${color[i]}"></button>
        `
    }
    document.querySelector("#colorContainer").innerHTML = content;
}
loadColor(colorList);

let btnContainer = document.getElementById("colorContainer");
        
let btns = btnContainer.getElementsByClassName("color-button");

for (let i = 0; i < btns.length; i++){
    let color = colorList[i];

    btns[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("active");
        //console.log(active);
        document.getElementById('house').className = "house " + color;

        //If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        //Add the active class to the active button
        this.className += " active";
    });

}
