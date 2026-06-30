---
id: entitlementrecommendationrecord
title: Entitlementrecommendationrecord
pagination_label: Entitlementrecommendationrecord
sidebar_label: Entitlementrecommendationrecord
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementrecommendationrecord', 'Entitlementrecommendationrecord'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/entitlementrecommendationrecord
tags: ['SDK', 'Software Development Kit', 'Entitlementrecommendationrecord', 'Entitlementrecommendationrecord']
---


# Entitlementrecommendationrecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RecordType** |  **Enum** [  "SED",    "privilege" ] | The type of recommendation. ""SED"" indicates a suggested description recommendation; ""privilege"" indicates a privilege-level recommendation. | [optional] 
**Id** | **String** | The unique identifier for this recommendation record. | [optional] 
**Attribute** | **String** | The entitlement attribute name (e.g. ""groups""). | [optional] 
**DisplayName** | **String** | The human-readable display name of the entitlement. | [optional] 
**Name** | **String** | The internal name of the entitlement. | [optional] 
**SourceId** | **String** | The ID of the source that owns this entitlement. | [optional] 
**SourceName** | **String** | The display name of the source that owns this entitlement. | [optional] 
**Status** | **String** | The current review status of the recommendation. | [optional] 
**Type** | **String** | The entitlement type (e.g. ""group""). | [optional] 
**Value** | **String** | The entitlement value or identifier. | [optional] 
**Description** | **String** | The current description of the entitlement, if one exists. | [optional] 
**SuggestedDescription** | **String** | The AI-generated suggested description for the entitlement (SED records only). | [optional] 
**Privilege** | **String** | The current privilege level assigned to the entitlement. | [optional] 
**SuggestedPrivilege** | **String** | The AI-suggested privilege level for the entitlement (privilege records only). | [optional] 
**ApprovedBy** | **String** | The ID of the identity who approved this recommendation. | [optional] 
**ApprovedType** | **String** | How the recommendation was approved (e.g. ""direct""). | [optional] 
**ApprovedWhen** | **System.DateTime** | The timestamp when the recommendation was approved. | [optional] 
**LlmBatchCreatedAt** | **System.DateTime** | The timestamp when the LLM batch that generated this recommendation was created. | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementrecommendationrecord = Initialize-Entitlementrecommendationrecord  -RecordType SED `
 -Id 79db50d4-723c-4aa0-a824-83c2205d82d1 `
 -Attribute groups `
 -DisplayName Schema Admins `
 -Name Schema Admins `
 -SourceId 2c9180877a7c8e88017a7d1234567890 `
 -SourceName Active Directory `
 -Status suggested `
 -Type group `
 -Value CN=Schema Admins,DC=example,DC=com `
 -Description Grants full control over the Active Directory schema. `
 -SuggestedDescription Grants full administrative access to the domain. `
 -Privilege high `
 -SuggestedPrivilege high `
 -ApprovedBy 2c91808a7f3b2e8a017f3c3e5f6d0099 `
 -ApprovedType direct `
 -ApprovedWhen 2026-03-15T14:22Z `
 -LlmBatchCreatedAt 2026-03-01T00:00Z
```

- Convert the resource to JSON
```powershell
$Entitlementrecommendationrecord | ConvertTo-JSON
```


[[Back to top]](#) 

