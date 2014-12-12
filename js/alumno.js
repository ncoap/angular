function AlumnoController($scope){

    $scope.logged = false;

    $scope.usuario = {
        nombre:"Ingeniero Nelson",
        edad:25,
        sexo:"no se"
    }

    $scope.alumnos = [
        {nombre:"Nelson Coqchi Apaza",telefono:"3930542",curso:"Angular con Spring Framework"},
        {nombre:"Ricardo Coqchi Apaza",telefono:"3930542",curso:"Java Web 1"},
        {nombre:"Jorge Coqchi Apaza",telefono:"3930542",curso:"Java Web 2"},
        {nombre:"Carmen Coqchi Apaza",telefono:"25814725",curso:"Informacion de las realidades"},
        {nombre:"Sonia Coqchi Apaza",telefono:"123456789",curso:"Como hablar en publico"},
        {nombre:"Liam Coqchi Meza",telefono:"1479585665",curso:"Comprarme mi carro en las estaciones"}
    ];

}