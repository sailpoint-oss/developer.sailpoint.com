---
id: rolemetadatabulkupdatebyidrequest
title: Rolemetadatabulkupdatebyidrequest
pagination_label: Rolemetadatabulkupdatebyidrequest
sidebar_label: Rolemetadatabulkupdatebyidrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Rolemetadatabulkupdatebyidrequest', 'Rolemetadatabulkupdatebyidrequest'] 
slug: /tools/sdk/powershell/roles/models/rolemetadatabulkupdatebyidrequest
tags: ['SDK', 'Software Development Kit', 'Rolemetadatabulkupdatebyidrequest', 'Rolemetadatabulkupdatebyidrequest']
---


# Rolemetadatabulkupdatebyidrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Roles** | **[]String** | Roles' Id to be updated | [required]
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | The operation to be performed | [required]
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]RolemetadatabulkupdatebyidrequestValuesInner**](rolemetadatabulkupdatebyidrequest-values-inner) | The metadata to be updated, including attribute key and value. | [required]

## Examples

- Prepare the resource
```powershell
$Rolemetadatabulkupdatebyidrequest = Initialize-Rolemetadatabulkupdatebyidrequest  -Roles ["b1db89554cfa431cb8b9921ea38d9367"] `
 -Operation REPLACE `
 -ReplaceScope ALL `
 -Values [{"attribute":"iscFederalClassifications","values":["topSecret"]}]
```

- Convert the resource to JSON
```powershell
$Rolemetadatabulkupdatebyidrequest | ConvertTo-JSON
```


[[Back to top]](#) 

