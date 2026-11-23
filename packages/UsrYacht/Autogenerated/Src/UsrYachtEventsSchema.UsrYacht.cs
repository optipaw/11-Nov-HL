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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,229,84,81,107,219,48,16,126,118,161,255,225,240,147,13,193,116,15,125,89,219,192,18,178,81,8,219,104,146,194,24,123,80,228,139,173,97,75,70,146,211,101,35,255,125,39,203,105,82,167,41,166,172,79,187,23,219,210,167,239,238,187,239,100,201,74,52,21,227,8,115,212,154,25,181,178,201,88,201,149,200,106,205,172,80,242,252,236,207,249,25,80,212,70,200,12,102,27,99,177,188,58,92,58,60,88,150,74,158,220,212,152,76,164,21,86,160,233,131,73,38,107,148,118,7,253,222,44,111,154,181,169,160,34,36,234,104,198,115,44,217,103,210,0,55,16,46,140,254,198,120,110,195,248,135,63,83,213,203,66,112,224,5,51,6,154,173,103,72,224,61,140,152,193,103,118,60,73,43,255,128,79,173,169,96,145,34,172,149,72,225,139,156,177,53,201,136,212,242,39,114,11,6,101,138,122,0,158,112,132,43,210,212,208,126,208,153,1,140,247,116,7,204,46,150,84,69,242,200,182,163,193,248,234,41,204,243,194,198,201,33,213,145,255,142,61,190,131,77,145,139,146,21,80,105,193,93,139,154,67,201,39,180,243,77,133,233,88,21,117,41,239,89,81,227,117,139,28,70,174,139,95,29,60,116,137,131,32,216,113,20,40,51,155,247,39,153,54,248,176,91,190,88,65,228,203,25,194,187,11,23,241,83,64,167,43,46,48,185,53,99,38,57,22,152,82,1,86,215,72,172,199,56,99,181,155,39,154,104,195,50,156,99,89,21,204,58,221,18,31,96,170,56,43,196,111,182,44,112,214,224,34,47,100,97,80,211,196,75,242,142,198,61,185,67,163,106,205,9,163,52,145,12,142,179,184,120,156,53,63,163,225,0,194,35,126,147,52,93,185,53,115,165,70,34,243,95,97,156,204,85,155,63,238,33,130,138,247,11,201,71,165,75,102,163,142,56,74,76,93,4,106,35,76,22,119,71,221,118,97,115,173,30,154,22,76,126,113,172,156,202,29,75,23,190,237,22,180,119,235,26,46,255,15,171,102,185,210,246,205,204,186,252,135,70,209,229,116,254,180,23,115,120,227,28,114,22,5,65,107,142,127,57,109,11,17,4,135,168,183,49,37,232,166,233,239,138,255,135,188,124,131,78,149,223,207,140,11,88,217,215,152,225,179,110,247,231,218,87,122,108,255,2,131,186,250,153,84,7,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
			LocalizableStrings.Add(CreateValueIsTooShortLocalizableString());
			LocalizableStrings.Add(CreateLenghtIsTooBigLocalizableString());
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

		protected virtual SchemaLocalizableString CreateLenghtIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("53add2ab-700e-aff9-75aa-3f5efd3feb86"),
				Name = "LenghtIsTooBig",
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

