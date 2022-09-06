"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        Area.retangulo = (base, altura) => base * altura;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
