// Collections

// Projects: {
// 	_id: <ObjectId>,
// 	name: String,
// 	description: String,
// 	generalObjective: String,
// 	specificObjectives: String,
// 	budget: float,
// 	startDate: timestamp,
// 	endDate: timestamp,
//     dedicationHours: float,
// 	isActive: boolean, //Active, Inactive
// 	generalStatus: string, //Inicio, ejecución, cierre
// 	projectManajer: {_id: <ObjectId>},
// 	student: [{
// 		_id: <ObjectId>,
// 		}],
// 	projectProgress: [{
// 		_id: <ObjectId>,
// 		}],
// 	created_at: timestamp,
// 	updated_at: timestamp,
// 	deleted_at: timestamp
// }

db.projects.insertOne({
    // id :> defined by mongo
    name: "Canal de pruebas hydrodinámicas",
    description: "Cración de un canal para certificación de embarcaciones",
	generalObjective: "Creación del canal de pruebas",
	specificObjectives: "Telemetria del canal,Mecanismo del canal,Validacion",
	budget: 1000000,
	startDate: new Date("2021-09-19T09:57:00"),
	endDate: new Date("2021-09-19T09:57:00"),
    dedicationHours: 4,
	isActive: 1, //Active :1, Inactive:0
	generalStatus: "Inicio", //Inicio, ejecución, cierre
    //------------ Relaciones----------------------
        projectManajer: 1,
        student: [2,3],
        projectProgress: 1,

	created_at: new Date("2021-09-19T09:57:00"),
	updated_at: new Date("2021-09-19T09:57:00"),
	deleted_at: null
})



// Students: {
// 	_id: <ObjectId>,
// 	name: String,
// 	career: String,
// 	cellphone: String,
// 	admissionDate: timestamp,
//     userCode: String,
// 	password: String,
// 	salt: String,
//     userType: String,
// 	created_at: timestamp,
// 	updated_at: timestamp,
// 	deleted_at: timestamp
// }

// Students collection

db.students.insertOne({
    // id :> defined by mongo
	name: "Cesar",
	career: "Ingeniería de control",
	cellphone: "321692047",
	admissionDate: new Date("2021-09-19T09:57:00"),
    userCode: "cesarospina",
	password: "cesar123",
	salt: "as32dasaD12ASDASDawsdaSAdSda789",
    userType: "student",
	created_at: new Date("2021-09-21T09:57:00"),
	updated_at: new Date("2021-09-21T09:57:00"),
	deleted_at: null
})


// ProjectManagers

// ProjectManagers: {
// 	_id: <ObjectId>,
// 	name: String,
//     userCode: String,
// 	password: String,
// 	salt: String,
//     userType: String,
// 	created_at: timestamp,
// 	updated_at: timestamp,
// 	deleted_at: timestamp
// }

db.projectsManager.insertOne({
	name: "Roberto Osorio",
    userCode: "robertoo",
	password: "roberto123",
	salt: "as32dasaD12AweASDawsdaSAdSda789",
    userType: "teacher",
	created_at: new Date("2021-09-19T09:57:00"),
	updated_at: new Date("2021-09-19T09:57:00"),
	deleted_at: null
})


// projectProgress collection

// ProjectProgress: {
// 	_id: <ObjectId>,
// 	progressInformation: String,
// 	observationNotes: String,
// 	projectPhase: String
// }

db.projectProgress.insertOne({
	progressInformation: "String",
	observationNotes: "Excelente",
	projectPhase: "Inicio"
})


// Insert MANY


db.projects.insertMany([
	{
		// id :> defined by mongo
		name: "Intrerfaz telemetría global",
		description: "CreaciónTelemetria",
		generalObjective: "Creación del canal de pruebas",
		specificObjectives: ["Sensores","Insterfaz"],
		budget: 1000000,
		startDate: new Date("2021-09-15T09:57:00"),
		endDate: new Date("2022-09-15T23:59:00"),
		dedicationHours: 5,
		isActive: 0, //Active :1, Inactive:0
		generalStatus: "Finalizacion", //Inicio, ejecución, cierre
		//------------ Relaciones----------------------
			projectManajer: 2,
			student: [1,4],
			projectProgress: [2,3],
		created_at: new Date("2021-09-15T09:57:00"),
		updated_at: new Date("2021-09-15T09:57:00"),
		deleted_at: null
	},
	{
		// id :> defined by mongo
		name: "Controlador Motor",
		description: "Creación de control Motor",
		generalObjective: "Creación del canal de pruebas",
		specificObjectives: ["Curvas calibracion","Tipos de control","Validacion"],
		budget: 3000000,
		startDate: new Date("2021-09-30T09:57:00"),
		endDate: new Date("2022-05-19T23:59:00"),
		dedicationHours: 6,
		isActive: 1, //Active :1, Inactive:0
		generalStatus: "Desarrollo", //Inicio, ejecución, cierre
		//------------ Relaciones----------------------
			projectManajer: 3,
			student: [1,3],
			projectProgress: 4,
	
		created_at: new Date("2021-09-30T09:57:00"),
		updated_at: new Date("2021-09-30T09:57:00"),
		deleted_at: null
	}
])

// Students

db.students.insertMany([
	{
    // id :> defined by mongo
	name: "Cesar Ospina",
	career: "Ingeniería de control",
	cellphone: "321692047",
	admissionDate: new Date("2021-09-21T19:35:00"),
    userCode: "cesarospina",
	password: "cesar123",
	salt: "as32dasaD12ASDASDawsdaSAdSda789",
    userType: "student",
	created_at: new Date("2021-09-21T19:35:00"),
	updated_at: new Date("2021-09-21T19:35:00"),
	deleted_at: null
	},
	{
    // id :> defined by mongo
	name: "Luis Arenas",
	career: "Ingeniería de control",
	cellphone: "320489741",
	admissionDate: new Date("2021-09-19T09:57:00"),
    userCode: "luismi",
	password: "luis123",
	salt: "as32das123aD12ASDASDawsdaSAdSda",
    userType: "student",
	created_at: new Date("2021-09-30T12:57:00"),
	updated_at: new Date("2021-09-30T12:57:00"),
	deleted_at: null
	},
	{
    // id :> defined by mongo
	name: "David Romero",
	career: "Ingeniería Forestal",
	cellphone: "320589742",
	admissionDate: new Date("2021-09-21T09:57:00"),
    userCode: "dromero",
	password: "david123",
	salt: "as32dasaD12ASDASDIOsdaSAdSda789",
    userType: "student",
	created_at: new Date("2021-09-21T09:57:00"),
	updated_at: new Date("2021-09-21T09:57:00"),
	deleted_at: null
	},
	{
    // id :> defined by mongo
	name: "Juan Silva",
	career: "Ingeniería mecanica",
	cellphone: "321692047",
	admissionDate: new Date("2021-10-14T15:20:00"),
    userCode: "cesarospina",
	password: "cesar123",
	salt: "as32dasaD12ASDASDawsdaSAdSda789",
    userType: "student",
	created_at: new Date("2021-10-14T15:20:00"),
	updated_at: new Date("2021-10-14T15:20:00"),
	deleted_at: null
	}
])

// Insert Many - Projects manager

db.projectsManager.insertMany([
	{
	name: "Roberto Osorio",
    userCode: "robertoo",
	password: "roberto123",
	salt: "as32dasaD12AweASDawsdaSAdSda789",
    userType: "teacher",
	created_at: new Date("2021-09-19T09:00:00"),
	updated_at: new Date("2021-09-19T09:00:00"),
	deleted_at: null
	},
	{
	name: "Freddy Valencia",
    userCode: "freddyv",
	password: "freddy123",
	salt: "as32dasaD12AweASDawsdaSAdSda789",
    userType: "teacher",
	created_at: new Date("2020-09-19T10:57:00"),
	updated_at: new Date("2020-09-19T10:57:00"),
	deleted_at: null
	},
	{
	name: "Monica Ardilla",
    userCode: "monicaa",
	password: "monica123",
	salt: "as32dREaD12AweASDawsdaSAdSda789",
    userType: "teacher",
	created_at: new Date("2019-01-29T11:30:00"),
	updated_at: new Date("2019-01-29T11:30:00"),
	deleted_at: null
	},
	{
	name: "Federico Montolla",
    userCode: "federicom",
	password: "federico123",
	salt: "as32dasaD12AweAS123DawsdaSda789",
    userType: "teacher",
	created_at: new Date("2010-09-09T20:14:00"),
	updated_at: new Date("2010-09-09T20:14:00"),
	deleted_at: null
	},
])

// Insert Many - Projects progress

db.projectProgress.insertMany([
	{
	progressInformation: "Documetación",
	observationNotes: "Excelente",
	projectPhase: "Inicio"
	},
	{
	progressInformation: "Estado del arte",
	observationNotes: "Excelente",
	projectPhase: "Inicio"
	},
	{
	progressInformation: "Documentación",
	observationNotes: "Falta más referencias",
	projectPhase: "Inicio"
	},
	{
	progressInformation: "Estado del arte",
	observationNotes: "Mediocre, hacer un mejor estado del arte",
	projectPhase: "Inicio"
	},
	{
	progressInformation: "Desalloro del problema",
	observationNotes: "Buenas correcciones, buen desarollo",
	projectPhase: "Desarollo"
	},
	{
	progressInformation: "Finalización y conclusiones",
	observationNotes: "Buena finalización del proyecto",
	projectPhase: "Finalizacion"
	}
])


// Update

// db.projects.updateOne(
// 	{_id: ObjectId("6155fa9ffba31a78c6c889f6")},{$set : {student :[ 
// 		{_id:ObjectId("6155fc0afba31a78c6c889f7")},
// 		{_id:ObjectId("615621b8fba31a78c6c889fd")}
// 	]}
// })

db.projects.updateOne(
	{_id: ObjectId("6155fa9ffba31a78c6c889f6")},{$set : {student :[ 
		ObjectId("6155fc0afba31a78c6c889f7"),
		ObjectId("615621b8fba31a78c6c889fd")
	]}
})

db.projects.updateOne(
	{_id: ObjectId("6155ffeafba31a78c6c889fb")},{$set : {student :[ 
		ObjectId("6155fc0afba31a78c6c889f7"),
		ObjectId("615621b8fba31a78c6c889fe")
	]}
})

db.projects.updateOne(
	{_id: ObjectId("6155ffeafba31a78c6c889fa")},{$set : {student :[ 
		ObjectId("615621b8fba31a78c6c889fd"),
		ObjectId("615621b8fba31a78c6c889ff")
	]}
})

// Projects managers

db.projects.updateOne(
	{_id: ObjectId("6155fa9ffba31a78c6c889f6")},{$set : {projectManajer :[ 
		ObjectId("6155fcb2fba31a78c6c889f8"),
	]}
})

db.projects.updateOne(
	{_id: ObjectId("6155ffeafba31a78c6c889fb")},{$set : {projectManajer :[ 
		ObjectId("6156238dfba31a78c6c88a00"),
		ObjectId("6156238dfba31a78c6c88a01"),
	]}
})

db.projects.updateOne(
	{_id: ObjectId("6155ffeafba31a78c6c889fa")},{$set : {projectManajer :[ 
		ObjectId("6156238dfba31a78c6c88a02"),
		ObjectId("6156238dfba31a78c6c88a03"),
	]}
})


// ProjectProgress

db.projects.updateOne(
	{_id: ObjectId("6155fa9ffba31a78c6c889f6")},{$set : {projectProgress :[ 
		ObjectId("61562fbdfba31a78c6c88a05")
	]}
})

db.projects.updateOne(
	{_id: ObjectId("6155ffeafba31a78c6c889fb")},{$set : {projectProgress :[ 
		ObjectId("61562fbdfba31a78c6c88a06")
	]}
})

db.projects.updateOne(
	{_id: ObjectId("6155ffeafba31a78c6c889fa")},{$set : {projectProgress :[ 
		ObjectId("61562fbdfba31a78c6c88a07"),
		ObjectId("61562fbdfba31a78c6c88a08"),
		ObjectId("61562fbdfba31a78c6c88a09"),
		ObjectId("61562fbdfba31a78c6c88a0a"),		
	]}
})


// Consultas

// Active projects

db.projects.find({ isActive: 1 })

// Buscar solos los proyectos que tengan activo y mostrar solo los nombres
db.projects.aggregate([
	{$match : { isActive: 1 }},

	{$project : {name:1,_id:0 }}
])

// Nombres de los estudiantes asociados al tercer proyecto

db.students.aggregate([        
    { 
       //  Une las dos tablas mediante la llaves primarias y llaves foraneas
      $lookup: {
       // Tabla secundaria de los datos.
         from: "projects",
       // Campo a seleccionar en la tabla a generar el join
         localField: "_id",
       //Clave de la tabla secuandaria
         foreignField: "student",
       // Nombre de la consulta final
         as: "student_proje"
       }
    },
       { $match: {"student_proje._id": ObjectId("6155ffeafba31a78c6c889fa") } },
       {$project : {name:1 , _id:0}}
   ])



