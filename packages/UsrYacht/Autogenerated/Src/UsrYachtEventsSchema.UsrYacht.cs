namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachtEventsSchema

	/// <exclude/>
	public class UsrYachtEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachtEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachtEventsSchema(UsrYachtEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("13419d9b-d1fe-4191-a21f-6be632e4f25c");
			Name = "UsrYachtEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("569fbe19-d9b2-4eee-a024-063eda49f3f6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,229,82,193,110,219,48,12,189,23,232,63,16,62,217,64,32,108,135,237,176,118,5,150,32,27,10,20,219,80,59,5,134,97,7,69,102,28,13,178,100,136,114,186,108,232,191,143,178,146,54,117,58,160,135,237,52,94,108,81,79,143,124,143,180,178,69,234,164,66,168,208,123,73,110,21,196,204,217,149,110,122,47,131,118,246,244,228,215,233,9,112,244,164,109,3,229,150,2,182,103,135,169,195,135,109,235,236,31,47,61,138,185,13,58,104,164,231,96,196,124,131,54,236,161,95,135,244,118,200,93,105,110,194,162,207,75,181,198,86,126,100,13,240,22,178,5,249,47,82,173,67,86,124,75,111,186,126,105,180,2,101,36,17,12,87,79,144,192,27,152,74,194,39,110,18,201,78,254,1,159,219,112,195,186,70,216,56,93,195,39,91,202,13,203,200,221,242,59,170,0,132,182,70,63,129,68,56,197,21,107,26,104,223,249,134,0,139,7,186,3,230,24,75,238,66,220,179,237,105,176,56,123,12,75,188,176,141,114,88,117,158,206,69,194,143,176,53,42,221,74,3,157,215,42,90,52,60,18,31,48,84,219,14,235,153,51,125,107,111,164,233,241,124,135,188,200,163,139,159,35,60,27,23,214,43,200,19,209,5,188,124,17,163,120,12,24,233,137,129,226,146,102,210,42,52,88,115,253,224,123,100,214,99,28,5,31,55,129,119,145,100,131,21,182,157,145,33,118,108,241,22,174,156,146,70,255,148,75,131,229,128,203,147,142,5,161,231,93,181,236,58,47,170,184,70,114,189,87,140,113,158,73,38,199,85,98,220,111,73,218,174,108,2,217,17,63,137,193,148,75,170,156,155,234,38,157,178,66,84,110,87,191,120,134,8,110,62,37,196,123,231,91,25,242,145,56,46,204,46,2,219,8,243,197,245,145,219,49,194,218,187,219,193,130,249,15,133,93,84,185,103,25,195,239,198,13,61,76,235,28,94,255,31,163,42,215,206,135,127,54,172,87,127,109,80,163,95,254,220,253,6,230,132,31,96,135,5,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
			LocalizableStrings.Add(CreateValueIsTooShortLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("ca9930f6-d079-9fb2-36f9-9975f1f93282"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("569fbe19-d9b2-4eee-a024-063eda49f3f6"),
				CreatedInSchemaUId = new Guid("13419d9b-d1fe-4191-a21f-6be632e4f25c"),
				ModifiedInSchemaUId = new Guid("13419d9b-d1fe-4191-a21f-6be632e4f25c")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateValueIsTooShortLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("aab232da-6d0e-c9eb-e9dd-b48828be5928"),
				Name = "ValueIsTooShort",
				CreatedInPackageId = new Guid("569fbe19-d9b2-4eee-a024-063eda49f3f6"),
				CreatedInSchemaUId = new Guid("13419d9b-d1fe-4191-a21f-6be632e4f25c"),
				ModifiedInSchemaUId = new Guid("13419d9b-d1fe-4191-a21f-6be632e4f25c")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("13419d9b-d1fe-4191-a21f-6be632e4f25c"));
		}

		#endregion

	}

	#endregion

}

