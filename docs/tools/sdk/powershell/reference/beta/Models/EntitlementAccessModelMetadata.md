---
id: beta-entitlement-access-model-metadata
title: EntitlementAccessModelMetadata
pagination_label: EntitlementAccessModelMetadata
sidebar_label: EntitlementAccessModelMetadata
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementAccessModelMetadata'] 
slug: /tools/sdk/powershell/beta/models/entitlement-access-model-metadata
tags: ['SDK', 'Software Development Kit', 'EntitlementAccessModelMetadata']
---


# EntitlementAccessModelMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** |  Pointer to [**[]AttributeDTO**](attribute-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementAccessModelMetadata = Initialize-PSSailpoint.BetaEntitlementAccessModelMetadata  -Attributes [{key&#x3D;iscPrivacy, name&#x3D;Privacy, multiselect&#x3D;false, status&#x3D;active, type&#x3D;governance, objectTypes&#x3D;[all], description&#x3D;Specifies the level of privacy associated with an access item., values&#x3D;[{value&#x3D;public, name&#x3D;Public, status&#x3D;active}]}]
```

- Convert the resource to JSON
```powershell
$EntitlementAccessModelMetadata | ConvertTo-JSON
```


[[Back to top]](#) 

