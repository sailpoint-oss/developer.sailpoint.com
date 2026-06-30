---
id: basecreateapplicationrequest
title: Basecreateapplicationrequest
pagination_label: Basecreateapplicationrequest
sidebar_label: Basecreateapplicationrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Basecreateapplicationrequest', 'Basecreateapplicationrequest'] 
slug: /tools/sdk/powershell/dataaccesssecurity/models/basecreateapplicationrequest
tags: ['SDK', 'Software Development Kit', 'Basecreateapplicationrequest', 'Basecreateapplicationrequest']
---


# Basecreateapplicationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationType** | [**Applicationtype**](applicationtype) |  | [required]
**Name** | **String** | The display name of the application. | [required]
**Description** | **String** | A brief description of the application and its purpose. | [optional] 
**Tags** | [**[]Int64stringkeyvaluepair**](int64stringkeyvaluepair) | A list of tags to categorize or identify the application. | [optional] 
**IdentityCollectorId** | **Int64** | The unique identifier for the identity collector associated with this application. | [optional] 
**AdIdentityCollectorId** | **Int64** | The unique identifier for the AD identity collector. | [optional] 
**NisIdentityCollectorId** | **Int64** | The unique identifier for the NIS identity collector. | [optional] 
**ApplicationCrawlerSettings** | [**Applicationcrawlersettings**](applicationcrawlersettings) |  | [optional] 
**PermissionCollectorSettings** | [**Permissioncollectorsettings**](permissioncollectorsettings) |  | [optional] 
**DataClassificationSettings** | [**Dataclassificationsettings**](dataclassificationsettings) |  | [optional] 
**ActivityConfigurationSettings** | [**Activityconfigurationsettings**](activityconfigurationsettings) |  | [optional] 
**ExecuteNow** | **Boolean** | If true, the application setup will be executed immediately after creation. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Basecreateapplicationrequest = Initialize-Basecreateapplicationrequest  -ApplicationType null `
 -Name HR File Server `
 -Description Stores HR documents and employee records. `
 -Tags [{"key":1,"value":"Confidential"}] `
 -IdentityCollectorId 123456789 `
 -AdIdentityCollectorId 987654321 `
 -NisIdentityCollectorId 192837465 `
 -ApplicationCrawlerSettings null `
 -PermissionCollectorSettings null `
 -DataClassificationSettings null `
 -ActivityConfigurationSettings null `
 -ExecuteNow false
```

- Convert the resource to JSON
```powershell
$Basecreateapplicationrequest | ConvertTo-JSON
```


[[Back to top]](#) 

