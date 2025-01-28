---
id: v2024-update-detail
title: UpdateDetail
pagination_label: UpdateDetail
sidebar_label: UpdateDetail
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UpdateDetail', 'V2024UpdateDetail'] 
slug: /tools/sdk/powershell/v2024/models/update-detail
tags: ['SDK', 'Software Development Kit', 'UpdateDetail', 'V2024UpdateDetail']
---


# UpdateDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** |  Pointer to **String** | The detailed message for an update. Typically the relevent error message when status is error. | [optional] 
**ScriptName** |  Pointer to **String** | The connector script name | [optional] 
**UpdatedFiles** |  Pointer to **[]String** | The list of updated files supported by the connector | [optional] 
**Status** |  Pointer to  **Enum** [  "ERROR",    "UPDATED",    "UNCHANGED",    "SKIPPED" ] | The connector update status | [optional] 

## Examples

- Prepare the resource
```powershell
$UpdateDetail = Initialize-PSSailpoint.V2024UpdateDetail  -Message unsupported xsd version, please ensure latest xsd version http://www.sailpoint.com/xsd/sailpoint_form_2_0.xsd is used for source config `
 -ScriptName servicenow `
 -UpdatedFiles [pod/org/connectorFiles/testconnector/test1.jar] `
 -Status ERROR
```

- Convert the resource to JSON
```powershell
$UpdateDetail | ConvertTo-JSON
```


[[Back to top]](#) 

