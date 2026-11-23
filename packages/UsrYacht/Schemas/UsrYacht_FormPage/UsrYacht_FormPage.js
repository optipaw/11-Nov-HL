define("UsrYacht_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "dcc222ad-ff2b-4e49-92c2-efa3d19ee123",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_kb0jjbe",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_kb0jjbe_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"menuItems": [],
					"clickMode": "menu",
					"icon": "actions-button-icon"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_dtddu0m",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_dtddu0m_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrYachtAvgTickPrice",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtId"
						}
					}
				},
				"parentName": "Button_kb0jjbe",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_YachtService",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_YachtService_caption)#",
					"visible": true,
					"icon": "process-button-icon",
					"clicked": {
						"request": "usr.RunWebServiceRequest"
					}
				},
				"parentName": "Button_kb0jjbe",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "copilot-rewrite-friendly-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_smkjrx8",
					"control": "$PDS_UsrPrice_smkjrx8",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Image",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ImageInput",
					"label": "$Resources.Strings.PDS_UsrImage_m289qyq",
					"value": "$PDS_UsrImage_m289qyq",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"size": "large",
					"borderRadius": "medium",
					"positioning": "cover"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YachtNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrYachtNumber_jvglkta",
					"control": "$PDS_UsrYachtNumber_jvglkta",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_pz9v3lp",
					"control": "$PDS_UsrTicketPrice_pz9v3lp",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CaptainEmail",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.PDS_UsrCaptainEmail_y4t9dmb",
					"control": "$PDS_UsrCaptainEmail_y4t9dmb",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"visible": true,
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Length",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_m1i6sra",
					"control": "$PDS_UsrLength_m1i6sra",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Captain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_a5rjs3r",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCaptain_a5rjs3r"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_n2izem2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_n2izem2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Captain",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CrewCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_tyh0pz4",
					"control": "$PDS_UsrCrewCount_tyh0pz4",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_0irish8",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_0irish8",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"secondaryDisplayValue": "Description"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PassengerCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengerCount_btmb6e0",
					"control": "$PDS_UsrPassengerCount_btmb6e0",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_w31xkzd",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_w31xkzd",
					"valueDetails": "$Status_ValueDetails",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"secondaryDisplayValue": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_c3tk1vd",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_c3tk1vd_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Status",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_js14kvz",
					"control": "$PDS_UsrComment_js14kvz",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_7glyooe",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_7glyooe",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Categories",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(Categories_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrYacht",
					"selectSchemaName": "UsrCategoryInYacht",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"required": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabContainer_Rentals",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_Rentals_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_4ysx4zh",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "TabContainer_Rentals",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_YachtRentals",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 2,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_YachtRentals_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_4ysx4zh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_jv0i3bs",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_YachtRentals",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_0y6eizi",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_jv0i3bs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_mbsdbky",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_mbsdbky_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRentals",
							"defaultValues": [
								{
									"attributeName": "UsrYachtLookup",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_0y6eizi",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_hlv8nij",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_hlv8nij_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_hf3mycpDS"
						}
					}
				},
				"parentName": "FlexContainer_0y6eizi",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_fgh5bcb",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_fgh5bcb_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_0y6eizi",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_avv90kx",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_avv90kx_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_YachtRentals"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_fgh5bcb",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_9fxy958",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_9fxy958_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRentals"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_fgh5bcb",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_t7yihnk",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_t7yihnk_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [],
						"from": [
							"GridDetailSearchFilter_t7yihnk_SearchValue",
							"GridDetailSearchFilter_t7yihnk_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_0y6eizi",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_n6gbwu8",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": null
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_YachtRentals",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_YachtRentals",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_hf3mycp",
					"activeRow": "$GridDetail_hf3mycp_ActiveRow",
					"selectionState": "$GridDetail_hf3mycp_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_hf3mycp_SelectionState"
					},
					"primaryColumnName": "GridDetail_hf3mycpDS_Id",
					"columns": [
						{
							"id": "c5cdd28b-bbc2-2233-bc44-b334694aa100",
							"code": "GridDetail_hf3mycpDS_UsrName",
							"caption": "#ResourceString(GridDetail_hf3mycpDS_UsrName)#",
							"dataValueType": 28
						},
						{
							"id": "0c696557-4394-96d9-3f99-d1059e9f6fa6",
							"code": "GridDetail_hf3mycpDS_UsrRentalStart",
							"caption": "#ResourceString(GridDetail_hf3mycpDS_UsrRentalStart)#",
							"dataValueType": 7
						},
						{
							"id": "a6f9cf14-4f62-fedb-21eb-3c4a925bd90c",
							"code": "GridDetail_hf3mycpDS_UsrRentalEnd",
							"caption": "#ResourceString(GridDetail_hf3mycpDS_UsrRentalEnd)#",
							"dataValueType": 7
						},
						{
							"id": "2815402d-46ff-c3c5-1994-9cecbacc463d",
							"code": "GridDetail_hf3mycpDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_hf3mycpDS_UsrCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "ed94e172-d4d4-5b4e-df21-079d6155ee63",
							"code": "GridDetail_hf3mycpDS_UsrManager",
							"caption": "#ResourceString(GridDetail_hf3mycpDS_UsrManager)#",
							"dataValueType": 10
						},
						{
							"id": "577f52ec-74b0-50d1-51b7-1de5ef0f9326",
							"code": "GridDetail_hf3mycpDS_UsrTotalPrice",
							"caption": "#ResourceString(GridDetail_hf3mycpDS_UsrTotalPrice)#",
							"dataValueType": 4
						},
						{
							"id": "3abad141-d934-9a2b-41d0-b49e61b94de1",
							"code": "GridDetail_hf3mycpDS_UsrComment",
							"caption": "#ResourceString(GridDetail_hf3mycpDS_UsrComment)#",
							"dataValueType": 28
						}
					],
					"placeholder": false,
					"bulkActions": [],
					"visible": true,
					"fitContent": true,
					"referenceSchema": "UsrYachtRentals"
				},
				"parentName": "GridContainer_n6gbwu8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_hf3mycp_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_hf3mycpDS",
							"filters": "$GridDetail_hf3mycp | crt.ToCollectionFilters : 'GridDetail_hf3mycp' : $GridDetail_hf3mycp_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_hf3mycp_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "GridDetail_YachtRentals",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_hf3mycp_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_hf3mycpDS",
							"filters": "$GridDetail_hf3mycp | crt.ToCollectionFilters : 'GridDetail_hf3mycp' : $GridDetail_hf3mycp_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_hf3mycp_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_hf3mycp_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_hf3mycp_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_YachtRentals",
							"filters": "$GridDetail_hf3mycp | crt.ToCollectionFilters : 'GridDetail_hf3mycp' : $GridDetail_hf3mycp_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_hf3mycp_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_YachtRentals",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_hf3mycp_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_hf3mycpDS",
							"selectionState": "$GridDetail_hf3mycp_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_YachtRentals",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetail_hf3mycp_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_hf3mycpDS",
							"filters": "$GridDetail_hf3mycp | crt.ToCollectionFilters : 'GridDetail_hf3mycp' : $GridDetail_hf3mycp_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_hf3mycp_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_YachtRentals",
				"propertyName": "bulkActions",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_smkjrx8": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.YTValidator",
								"params": {
									"settingCode": "UsrYachtMinPrice",
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							},
							"MaxPriceValidator": {
						        "type": "usr.MaxValueValidator",
						        "params": {
						            "settingCode": "UsrYachtMaxPrice",
						            "message": "#ResourceString(PriceCannotBeMore)#"
						        }
						    }	
						}
						
					},
					"PDS_UsrImage_m289qyq": {
						"modelConfig": {
							"path": "PDS.UsrImage"
						}
					},
					"PDS_UsrLength_m1i6sra": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.YTValidator",
								"params": {
									"settingCode": "UsrYachtMinLength",
									"message": "#ResourceString(LengthCannotBeLess)#"
								}
							},
							"MaxLengthValidator": {
								"type": "usr.MaxValueValidator",
								"params": {
									"settingCode": "UsrYachtMaxLength",
									"message": "#ResourceString(LengthCannotBeMore)#"
								}
							}
						}
					},
					"PDS_UsrCaptain_a5rjs3r": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrCaptain_a5rjs3r_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrCrewCount_tyh0pz4": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						}
					},
					"PDS_UsrPassengerCount_btmb6e0": {
						"modelConfig": {
							"path": "PDS.UsrPassengerCount"
						}
					},
					"PDS_UsrComment_js14kvz": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrDriveType_0irish8": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrDriveType_0irish8_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrManager_7glyooe": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_7glyooe_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrStatus_w31xkzd": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_w31xkzd_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"Status_ValueDetails": {
						"modelConfig": {
							"path": "PDS.UsrStatusDescription"
						}
					},
					"PDS_UsrYachtNumber_jvglkta": {
						"modelConfig": {
							"path": "PDS.UsrYachtNumber"
						}
					},
					"Categories_List_Items_Predefined_Filter": {
						"value": null
					},
					"PDS_UsrTicketPrice_pz9v3lp": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrCaptainEmail_y4t9dmb": {
						"modelConfig": {
							"path": "PDS.UsrCaptainEmail_y4t9dmb"
						}
					},
					"GridDetail_hf3mycp": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_hf3mycpDS",
							"filterAttributes": []
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_hf3mycpDS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_hf3mycpDS.UsrName"
									}
								},
								"GridDetail_hf3mycpDS_UsrRentalStart": {
									"modelConfig": {
										"path": "GridDetail_hf3mycpDS.UsrRentalStart"
									}
								},
								"GridDetail_hf3mycpDS_UsrRentalEnd": {
									"modelConfig": {
										"path": "GridDetail_hf3mycpDS.UsrRentalEnd"
									}
								},
								"GridDetail_hf3mycpDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_hf3mycpDS.UsrCustomer"
									}
								},
								"GridDetail_hf3mycpDS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_hf3mycpDS.UsrManager"
									}
								},
								"GridDetail_hf3mycpDS_UsrTotalPrice": {
									"modelConfig": {
										"path": "GridDetail_hf3mycpDS.UsrTotalPrice"
									}
								},
								"GridDetail_hf3mycpDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_hf3mycpDS.UsrComment"
									}
								},
								"GridDetail_hf3mycpDS_Id": {
									"modelConfig": {
										"path": "GridDetail_hf3mycpDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_hf3mycpDS": [
							{
								"attributePath": "UsrYachtLookup",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht",
							"attributes": {
								"UsrStatusDescription": {
									"path": "UsrStatus.Description",
									"type": "ForwardReference"
								},
								"UsrCaptainEmail_y4t9dmb": {
									"path": "UsrCaptain.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_hf3mycpDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRentals",
							"attributes": {
								"UsrName": {
									"path": "UsrName"
								},
								"UsrRentalStart": {
									"path": "UsrRentalStart"
								},
								"UsrRentalEnd": {
									"path": "UsrRentalEnd"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrTotalPrice": {
									"path": "UsrTotalPrice"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
		        {
                request: "usr.PushButtonRequest",
                /* Implementation of the custom query handler. */
                handler: async (request, next) => {
                    console.log("Button works...");
                    Terrasoft.showInformation("My button was pressed.");
                    var price = await request.$context.PDS_UsrPrice_smkjrx8;
                    console.log("Price = " + price);
                    request.$context.PDS_UsrComment_js14kvz = "comment from JS code!";
                    /* Call the next handler if it exists and return its result. */
                    return next?.handle(request);
                }
            },

			    {
                request: "crt.HandleViewModelAttributeChangeRequest",
                /* The custom implementation of the system query handler. */
                handler: async (request, next) => {
                     if (request.attributeName === 'PDS_UsrPrice_smkjrx8' ||                 // if price changed
                       request.attributeName === 'PDS_UsrPassengerCount_btmb6e0' ) {         // or Passenger count changed
						debugger;
                        let price = await request.$context.PDS_UsrPrice_smkjrx8;
                        let passengers = await request.$context.PDS_UsrPassengerCount_btmb6e0;
                        let ticket_price = price / passengers;
                        request.$context.PDS_UsrTicketPrice_pz9v3lp = ticket_price;
                    }
                    /* Call the next handler if it exists and return its result. */
                    return next?.handle(request);
                }
            },

			{
                request: "usr.RunWebServiceRequest",
                /* Implementation of the custom query handler. */
                handler: async (request, next) => {
                    console.log("Run web service button works...");
                    
                    // get id from drive type lookup type object
                    var typeObject = await request.$context.PDS_UsrDriveType_0irish8;
                    var driveTypeId = "";
                    if (typeObject) {
                        driveTypeId = typeObject.value;
                    }
                    /* Create an instance of the HTTP client from @creatio-devkit/common. */
                    const httpClientService = new sdk.HttpClientService();
                    /* Specify the URL to run web service method. */
                    const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
                    const transferName = "rest";
                    const serviceName = "YachtService";
                    const methodName = "GetMaxPriceByDriveTypeId";
                    const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
                    
                    //const endpoint = "http://y-todosan-nb.tscrm.com:40003/0/rest/YachtService/GetMaxPriceByDriveTypeId";
                    /* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
                    var params = {
                        driveTypeId: driveTypeId
                    };
                    const response = await httpClientService.post(endpoint, params);
                    
                    console.log("response max price = " + response.body.GetMaxPriceByDriveTypeIdResult);
                    
                    /* Call the next handler if it exists and return its result. */
                    return next?.handle(request);
                }
            }
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.YTValidator": {
                validator: function (config) {
                    return async function (control) {
                        let value = control.value;
                        let setting = await new sdk.SysSettingsService().getByCode(config.settingCode);
                        let minValue = setting.value;
                        let valueIsCorrect = value >= minValue;
                        var result;
                        if (valueIsCorrect) {
                            result = null;
                        } else {
                            result = {
                                "usr.YTValidator": {
                                    message: config.message
                                }
                            };
                        }
                        return result;
                    };
                },
                params: [
                    {
                        name: "settingCode"
                    },
                    {
                        name: "message"
                    }
                ],
                async: true
            },

			"usr.MaxValueValidator": {
			    validator: function (config) {
			        return async function (control) {
			            let value = control.value;
			            let setting = await new sdk.SysSettingsService().getByCode(config.settingCode);
			            let maxValue = setting.value;
				        let valueIsCorrect = value < maxValue;
			            if (valueIsCorrect) {
			                return null;
			            }
			            return {
			                "usr.MaxValueValidator": { message: config.message }
			            };
			        };
			    },
			    params: [
			        {
						name: "settingCode"
					},
			        {
						name: "message" 
					}
			    ],
			    async: true
			}
		}/**SCHEMA_VALIDATORS*/
	};
});