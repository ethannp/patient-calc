function onChange() {
    try {
        let mdy = document.getElementById("date").value.split("/");
        let bday = new Date(mdy[2], mdy[1]-1, mdy[0]);
        let years = Math.floor(Math.abs(new Date() - bday)/31536000000);
        if (!Number.isInteger(years) || mdy.length != 3) {
            throw new Error();
        }
        document.getElementById("age").innerHTML = years;
    }
    catch (e) {
        document.getElementById("age").innerHTML = "";
    }

    try {
        let height = parseInt(document.getElementById("feet").value) * 12 + parseInt(document.getElementById("inches").value);
        let weight = parseInt(document.getElementById("weight").value);
        let bmi = 703.0 * weight / (height * height);
        document.getElementById("bmi").innerHTML = Math.round(bmi * 10) / 10;
    }
    catch (e) {
        document.getElementById("bmi").innerHTML = "";
    }
}