---
id: beta-sod-policy
title: SodPolicy
pagination_label: SodPolicy
sidebar_label: SodPolicy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodPolicy', 'BetaSodPolicy'] 
slug: /tools/sdk/powershell/beta/models/sod-policy
tags: ['SDK', 'Software Development Kit', 'SodPolicy', 'BetaSodPolicy']
---


# SodPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Policy ID. | [optional] [readonly] 
**Name** | **String** | Policy business name. | [optional] 
**Created** | **System.DateTime** | The time when this SOD policy is created. | [optional] [readonly] 
**Modified** | **System.DateTime** | The time when this SOD policy is modified. | [optional] [readonly] 
**Description** | **String** | Optional description of the SOD policy. | [optional] 
**OwnerRef** | [**SodPolicyOwnerRef**](sod-policy-owner-ref) |  | [optional] 
**ExternalPolicyReference** | **String** | Optional external policy reference. | [optional] 
**PolicyQuery** | **String** | Search query of the SOD policy. | [optional] 
**CompensatingControls** | **String** | Optional compensating controls (Mitigating Controls). | [optional] 
**CorrectionAdvice** | **String** | Optional correction advice. | [optional] 
**State** |  **Enum** [  "ENFORCED",    "NOT_ENFORCED" ] | Whether the policy is enforced or not. | [optional] 
**Tags** | **[]String** | Tags for the policy object. | [optional] 
**CreatorId** | **String** | Policy's creator ID. | [optional] [readonly] 
**ModifierId** | **String** | Policy's modifier ID. | [optional] [readonly] 
**ViolationOwnerAssignmentConfig** | [**ViolationOwnerAssignmentConfig**](violation-owner-assignment-config) |  | [optional] 
**Scheduled** | **Boolean** | Defines whether a policy has been scheduled or not. | [optional] [default to $false]
**Type** |  **Enum** [  "GENERAL",    "CONFLICTING_ACCESS_BASED" ] | Whether a policy is query based or conflicting access based. | [optional] [default to "GENERAL"]
**ConflictingAccessCriteria** | [**SodPolicyConflictingAccessCriteria**](sod-policy-conflicting-access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicy = Initialize-PSSailpoint.BetaSodPolicy  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Name policy-xyz `
 -Created 2020-01-01T00:00Z `
 -Modified 2020-01-01T00:00Z `
 -Description This policy ensures compliance of xyz `
 -OwnerRef null `
 -ExternalPolicyReference XYZ policy `
 -PolicyQuery @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf) `
 -CompensatingControls Have a manager review the transaction decisions for their "out of compliance" employee `
 -CorrectionAdvice Based on the role of the employee, managers should remove access that is not required for their job function. `
 -State ENFORCED `
 -Tags [TAG1, TAG2] `
 -CreatorId 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -ModifierId 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -ViolationOwnerAssignmentConfig null `
 -Scheduled true `
 -Type GENERAL `
 -ConflictingAccessCriteria null
```

- Convert the resource to JSON
```powershell
$SodPolicy | ConvertTo-JSON
```


[[Back to top]](#) 

