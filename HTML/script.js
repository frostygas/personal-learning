class App
{

    runApplication() {
        console.log("hello world");
        this.appnaam = "ungabunga"
        let versienummer = 4.6
        this.versiedatum = "9 nov"
        this.autheur = "gay boi"
        this.copyright = "boykissers inc"
        this.distributer = "the conerter corparation"
        this.darkmode = false
        console.log("app:" + this.appnaam);
        console.log("vevrsion:" + versienummer);
        console.log("date:" + this.versiedatum);
        console.log("auth:" + this.autheur);
        console.log("copyright:" + this.copyright);
        console.log("distributer" + this.distributer);
        console.log("darkmode:" + this.darkmode);
    }
}
let app = new App();
app.runApplication();
console.log(app.appnaam)