---
id: privilegedrecommendationinstance
title: Privilegedrecommendationinstance
pagination_label: Privilegedrecommendationinstance
sidebar_label: Privilegedrecommendationinstance
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Privilegedrecommendationinstance', 'Privilegedrecommendationinstance'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/privilegedrecommendationinstance
tags: ['SDK', 'Software Development Kit', 'Privilegedrecommendationinstance', 'Privilegedrecommendationinstance']
---


# Privilegedrecommendationinstance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier for this entitlement instance. | [optional] 
**Attribute** | **String** | The entitlement attribute name. | [optional] 
**SourceId** | **String** | The ID of the source that owns this entitlement. | [optional] 
**SourceName** | **String** | The display name of the source. | [optional] 
**Type** | **String** | The entitlement type. | [optional] 
**Value** | **String** | The entitlement value or distinguished name. | [optional] 
**Status** | **String** | The current review status of this instance. | [optional] 
**PrivilegeLevel** | **String** | The currently assigned privilege level, if any. | [optional] 
**Description** | **String** | The current description of the entitlement, if one exists. | [optional] 
**RecommendedAt** | **System.DateTime** | The timestamp when this instance was recommended. | [optional] 

## Examples

- Prepare the resource
```powershell
$Privilegedrecommendationinstance = Initialize-Privilegedrecommendationinstance  -Id d6127d2c-bd62-4217-b187-e4b28f328080 `
 -Attribute memberOf `
 -SourceId 2c9180877a7c8e88017a7d1234567890 `
 -SourceName AD Corp `
 -Type group `
 -Value CN=Domain Admins,CN=Users,DC=corp,DC=example,DC=com `
 -Status suggested `
 -PrivilegeLevel high `
 -Description Grants full administrative access to the domain. `
 -RecommendedAt 2026-03-01T00:00Z
```

- Convert the resource to JSON
```powershell
$Privilegedrecommendationinstance | ConvertTo-JSON
```


[[Back to top]](#) 

