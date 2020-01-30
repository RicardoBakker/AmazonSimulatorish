class gTruck extends THREE.Group
{
	constructor()
	{
		super();

		this._loadState = LoadStates.NOT_LOADING;

		this.init();
	}

	get loadState()
	{
		return this._loadState;
	}

	init()
	{
		function addSpotLight(object, color, x, y, z, intensity, targetx, targety, targetz)
		{
			var spotLight = new THREE.SpotLight(color, intensity, 100, 0.5, 2, 1);
			spotLight.position.set(x, y, z);
			spotLight.castShadow = true;
			object.add(spotLight);
			object.add(spotLight.target);
			spotLight.target.position.set(targetx, targety, targetz)
		}

		function addPointLight(object, color, x, y, z, intensity, distance)
		{
			var pointLight = new THREE.PointLight(color, intensity, distance);
			pointLight.position.set(x, y, z);
			object.add(pointLight);
		}

		if (this._loadState != LoadStates.NOT_LOADING) return;

		this._loadState = LoadStates.LOADING;

		var selfRef = this;

		var mtlLoader = new THREE.MTLLoader();

		mtlLoader.setTexturePath('/Textures/Truck/');
		mtlLoader.setPath('/Textures/Truck/');
		mtlLoader.load('', function (materials)
		{
			materials.preload();
			var objLoader = new THREE.OBJLoader();
			objLoader.setMaterials(materials);
			objLoader.setPath('/Textures/Truck/');

			objLoader.load('Truck.obj', function (object)
			{
				object.scale.set(0.25, 0.25, 0.25);
				object.receiveShadow = true;
				object.castShadow = true;
				selfRef.add(object);
			}
			);
		}
		);
	}
}
