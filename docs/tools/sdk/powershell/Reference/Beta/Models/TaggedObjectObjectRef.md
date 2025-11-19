---
id: beta-tagged-object-object-ref
title: TaggedObjectObjectRef
pagination_label: TaggedObjectObjectRef
sidebar_label: TaggedObjectObjectRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TaggedObjectObjectRef', 'BetaTaggedObjectObjectRef'] 
slug: /tools/sdk/powershell/beta/models/tagged-object-object-ref
tags: ['SDK', 'Software Development Kit', 'TaggedObjectObjectRef', 'BetaTaggedObjectObjectRef']
---


# TaggedObjectObjectRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ACCESS_PROFILE",    "APPLICATION",    "CAMPAIGN",    "ENTITLEMENT",    "IDENTITY",    "ROLE",    "SOD_POLICY",    "SOURCE" ] | DTO type | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 
**Name** | **String** | Human-readable display name of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$TaggedObjectObjectRef = Initialize-BetaTaggedObjectObjectRef  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$TaggedObjectObjectRef | ConvertTo-JSON
```


[[Back to top]](#) 

