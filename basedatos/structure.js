//Collections 

Projects: {
	_id: <ObjectId>,
	name: String,
	description: String,
	generalObjective: String,
	specificObjectives: String,
	budget: float,
	startDate: timestamp,
	endDate: timestamp,
    dedicationHours: float,
	isActive: boolean, //Active, Inactive
	generalStatus: string, //Inicio, ejecución, cierre
	projectManajer: {_id: <ObjectId>},
	student: [{
		_id: <ObjectId>
		}],
	projectProgress: [{
		_id: <ObjectId>
		}],
	created_at: timestamp,
	updated_at: timestamp,
	deleted_at: timestamp
}

Students: {
	_id: <ObjectId>,
	name: String,
	career: String,
	cellphone: String,
	admissionDate: timestamp,
    userCode: String,
	password: String,
	salt: String,
    userType: String,
	created_at: timestamp,
	updated_at: timestamp,
	deleted_at: timestamp
}

ProjectManagers: {
	_id: <ObjectId>,
	name: String,
    userCode: String,
	password: String,
	salt: String,
    userType: String,
	created_at: timestamp,
	updated_at: timestamp,
	deleted_at: timestamp
}

ProjectProgress: {
	_id: <ObjectId>,
	progressInformation: String,
	observationNotes: String,
	projectPhase: String
}