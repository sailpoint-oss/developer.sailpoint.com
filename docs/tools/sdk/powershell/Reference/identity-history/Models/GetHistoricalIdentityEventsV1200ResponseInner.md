---
id: get-historical-identity-events-v1200-response-inner
title: GetHistoricalIdentityEventsV1200ResponseInner
pagination_label: GetHistoricalIdentityEventsV1200ResponseInner
sidebar_label: GetHistoricalIdentityEventsV1200ResponseInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetHistoricalIdentityEventsV1200ResponseInner', 'GetHistoricalIdentityEventsV1200ResponseInner'] 
slug: /tools/sdk/powershell/identityhistory/models/get-historical-identity-events-v1200-response-inner
tags: ['SDK', 'Software Development Kit', 'GetHistoricalIdentityEventsV1200ResponseInner', 'GetHistoricalIdentityEventsV1200ResponseInner']
---


# GetHistoricalIdentityEventsV1200ResponseInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationId** | **String** | the id of the certification item | [required]
**CertificationName** | **String** | the certification item name | [required]
**SignedDate** | **String** | the date ceritification was signed | [optional] 
**Certifiers** | [**[]Certifierresponse**](certifierresponse) | this field is deprecated and may go away | [optional] 
**Reviewers** | [**[]Certifierresponse**](certifierresponse) | The list of identities who review this certification | [optional] 
**Signer** | [**Certifierresponse**](certifierresponse) |  | [optional] 
**EventType** | **String** | the event type | [optional] 
**DateTime** | **String** | the date of event | [optional] 
**IdentityId** | **String** | the identity id | [optional] 
**AccessItem** | [**AccessitemassociatedAccessItem**](accessitemassociated-access-item) |  | [required]
**GovernanceEvent** | [**Correlatedgovernanceevent**](correlatedgovernanceevent) |  | [required]
**AccessItemType** |  **Enum** [  "account",    "app",    "entitlement",    "role",    "accessProfile" ] | the access item type | [optional] 
**AttributeChanges** | [**[]Attributechange**](attributechange) |  | [required]
**AccessRequest** | [**Accessrequestresponse2**](accessrequestresponse2) |  | [required]
**Account** | [**AccountstatuschangedAccount**](accountstatuschanged-account) |  | [required]
**StatusChange** | [**AccountstatuschangedStatusChange**](accountstatuschanged-status-change) |  | [required]

## Examples

- Prepare the resource
```powershell
$GetHistoricalIdentityEventsV1200ResponseInner = Initialize-GetHistoricalIdentityEventsV1200ResponseInner  -CertificationId 2c91808a77ff216301782327a50f09bf `
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
$GetHistoricalIdentityEventsV1200ResponseInner | ConvertTo-JSON
```


[[Back to top]](#) 

