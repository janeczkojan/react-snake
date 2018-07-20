export const actionTypeFactory = (...modulesNames) => {

	const modulesNamesParsed = [];

	for (const moduleName of modulesNames) {
		if (moduleName && moduleName.length > 0) {
			modulesNamesParsed.push(`${moduleName.toUpperCase()}`);
		}
	}

	const modulesPart = modulesNamesParsed.join('');
	
	return (...actionsNames) => {
		const actionsNamesParsed = [];

		for (const actionName of actionsNames) {
			if (actionName && actionName.length > 0) {
				actionsNamesParsed.push(`${actionName.toUpperCase()}`);
			}
		}

		const actionsPart = actionsNamesParsed.join('_');
		const typeParts = [ modulesPart, actionsPart ];
		const type = typeParts.join('/');

		return type;
	};
};


export const action = (type, ...data) => {

};