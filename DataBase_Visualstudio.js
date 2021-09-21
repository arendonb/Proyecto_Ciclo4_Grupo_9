//  Collection map

// insertOne
db.map.insertOne({
    _id : 1,
    project_descrip : "Canal de pruebas hydrodinámicas",
    objectives : ["Creación del canal de pruebas",["Telemetria del canal","Mecanismo del canal","Validacion"]],
    money: 1000000,
    initial_date: new Date("2021-09-19T09:57:00"),
    final_date : new Date("2021-09-19T09:57:00"),
    active : 1,
    RE_MGL_map: [1,2]            //Directores proyecto
})

//  insertMany
db.map.insertMany([
    {
        // _id : 2,-----> determinado por el mongo

        project_descrip : "Intrerfaz telemetría global",
        objectives : ["CreaciónTelemetria",["Sensores","Insterfaz"]],
        money: 1000000,
        initial_date: new Date("2021-09-15T09:57:00"),
        final_date : new Date("2022-09-15T23:59:00"),
        active : 1,
        RE_MGL_map: [3]            //Directores proyecto
    },
    {
        // _id : 3,-----> determinado por el mongo
        project_descrip : "Controlador Motor",
        objectives : ["Creación de control Motor",["Curvas calibracion","Tipos de control","Validacion"]],
        money: 1000000,
        initial_date: new Date("2021-09-30T09:57:00"),
        final_date : new Date("2022-05-19T23:59:00"),
        active : 0,
        RE_MGL_map: [4]            //Directores proyecto
    }

])


// Collection MRAP:

// InstertOne

db.mrap.insertOne({
    // id definido por mongo
    status_project : "Inicio",
    advance_percentaje : 10, 
    RE_MAP_mrap:[1]                  //Proyecto al que pertenece
})

// insertMany

db.mrap.insertMany([
    { 
        status_project : "documentacion",
        advance_percentaje : 40, 
        RE_MAP_mrap:[ObjectId("6147552dd6ace343a0f8154e")]                  //Proyecto al que pertenece
    },
    {
        status_project : "entrega",
        advance_percentaje : 90, 
        RE_MAP_mrap:[ObjectId("6147552dd6ace343a0f8154f")]                  //Proyecto al que pertenece
    },
])

//  Collection MGE

db.mge.insertOne({
    // id definded by mongo
    name: "Cesar",
    career: "Ingeniero de control",
    phone: "321692045",
    date_entry_project: new Date("2021-09-19T09:57:00"),
    RE_MAP_mge: [1],                      //(id_project)
})

// InsertMany

db.mge.insertMany([
    {
        name: "Juan Camilo",
        career: "Ingeniero de control",
        phone: "320786345",
        date_entry_project: new Date("2021-10-15T09:57:00"),
        RE_MAP_mge: [ObjectId("6147683b34b5358fabdac49c")],                      //(id_project)
    },
    {
        name: "Andres Casas",
        career: "Ingeniero Civil",
        phone: "322897415",
        date_entry_project: new Date("2021-11-30T09:57:00"),
        RE_MAP_mge: [ObjectId("6147683b34b5358fabdac49d")],                      //(id_project)
    }
])

// Collection MGL

// insertOne
db.mgl.insertOne({
    // id :, MONGO
    name : "Pedro Ospina",
    phone : 321987415,
    email : "ped_o@uni.edu.co",
    time_spend : 4,
    RE_MAP_mgl: [1], // (id_project)
})

// InsertMany

db.mgl.insertMany([
    {
        // id :, MONGO
        name : "Mario Palacio",
        phone : 322977415,
        email : "mar_p@uni.edu.co",
        time_spend : 6,
        RE_MAP_mgl: [ObjectId("6147552dd6ace343a0f8154e")], // (id_project)   
    },
    {
        // id :, MONGO
        name : "Juan Arias",
        phone : 320789321,
        email : "jua_a@uni.edu.co",
        time_spend : 6,
        RE_MAP_mgl: [ObjectId("6147552dd6ace343a0f8154f")], // (id_project)   
    }
])

// Colection MGP

// Insert One
db.mgp.insertOne({
    fase: "Inicio",
    note: 5,    // 0-5
    RE_MAP_mgp: [1] 
})

// InserMany

db.mgp.insertMany([
    {
        fase: "entrega",
        note: 4,    // 0-5
        RE_MAP_mgp: [ObjectId("6147552dd6ace343a0f8154e")] 
    },
    {
        fase: "finalizacion",
        note: 5,    // 0-5
        RE_MAP_mgp: [ObjectId("6147552dd6ace343a0f8154f")] 
    }
])




// Actualizar

db.map.updateOne({_id:1 },{$set: {RE_MGL_map: [ObjectId("6147697d34b5358fabdac4a4"),ObjectId("6147698134b5358fabdac4a5")] } })
db.map.updateOne({_id: ObjectId("6147683b34b5358fabdac49c")},{$set: {RE_MGL_map: [ObjectId("6147698134b5358fabdac4a5")] } })
db.map.updateOne({_id: ObjectId("6147683b34b5358fabdac49d"),},{$set: {RE_MGL_map: [ObjectId("6147698134b5358fabdac4a6"),] } })


// Consultas

// Buscar los proyectos activos

db.map.find({ active: 1 })

// Projectos del profesor "Pedro Ospina,identificado con el id :> id:6147697d34b5358fabdac4a4"
db.map.aggregate([        
    { 
       //  Une las dos tablas mediante la llaves primarias y llaves foraneas
      $lookup: {
       // Tabla secundaria de los datos.
         from: "mgl",
       // Campo a seleccionar en la tabla a generar el join
         localField: "RE_MGL_map",
       //Clave de la tabla secuandaria
         foreignField: "_id",
       // Nombre de la consulta final
         as: "dir_proje"
       }
    },
       { $match: {"dir_proje._id": ObjectId("6147697d34b5358fabdac4a4") } }
   ])


// Nombre del profesor "Pedro Ospina,identificado con el id :> id:6147697d34b5358fabdac4a4"
db.map.aggregate([        
    { 
       //  Une las dos tablas mediante la llaves primarias y llaves foraneas
      $lookup: {
       // Tabla secundaria de los datos.
         from: "mgl",
       // Campo a seleccionar en la tabla a generar el join
         localField: "RE_MGL_map",
       //Clave de la tabla secuandaria
         foreignField: "_id",
       // Nombre de la consulta final
         as: "dir_proje"
       }
    },
       { $match: {"dir_proje._id": ObjectId("6147697d34b5358fabdac4a4") } },
       {$project : {project_descrip:1}}
   ])

// Nombre de los profesores asociados a un proyecto

db.mgl.aggregate([        
    { 
       //  Une las dos tablas mediante la llaves primarias y llaves foraneas
      $lookup: {
       // Tabla secundaria de los datos.
         from: "map",
       // Campo a seleccionar en la tabla a generar el join
         localField: "_id",
       //Clave de la tabla secuandaria
         foreignField: "RE_MGL_map",
       // Nombre de la consulta final
         as: "proje_dire"
       }
    },
       { $match: {"proje_dire._id": 1 } },
       {$project : {name:1 , _id:0}}
   ])

//    name : 'Mario Palacio' id:>ObjectId("6147698134b5358fabdac4a5")



// Estudiante asociado al proyecto de telemeria :> id =ObjectId("6147683b34b5358fabdac49c")

db.mge.aggregate([        
    { 
       //  Une las dos tablas mediante la llaves primarias y llaves foraneas
      $lookup: {
       // Tabla secundaria de los datos.
         from: "map",
       // Campo a seleccionar en la tabla a generar el join
         localField: "RE_MAP_mge",
       //Clave de la tabla secuandaria
         foreignField: "_id",
       // Nombre de la consulta final
         as: "stu_proje"
       }
    },
    { $match: {"stu_proje._id": ObjectId("6147683b34b5358fabdac49c") } },
    { $project: {name:1,_id:0}}
   ])