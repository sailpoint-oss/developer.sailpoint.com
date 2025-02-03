---
id: beta-tagged-object-dto
title: TaggedObjectDto
pagination_label: TaggedObjectDto
sidebar_label: TaggedObjectDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaggedObjectDto', 'BetaTaggedObjectDto'] 
slug: /tools/sdk/powershell/beta/models/tagged-object-dto
tags: ['SDK', 'Software Development Kit', 'TaggedObjectDto', 'BetaTaggedObjectDto']
---


# TaggedObjectDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCESS_PROFILE",    "APPLICATION",    "CAMPAIGN",    "ENTITLEMENT",    "IDENTITY",    "ROLE",    "SOD_POLICY",    "SOURCE" ] | DTO type | [optional] 
**Id** | **String** | ID of the object this reference applies to | [optional] 
**Name** | **String** | Human-readable display name of the object this reference applies to | [optional] 

## Examples

- Prepare the resource
```powershell
$TaggedObjectDto = Initialize-PSSailpoint.BetaTaggedObjectDto  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$TaggedObjectDto | ConvertTo-JSON
```


[[Back to top]](#) 

