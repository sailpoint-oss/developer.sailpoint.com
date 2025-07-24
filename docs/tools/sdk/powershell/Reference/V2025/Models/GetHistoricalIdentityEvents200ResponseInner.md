---
id: v2025-get-historical-identity-events200-response-inner
title: GetHistoricalIdentityEvents200ResponseInner
pagination_label: GetHistoricalIdentityEvents200ResponseInner
sidebar_label: GetHistoricalIdentityEvents200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetHistoricalIdentityEvents200ResponseInner', 'V2025GetHistoricalIdentityEvents200ResponseInner'] 
slug: /tools/sdk/powershell/v2025/models/get-historical-identity-events200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetHistoricalIdentityEvents200ResponseInner', 'V2025GetHistoricalIdentityEvents200ResponseInner']
---


# GetHistoricalIdentityEvents200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationId** | **String** | the id of the certification item | [required]
**CertificationName** | **String** | the certification item name | [required]
**SignedDate** | **String** | the date ceritification was signed | [optional] 
**Certifiers** | [**[]CertifierResponse**](certifier-response) | this field is deprecated and may go away | [optional] 
**Reviewers** | [**[]CertifierResponse**](certifier-response) | The list of identities who review this certification | [optional] 
**Signer** | [**CertifierResponse**](certifier-response) |  | [optional] 
**EventType** | **String** | the event type | [optional] 
**DateTime** | **String** | the date of event | [optional] 
**IdentityId** | **String** | the identity id | [optional] 
**AccessItem** | [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | [required]
**GovernanceEvent** | [**CorrelatedGovernanceEvent**](correlated-governance-event) |  | [required]
**AccessItemType** |  **Enum** [  "account",    "app",    "entitlement",    "role",    "accessProfile" ] | the access item type | [optional] 
**AttributeChanges** | [**[]AttributeChange**](attribute-change) |  | [required]
**AccessRequest** | [**AccessRequestResponse1**](access-request-response1) |  | [required]
**Account** | [**AccountStatusChangedAccount**](account-status-changed-account) |  | [required]
**StatusChange** | [**AccountStatusChangedStatusChange**](account-status-changed-status-change) |  | [required]

## Examples

- Prepare the resource
```powershell
$GetHistoricalIdentityEvents200ResponseInner = Initialize-V2025GetHistoricalIdentityEvents200ResponseInner  -CertificationId 2c91808a77ff216301782327a50f09bf `
 -CertificationName Cert name `
 -SignedDate 2019-03-08T22:37:33.901Z `
 -Certifiers [{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}] `
 -Reviewers [{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}] `
 -Signer null `
 -EventType AccountStatusChanged `
 -DateTime 2019-03-08T22:37:33.901Z `
 -IdentityId 8a80828f643d484f01643e14202e206f `
 -AccessItem null `
 -GovernanceEvent null `
 -AccessItemType account `
 -AttributeChanges null `
 -AccessRequest null `
 -Account null `
 -StatusChange null
```

- Convert the resource to JSON
```powershell
$GetHistoricalIdentityEvents200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

