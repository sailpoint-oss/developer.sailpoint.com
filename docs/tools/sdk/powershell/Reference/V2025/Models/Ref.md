---
id: v2025-ref
title: Ref
pagination_label: Ref
sidebar_label: Ref
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Ref', 'V2025Ref'] 
slug: /tools/sdk/powershell/v2025/models/ref
tags: ['SDK', 'Software Development Kit', 'Ref', 'V2025Ref']
---


# Ref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**DtoType**](dto-type) |  | [optional] 
**Id** | **String** | ID of the object to which this reference applies | [optional] 

## Examples

- Prepare the resource
```powershell
$Ref = Initialize-V2025Ref  -Type null `
 -Id 2c91808568c529c60168cca6f90c1313
```

- Convert the resource to JSON
```powershell
$Ref | ConvertTo-JSON
```


[[Back to top]](#) 

