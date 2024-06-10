class Country {
    constructor(name, lang, greeting, colors, img) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.img = img;
    }

        DisplayColors(){

        document.querySelector("#Color1").style.backgroundColor = this.colors[0];
        document.querySelector("#Color2").style.backgroundColor = this.colors[1];
        document.querySelector("#Color3").style.backgroundColor = this.colors[2];
        
        }
//tried out putting everything in object method, wasn't quite working properly --commented out where used
        H2Information(){
            let h2CountryNode = document.querySelector("#CountryName")
            h2CountryNode.innerText = this.name;
            let h2languageNode = document.querySelector("#OfficialLanguage");
            h2languageNode.innerText = this.lang;
            let h2HelloNode = document.querySelector("#HelloWorld");
            h2HelloNode.innerText = this.greeting;
            let flagNode = document.querySelector("#Flag");
            flagNode.src = this.img;
            document.querySelector("CountryName").innerText = h2CountryNode;
            document.querySelector("OfficialLanguage").innerText = h2languageNode;
            document.querySelector("HelloWorld").innerText = h2HelloNode;

        }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "usaflag.jpg");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "mexicoflag.jpg");
let algeria = new Country("Algeria", "Arabic and Berber", "Marhaban bialealam!", ["blue", "yellow", "red"],"algeriaflag.jpg");
let maldova = new Country("Maldova", "Romanian", "Buna ziua!", ["blue", "yellow", "red"], "maldovaflag.png");
let madagascar = new Country("Madagascar", "Malagasy", "Salama!", ["white", "red", "green"], "madagascarflag.jpg")




function SwitchCountry() {
    let input = document.querySelector("#countrylist").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        let h2CountryNode = document.querySelector("#CountryName")
        h2CountryNode.innerText = country.name;
        let h2languageNode = document.querySelector("#OfficialLanguage");
        h2languageNode.innerText = country.lang;
        let h2HelloNode = document.querySelector("#HelloWorld");
        h2HelloNode.innerText = country.greeting;
        
        //country.H2Information();
        
        let flagNode = document.querySelector("#Flag");
        flagNode.src = country.img;


        country.DisplayColors(usa);
    }
    else if (input === "Mexico") {
        country = mexico;
        let h2CountryNode = document.querySelector("#CountryName")
        h2CountryNode.innerText = country.name;
        let h2languageNode = document.querySelector("#OfficialLanguage");
        h2languageNode.innerText = country.lang;
        let h2HelloNode = document.querySelector("#HelloWorld");
        h2HelloNode.innerText = country.greeting;
        let flagNode = document.querySelector("#Flag");
        flagNode.src = country.img;

        country.DisplayColors();
    }
    else if (input === "Algeria") {
        country = algeria;
        let h2CountryNode = document.querySelector("#CountryName");
        h2CountryNode.innerText = country.name;
        let h2languageNode = document.querySelector("#OfficialLanguage");
        h2languageNode.innerText = country.lang;
        let h2HelloNode = document.querySelector("#HelloWorld");
        h2HelloNode.innerText = country.greeting;
        
        let flagNode = document.querySelector("#Flag");
        flagNode.src = country.img;

        country.DisplayColors();
    }

    else if (input === "Madagascar") {
        country = madagascar;
        let h2CountryNode = document.querySelector("#CountryName")
        h2CountryNode.innerText = country.name;
        let h2languageNode = document.querySelector("#OfficialLanguage");
        h2languageNode.innerText = country.lang;
        let h2HelloNode = document.querySelector("#HelloWorld");
        h2HelloNode.innerText = country.greeting;

        let flagNode = document.querySelector("#Flag");
        flagNode.src = country.img;

        country.DisplayColors();
    }

    else if (input === "Maldova") {
        country = maldova;
        let h2CountryNode = document.querySelector("#CountryName")
        h2CountryNode.innerText = country.name;
        let h2languageNode = document.querySelector("#OfficialLanguage");
        h2languageNode.innerText = country.lang;
        let h2HelloNode = document.querySelector("#HelloWorld");
        h2HelloNode.innerText = country.greeting;

        let flagNode = document.querySelector("#Flag");
        flagNode.src = country.img;

        country.DisplayColors();
    }
}



