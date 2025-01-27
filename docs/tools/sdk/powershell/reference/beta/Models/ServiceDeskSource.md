---
id: beta-service-desk-source
title: ServiceDeskSource
pagination_label: ServiceDeskSource
sidebar_label: ServiceDeskSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ServiceDeskSource'] 
slug: /tools/sdk/powershell/beta/models/service-desk-source
tags: ['SDK', 'Software Development Kit', 'ServiceDeskSource']
---


# ServiceDeskSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "SOURCE" ] | DTO type of source for service desk integration template. | [optional] 
**Id** |  Pointer to **String** | ID of source for service desk integration template. | [optional] 
**Name** |  Pointer to **String** | Human-readable name of source for service desk integration template. | [optional] 

## Examples

- Prepare the resource
```powershell
$ServiceDeskSource = Initialize-PSSailpoint.BetaServiceDeskSource  -Type SOURCE `
 -Id 2c9180835d191a86015d28455b4b232a `
 -Name HR Active Directory
```

- Convert the resource to JSON
```powershell
$ServiceDeskSource | ConvertTo-JSON
```


[[Back to top]](#) 

