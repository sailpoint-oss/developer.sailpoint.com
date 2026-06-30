---
id: certifierresponse
title: Certifierresponse
pagination_label: Certifierresponse
sidebar_label: Certifierresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Certifierresponse', 'Certifierresponse'] 
slug: /tools/sdk/powershell/identityhistory/models/certifierresponse
tags: ['SDK', 'Software Development Kit', 'Certifierresponse', 'Certifierresponse']
---


# Certifierresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the id of the certifier | [optional] 
**DisplayName** | **String** | the name of the certifier | [optional] 

## Examples

- Prepare the resource
```powershell
$Certifierresponse = Initialize-Certifierresponse  -Id 8a80828f643d484f01643e14202e206f `
 -DisplayName John Snow
```

- Convert the resource to JSON
```powershell
$Certifierresponse | ConvertTo-JSON
```


[[Back to top]](#) 

