---
id: appaccessprofileselector
title: Appaccessprofileselector
pagination_label: Appaccessprofileselector
sidebar_label: Appaccessprofileselector
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Appaccessprofileselector', 'Appaccessprofileselector'] 
slug: /tools/sdk/powershell/apps/models/appaccessprofileselector
tags: ['SDK', 'Software Development Kit', 'Appaccessprofileselector', 'Appaccessprofileselector']
---


# Appaccessprofileselector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** | **String** | The application id | [optional] 
**AccountMatchConfig** | [**AppaccessprofileselectorAccountMatchConfig**](appaccessprofileselector-account-match-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Appaccessprofileselector = Initialize-Appaccessprofileselector  -ApplicationId 2c91808874ff91550175097daaec161c" `
 -AccountMatchConfig null
```

- Convert the resource to JSON
```powershell
$Appaccessprofileselector | ConvertTo-JSON
```


[[Back to top]](#) 

