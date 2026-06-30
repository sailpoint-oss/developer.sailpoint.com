---
id: privilegedrecommendationgroup
title: Privilegedrecommendationgroup
pagination_label: Privilegedrecommendationgroup
sidebar_label: Privilegedrecommendationgroup
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Privilegedrecommendationgroup', 'Privilegedrecommendationgroup'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/privilegedrecommendationgroup
tags: ['SDK', 'Software Development Kit', 'Privilegedrecommendationgroup', 'Privilegedrecommendationgroup']
---


# Privilegedrecommendationgroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementName** | **String** | The name of the entitlement shared across all instances in this group. | [optional] 
**ConnectorType** | **String** | The connector type associated with all instances in this group. | [optional] 
**RecommendationScore** | **String** | A decimal string representing the confidence score of the privilege recommendation (0.0-1.0). | [optional] 
**OrgCount** | **Int32** | The number of organizations in which this entitlement appears as privileged. | [optional] 
**InstanceCount** | **Int32** | The total number of individual entitlement instances in this group. | [optional] 
**Instances** | [**[]Privilegedrecommendationinstance**](privilegedrecommendationinstance) | The individual entitlement instances belonging to this group. | [optional] 

## Examples

- Prepare the resource
```powershell
$Privilegedrecommendationgroup = Initialize-Privilegedrecommendationgroup  -EntitlementName Domain Admins `
 -ConnectorType Active Directory - Direct `
 -RecommendationScore .85 `
 -OrgCount 8 `
 -InstanceCount 2 `
 -Instances null
```

- Convert the resource to JSON
```powershell
$Privilegedrecommendationgroup | ConvertTo-JSON
```


[[Back to top]](#) 

