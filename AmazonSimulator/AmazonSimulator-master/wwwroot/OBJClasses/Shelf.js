class gShelf extends THREE.Group
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
		if (this._loadState != LoadStates.NOT_LOADING) return;

		this._loadState = LoadStates.LOADING;

		var selfRef = this;

		var mtlLoader = new THREE.MTLLoader();
		mtlLoader.setTexturePath('/Textures/Package/');
		mtlLoader.setPath('/Textures/Package/');
		mtlLoader.load('Package.mtl', function (materials)
		{
			materials.preload();
			var objLoader = new THREE.OBJLoader();

			objLoader.setMaterials(materials);
			objLoader.setPath('/Textures/Package/');

			objLoader.load('Package.obj', function (object)
			{
				object.scale.set(5, 5, 5);
				object.receiveShadow = true;
				object.castShadow = true;

				selfRef.add(object);
			}
			);
		}
		);
	}
}
