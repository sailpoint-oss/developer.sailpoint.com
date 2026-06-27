---
id: sodreportresultdto
title: Sodreportresultdto
pagination_label: Sodreportresultdto
sidebar_label: Sodreportresultdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sodreportresultdto', 'Sodreportresultdto'] 
slug: /tools/sdk/powershell/sodpolicies/models/sodreportresultdto
tags: ['SDK', 'Software Development Kit', 'Sodreportresultdto', 'Sodreportresultdto']
---


# Sodreportresultdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "REPORT_RESULT" ] | SOD policy violation report result DTO type. | [optional] 
**Id** | **String** | SOD policy violation report result ID. | [optional] 
**Name** | **String** | Human-readable name of the SOD policy violation report result. | [optional] 

## Examples

- Prepare the resource
```powershell
$Sodreportresultdto = Initialize-Sodreportresultdto  -Type REPORT_RESULT `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name SOD Policy 1 Violation
```

- Convert the resource to JSON
```powershell
$Sodreportresultdto | ConvertTo-JSON
```


[[Back to top]](#) 

