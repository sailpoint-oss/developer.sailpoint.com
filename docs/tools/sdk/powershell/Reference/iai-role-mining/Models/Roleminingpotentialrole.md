---
id: roleminingpotentialrole
title: Roleminingpotentialrole
pagination_label: Roleminingpotentialrole
sidebar_label: Roleminingpotentialrole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingpotentialrole', 'Roleminingpotentialrole'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingpotentialrole
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialrole', 'Roleminingpotentialrole']
---


# Roleminingpotentialrole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedBy** | [**RoleminingsessionresponseCreatedBy**](roleminingsessionresponse-created-by) |  | [optional] 
**Density** | **Int32** | The density of a potential role. | [optional] 
**Description** | **String** | The description of a potential role. | [optional] 
**EntitlementCount** | **Int32** | The number of entitlements in a potential role. | [optional] 
**ExcludedEntitlements** | **[]String** | The list of entitlement ids to be excluded. | [optional] 
**Freshness** | **Int32** | The freshness of a potential role. | [optional] 
**IdentityCount** | **Int32** | The number of identities in a potential role. | [optional] 
**IdentityDistribution** | [**[]Roleminingidentitydistribution**](roleminingidentitydistribution) | Identity attribute distribution. | [optional] 
**IdentityIds** | **[]String** | The list of ids in a potential role. | [optional] 
**IdentityGroupStatus** | **String** | The status for this identity group which can be OBTAINED or COMPRESSED | [optional] 
**Name** | **String** | Name of the potential role. | [optional] 
**PotentialRoleRef** | [**RoleminingpotentialrolePotentialRoleRef**](roleminingpotentialrole-potential-role-ref) |  | [optional] 
**ProvisionState** | [**Roleminingpotentialroleprovisionstate**](roleminingpotentialroleprovisionstate) |  | [optional] 
**Quality** | **Int32** | The quality of a potential role. | [optional] 
**RoleId** | **String** | The roleId of a potential role. | [optional] 
**Saved** | **Boolean** | The potential role's saved status. | [optional] [default to $false]
**Session** | [**Roleminingsessionparametersdto**](roleminingsessionparametersdto) |  | [optional] 
**Type** | [**Roleminingroletype**](roleminingroletype) |  | [optional] 
**Id** | **String** | Id of the potential role | [optional] 
**CreatedDate** | **System.DateTime** | The date-time when this potential role was created. | [optional] 
**ModifiedDate** | **System.DateTime** | The date-time when this potential role was modified. | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleminingpotentialrole = Initialize-Roleminingpotentialrole  -CreatedBy null `
 -Density 75 `
 -Description Potential Role for Accounting dept `
 -EntitlementCount 25 `
 -ExcludedEntitlements ["07a0b4e2","13b4e2a0"] `
 -Freshness 75 `
 -IdentityCount 25 `
 -IdentityDistribution null `
 -IdentityIds ["07a0b4e2","13b4e2a0"] `
 -IdentityGroupStatus OBTAINED `
 -Name Saved Potential Role - 07/10 `
 -PotentialRoleRef null `
 -ProvisionState null `
 -Quality 100 `
 -RoleId 07a0b4e2-7a76-44fa-bd0b-c64654b66519 `
 -Saved true `
 -Session null `
 -Type null `
 -Id e0cc5d7d-bf7f-4f81-b2af-8885b09d9923 `
 -CreatedDate 2020-01-01T00:00Z `
 -ModifiedDate 2020-01-01T00:00Z
```

- Convert the resource to JSON
```powershell
$Roleminingpotentialrole | ConvertTo-JSON
```


[[Back to top]](#) 

