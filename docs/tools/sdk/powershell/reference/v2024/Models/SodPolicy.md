---
id: v2024-sod-policy
title: SodPolicy
pagination_label: SodPolicy
sidebar_label: SodPolicy
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodPolicy'] 
slug: /tools/sdk/powershell/v2024/models/sod-policy
tags: ['SDK', 'Software Development Kit', 'SodPolicy']
---


# SodPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Policy id | [optional] [readonly] 
**Name** |  Pointer to **String** | Policy Business Name | [optional] 
**Created** |  Pointer to **System.DateTime** | The time when this SOD policy is created. | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | The time when this SOD policy is modified. | [optional] [readonly] 
**Description** |  Pointer to **String** | Optional description of the SOD policy | [optional] 
**OwnerRef** |  Pointer to [**SodPolicyOwnerRef**](sod-policy-owner-ref) |  | [optional] 
**ExternalPolicyReference** |  Pointer to **String** | Optional External Policy Reference | [optional] 
**PolicyQuery** |  Pointer to **String** | Search query of the SOD policy | [optional] 
**CompensatingControls** |  Pointer to **String** | Optional compensating controls(Mitigating Controls) | [optional] 
**CorrectionAdvice** |  Pointer to **String** | Optional correction advice | [optional] 
**State** |  Pointer to  **Enum** [  "ENFORCED",    "NOT_ENFORCED" ] | whether the policy is enforced or not | [optional] 
**Tags** |  Pointer to **[]String** | tags for this policy object | [optional] 
**CreatorId** |  Pointer to **String** | Policy's creator ID | [optional] [readonly] 
**ModifierId** |  Pointer to **String** | Policy's modifier ID | [optional] [readonly] 
**ViolationOwnerAssignmentConfig** |  Pointer to [**ViolationOwnerAssignmentConfig**](violation-owner-assignment-config) |  | [optional] 
**Scheduled** |  Pointer to **Boolean** | defines whether a policy has been scheduled or not | [optional] [default to $false]
**Type** |  Pointer to  **Enum** [  "GENERAL",    "CONFLICTING_ACCESS_BASED" ] | whether a policy is query based or conflicting access based | [optional] [default to "GENERAL"]
**ConflictingAccessCriteria** |  Pointer to [**SodPolicyConflictingAccessCriteria**](sod-policy-conflicting-access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicy = Initialize-PSSailpoint.V2024SodPolicy  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Name policy-xyz `
 -Created 2020-01-01T00:00Z `
 -Modified 2020-01-01T00:00Z `
 -Description This policy ensures compliance of xyz `
 -OwnerRef null `
 -ExternalPolicyReference XYZ policy `
 -PolicyQuery @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdg) AND @access(id:0f11f2a4-7c94-4bf3-a2bd-742580fe3bdf) `
 -CompensatingControls Have a manager review the transaction decisions for their &quot;out of compliance&quot; employee `
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

