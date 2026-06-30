---
id: rolemetadatabulkupdatebyfilterrequest
title: Rolemetadatabulkupdatebyfilterrequest
pagination_label: Rolemetadatabulkupdatebyfilterrequest
sidebar_label: Rolemetadatabulkupdatebyfilterrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Rolemetadatabulkupdatebyfilterrequest', 'Rolemetadatabulkupdatebyfilterrequest'] 
slug: /tools/sdk/powershell/roles/models/rolemetadatabulkupdatebyfilterrequest
tags: ['SDK', 'Software Development Kit', 'Rolemetadatabulkupdatebyfilterrequest', 'Rolemetadatabulkupdatebyfilterrequest']
---


# Rolemetadatabulkupdatebyfilterrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Filters** | **String** | Filtering is supported for the following fields and operators:  **id** : *eq, in*  **name** : *eq, sw*  **created** : *gt, lt, ge, le*  **modified** : *gt, lt, ge, le*  **owner.id** : *eq, in*  **requestable** : *eq* | [required]
**Operation** |  **Enum** [  "ADD",    "REMOVE",    "REPLACE" ] | The operation to be performed | [required]
**ReplaceScope** |  **Enum** [  "ALL",    "ATTRIBUTE" ] | The choice of update scope. | [optional] 
**Values** | [**[]RolemetadatabulkupdatebyfilterrequestValuesInner**](rolemetadatabulkupdatebyfilterrequest-values-inner) | The metadata to be updated, including attribute key and value. | [required]

## Examples

- Prepare the resource
```powershell
$Rolemetadatabulkupdatebyfilterrequest = Initialize-Rolemetadatabulkupdatebyfilterrequest  -Filters  requestable eq false `
 -Operation REPLACE `
 -ReplaceScope ALL `
 -Values [{"attribute":"iscFederalClassifications","values":["topSecret"]}]
```

- Convert the resource to JSON
```powershell
$Rolemetadatabulkupdatebyfilterrequest | ConvertTo-JSON
```


[[Back to top]](#) 

