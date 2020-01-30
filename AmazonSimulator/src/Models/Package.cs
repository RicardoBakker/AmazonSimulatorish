using System;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace Models
{
	public class Package : Model
	{
		public Package(double x, double y, double z, double rotationX, double rotationY, double rotationZ) : base("package", x, y, z, rotationX, rotationY, rotationZ)
		{

		}
	}
}
