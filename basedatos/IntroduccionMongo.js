
// Después de SWITCHEAR en la base de datos, se procede a crear una coleccion(courses)
// Y se procede a insertar el primer dato con (insertOne)
db.courses.insertOne({
    name:"Desarrollo web",
    tags: ["web","mongodb","nodejs","js"],
    price :150000,
    status: "available",
    registred_at: new Date("2021-09-04T08:00:00")
})


db.courses.insertOne({
    _id: 1,                         //Puede ser INT o string o {}
    name:"Desarrollo mobile",
    tags: ["ios","android"],
    price :250000,
    status: "available",
    registred_at: new Date("2021-09-04T08:00:00")
})

show collections

// Para mostrar toda la información de la colección

db.courses.find({})

db.courses.insertOne({
    _id:2,
    name:"Desarrollo mobile",
    price :150000,
    teacher: "Carlos Agudelo",
    registred_at: new Date("2021-09-04T08:00:00")
})

//  Para insertar gran volumen de datos se usa
// db."NombreColeccion".insertMany([".......DATOS......."])

db.courses.insertMany([
{ _id: 3,  name: 'Ingles 1',  tags: ['lenguaje', 'mongodb', 'nodejs', 'js'], price: 175000, status: 'available', registre_at: new Date('2020-06-01T08:00:00Z') },
{ _id: 4,  name: 'Ciencia de Datos',  tags: ['python', 'sql', 'nosql'], price: 138000, status: 'no available', registre_at: new Date('2020-07-01T08:00:00Z') },
{ _id: 5,  name: 'Azure and AWS',  tags: ['aws', 'azure', 'js'], price: 420000, status: 'available', registre_at: new Date('2028-08-01T08:00:00Z') },
{ _id: 6,  name: 'Copy Write',  tags: ['letura', 'textos', 'add'], price: 250000, status: 'no available', registre_at: new Date('2020-09-01T08:00:00Z') },
{ _id: 7,  name: 'Sprintboots',  tags: ['java web', 'java', 'js'], price: 420000, status: 'available', registre_at: new Date('2021-04-01T08:00:00Z') },
{ _id: 8,  name: 'Diseño web',  tags: ['js', 'html', 'css',], price: 960000, status: 'no available', registre_at: new Date('2021-07-01T08:00:00Z') },
{ _id: 9,  name: 'Ruby on Rails',  tags: ['rails', 'ruby', 'sql', 'postgress'], price: 320000, status: 'available', registre_at: new Date('2021-03-01T08:00:00Z') },
{ _id: 10,  name: 'SQL',  tags: ['mysql', 'sql', 'relational database', 'postgress'], price: 630000, status: 'no available', registre_at: new Date('2021-02-01T08:00:00Z') }
]);

// ¿Que pasa si nos equivocamos con el nombre de la colección
// R/: Se crea una nueva colección con el nombre colocado
// Se puede colocar solo new Date(), y este coloca la fecha y hora de día de hoy
db.course.insertMany([
    { _id: 3,  name: 'Ingles 1',  tags: ['lenguaje', 'mongodb', 'nodejs', 'js'], price: 175000, status: 'available', registre_at: new Date('2020-06-01T08:00:00Z') },
    { _id: 4,  name: 'Ciencia de Datos',  tags: ['python', 'sql', 'nosql'], price: 138000, status: 'no available', registre_at: new Date('2020-07-01T08:00:00Z') },
    { _id: 5,  name: 'Azure and AWS',  tags: ['aws', 'azure', 'js'], price: 420000, status: 'available', registre_at: new Date('2028-08-01T08:00:00Z') },
    { _id: 6,  name: 'Copy Write',  tags: ['letura', 'textos', 'add'], price: 250000, status: 'no available', registre_at: new Date('2020-09-01T08:00:00Z') },
    { _id: 7,  name: 'Sprintboots',  tags: ['java web', 'java', 'js'], price: 420000, status: 'available', registre_at: new Date('2021-04-01T08:00:00Z') },
    { _id: 8,  name: 'Diseño web',  tags: ['js', 'html', 'css',], price: 960000, status: 'no available', registre_at: new Date('2021-07-01T08:00:00Z') },
    { _id: 9,  name: 'Ruby on Rails',  tags: ['rails', 'ruby', 'sql', 'postgress'], price: 320000, status: 'available', registre_at: new Date('2021-03-01T08:00:00Z') },
    { _id: 10,  name: 'SQL',  tags: ['mysql', 'sql', 'relational database', 'postgress'], price: 630000, status: 'no available', registre_at: new Date('2021-02-01T08:00:00Z') }
    ]);









// Query - AND

db.courses.find({status:'available' , name:'Ingles 1'})

// Query - Or

db.courses.find( { $or: [ {name:'Azure and AWS'}, {status:'no available'}] } )

// Buscar en una lista anidada ejemplo: tags: ['java web', 'java', 'js']

db.courses.find({ tags: ['letura', 'textos', 'add'] })


//Seleccion de todos los registros que tengan almenos una coincidencia en el la lista anidada
db.courses.find({ tags: { $eq: 'js' } })



// ------------------------ Actualizar registros ---------


db.courses.update( { _id: ObjectId("613429198004f42f6216878a") } , { $set : {status :"no avalaible"} } )





