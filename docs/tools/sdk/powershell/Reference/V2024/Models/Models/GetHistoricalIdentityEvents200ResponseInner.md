---
id: v2024-get-historical-identity-events200-response-inner
title: GetHistoricalIdentityEvents200ResponseInner
pagination_label: GetHistoricalIdentityEvents200ResponseInner
sidebar_label: GetHistoricalIdentityEvents200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetHistoricalIdentityEvents200ResponseInner', 'V2024GetHistoricalIdentityEvents200ResponseInner'] 
slug: /tools/sdk/powershell/v2024/models/get-historical-identity-events200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetHistoricalIdentityEvents200ResponseInner', 'V2024GetHistoricalIdentityEvents200ResponseInner']
---


# GetHistoricalIdentityEvents200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItem** |  Pointer to [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | [optional] 
**IdentityId** |  Pointer to **String** | the identity id | [optional] 
**EventType** |  Pointer to **String** | the event type | [optional] 
**Dt** |  Pointer to **String** | the date of event | [optional] 
**GovernanceEvent** |  Pointer to [**CorrelatedGovernanceEvent**](correlated-governance-event) |  | [optional] 
**Changes** |  Pointer to [**[]AttributeChange**](attribute-change) |  | [optional] 
**AccessRequest** |  Pointer to [**AccessRequestResponse1**](access-request-response1) |  | [optional] 
**CertificationId** |  Pointer to **String** | the id of the certification item | [optional] 
**CertificationName** |  Pointer to **String** | the certification item name | [optional] 
**SignedDate** |  Pointer to **String** | the date ceritification was signed | [optional] 
**Certifiers** |  Pointer to [**[]CertifierResponse**](certifier-response) | this field is deprecated and may go away | [optional] 
**Reviewers** |  Pointer to [**[]CertifierResponse**](certifier-response) | The list of identities who review this certification | [optional] 
**Signer** |  Pointer to [**CertifierResponse**](certifier-response) |  | [optional] 
**Account** |  Pointer to [**AccountStatusChangedAccount**](account-status-changed-account) |  | [optional] 
**StatusChange** |  Pointer to [**AccountStatusChangedStatusChange**](account-status-changed-status-change) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$GetHistoricalIdentityEvents200ResponseInner = Initialize-PSSailpoint.V2024GetHistoricalIdentityEvents200ResponseInner  -AccessItem null `
 -IdentityId null `
 -EventType null `
 -Dt null `
 -GovernanceEvent null `
 -Changes null `
 -AccessRequest null `
 -CertificationId 2c91808a77ff216301782327a50f09bf `
 -CertificationName Cert name `
 -SignedDate 2019-03-08T22:37:33.901Z `
 -Certifiers [{id&#x3D;8a80828f643d484f01643e14202e206f, displayName&#x3D;John Snow}] `
 -Reviewers [{id&#x3D;8a80828f643d484f01643e14202e206f, displayName&#x3D;John Snow}] `
 -Signer null `
 -Account null `
 -StatusChange null
```

- Convert the resource to JSON
```powershell
$GetHistoricalIdentityEvents200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

