var app = angular.module("MyApp", []);
app.controller("AlumnosController", function($scope){
	$scope.alumnos = [
		{nombre: "Christian Venegas", telefono: "12345678", curso:"Programación I"},
		{nombre: "Ricardo García", telefono: "23456789", curso:"Programación II"},
		{nombre: "Elizabeth Vargas", telefono: "34567890", curso:"Programación III"},
		{nombre: "Carolina Murillo", telefono: "45678901", curso:"Programación IV"}
	];
	$scope.Save = function (){
		$scope.alumnos.push({nombre:$scope.nuevoAlumno.nombre, telefono:$scope.nuevoAlumno.telefono, curso:$scope.nuevoAlumno.curso})
		$scope.formVisibility = false;
		console.log($scope.formVisibility);
	}

	$scope.ShowForm = function(){
		$scope.formVisibility = true;
		console.log($scope.formVisibility);
	}
});