---
id: sourceappbulkupdaterequest
title: Sourceappbulkupdaterequest
pagination_label: Sourceappbulkupdaterequest
sidebar_label: Sourceappbulkupdaterequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourceappbulkupdaterequest', 'Sourceappbulkupdaterequest'] 
slug: /tools/sdk/powershell/apps/models/sourceappbulkupdaterequest
tags: ['SDK', 'Software Development Kit', 'Sourceappbulkupdaterequest', 'Sourceappbulkupdaterequest']
---


# Sourceappbulkupdaterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppIds** | **[]String** | List of source app ids to update | [required]
**JsonPatch** | [**[]Jsonpatchoperation**](jsonpatchoperation) | The JSONPatch payload used to update the source app. | [required]

## Examples

- Prepare the resource
```powershell
$Sourceappbulkupdaterequest = Initialize-Sourceappbulkupdaterequest  -AppIds ["2c91808a7624751a01762f19d665220d","2c91808a7624751a01762f19d67c220e","2c91808a7624751a01762f19d692220f"] `
 -JsonPatch [{"op":"replace","path":"/enabled","value":false},{"op":"replace","path":"/matchAllAccounts","value":false}]
```

- Convert the resource to JSON
```powershell
$Sourceappbulkupdaterequest | ConvertTo-JSON
```


[[Back to top]](#) 

