---
id: v2024-campaign-reference
title: CampaignReference
pagination_label: CampaignReference
sidebar_label: CampaignReference
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignReference', 'V2024CampaignReference'] 
slug: /tools/sdk/powershell/v2024/models/campaign-reference
tags: ['SDK', 'Software Development Kit', 'CampaignReference', 'V2024CampaignReference']
---


# CampaignReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the campaign. | [required]
**Name** |  **String** | The name of the campaign. | [required]
**Type** |   **Enum** [  "CAMPAIGN" ] | The type of object that is being referenced. | [required]
**CampaignType** |   **Enum** [  "MANAGER",    "SOURCE_OWNER",    "SEARCH" ] | The type of the campaign. | [required]
**Description** |  **String** | The description of the campaign set by the admin who created it. | [required]
**CorrelatedStatus** |   **Enum** [  "CORRELATED",    "UNCORRELATED" ] | The correlatedStatus of the campaign. Only SOURCE_OWNER campaigns can be Uncorrelated. An Uncorrelated certification campaign only includes Uncorrelated identities (An identity is uncorrelated if it has no accounts on an authoritative source). | [required]
**MandatoryCommentRequirement** |   **Enum** [  "ALL_DECISIONS",    "REVOKE_ONLY_DECISIONS",    "NO_DECISIONS" ] | Determines whether comments are required for decisions during certification reviews. You can require comments for all decisions, revoke-only decisions, or no decisions. By default, comments are not required for decisions. | [required]

## Examples

- Prepare the resource
```powershell
$CampaignReference = Initialize-PSSailpoint.V2024CampaignReference  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Name Campaign Name `
 -Type CAMPAIGN `
 -CampaignType MANAGER `
 -Description A description of the campaign `
 -CorrelatedStatus CORRELATED `
 -MandatoryCommentRequirement NO_DECISIONS
```

- Convert the resource to JSON
```powershell
$CampaignReference | ConvertTo-JSON
```


[[Back to top]](#) 

