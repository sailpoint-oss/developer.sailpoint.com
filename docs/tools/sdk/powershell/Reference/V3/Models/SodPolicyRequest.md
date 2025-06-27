---
id: sod-policy-request
title: SodPolicyRequest
pagination_label: SodPolicyRequest
sidebar_label: SodPolicyRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodPolicyRequest', 'SodPolicyRequest'] 
slug: /tools/sdk/powershell/v3/models/sod-policy-request
tags: ['SDK', 'Software Development Kit', 'SodPolicyRequest', 'SodPolicyRequest']
---


# SodPolicyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Policy id | [optional] [readonly] 
**Name** | **String** | Policy Business Name | [optional] 
**Created** | **System.DateTime** | The time when this SOD policy is created. | [optional] [readonly] 
**Modified** | **System.DateTime** | The time when this SOD policy is modified. | [optional] [readonly] 
**Description** | **String** | Optional description of the SOD policy | [optional] 
**OwnerRef** | [**SodPolicyOwnerRef**](sod-policy-owner-ref) |  | [optional] 
**ExternalPolicyReference** | **String** | Optional External Policy Reference | [optional] 
**PolicyQuery** | **String** | Search query of the SOD policy | [optional] 
**CompensatingControls** | **String** | Optional compensating controls(Mitigating Controls) | [optional] 
**CorrectionAdvice** | **String** | Optional correction advice | [optional] 
**State** |  **Enum** [  "ENFORCED",    "NOT_ENFORCED" ] | whether the policy is enforced or not | [optional] 
**Tags** | **[]String** | tags for this policy object | [optional] 
**CreatorId** | **String** | Policy's creator ID | [optional] [readonly] 
**ModifierId** | **String** | Policy's modifier ID | [optional] [readonly] 
**ViolationOwnerAssignmentConfig** | [**ViolationOwnerAssignmentConfig**](violation-owner-assignment-config) |  | [optional] 
**Scheduled** | **Boolean** | defines whether a policy has been scheduled or not | [optional] [default to $false]
**Type** |  **Enum** [  "GENERAL",    "CONFLICTING_ACCESS_BASED" ] | whether a policy is query based or conflicting access based | [optional] [default to "GENERAL"]
**ConflictingAccessCriteria** | [**SodPolicyRequestAllOfConflictingAccessCriteria**](sod-policy-request-all-of-conflicting-access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicyRequest = Initialize-SodPolicyRequest  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
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
$SodPolicyRequest | ConvertTo-JSON
```


[[Back to top]](#) 

