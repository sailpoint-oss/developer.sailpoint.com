---
id: rolemetadatabulkupdatebyqueryrequest
title: Rolemetadatabulkupdatebyqueryrequest
pagination_label: Rolemetadatabulkupdatebyqueryrequest
sidebar_label: Rolemetadatabulkupdatebyqueryrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Rolemetadatabulkupdatebyqueryrequest', 'Rolemetadatabulkupdatebyqueryrequest'] 
slug: /tools/sdk/powershell/roles/models/rolemetadatabulkupdatebyqueryrequest
tags: ['SDK', 'Software Development Kit', 'Rolemetadatabulkupdatebyqueryrequest', 'Rolemetadatabulkupdatebyqueryrequest']
---


# Rolemetadatabulkupdatebyqueryrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | query the identities to be updated | [required]
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | The operation to be performed | [required]
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]RolemetadatabulkupdatebyqueryrequestValuesInner**](rolemetadatabulkupdatebyqueryrequest-values-inner) | The metadata to be updated, including attribute key and value. | [required]

## Examples

- Prepare the resource
```powershell
$Rolemetadatabulkupdatebyqueryrequest = Initialize-Rolemetadatabulkupdatebyqueryrequest  -Query {"query\"":{"indices":["roles"],"queryType":"TEXT","textQuery":{"terms":["test123"],"fields":["id"],"matchAny":false,"contains":true},"includeNested":false}} `
 -Operation REPLACE `
 -ReplaceScope ALL `
 -Values null
```

- Convert the resource to JSON
```powershell
$Rolemetadatabulkupdatebyqueryrequest | ConvertTo-JSON
```


[[Back to top]](#) 

