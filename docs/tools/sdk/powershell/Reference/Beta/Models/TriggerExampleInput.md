---
id: beta-trigger-example-input
title: TriggerExampleInput
pagination_label: TriggerExampleInput
sidebar_label: TriggerExampleInput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TriggerExampleInput', 'BetaTriggerExampleInput'] 
slug: /tools/sdk/powershell/beta/models/trigger-example-input
tags: ['SDK', 'Software Development Kit', 'TriggerExampleInput', 'BetaTriggerExampleInput']
---


# TriggerExampleInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **String** | Access request's unique ID. | [required]
**RequestedFor** | [**[]AccessItemRequestedForDto1**](access-item-requested-for-dto1) | Identities whom access was requested for. | [required]
**RequestedItems** | [**[]AccessRequestPreApprovalRequestedItemsInner**](access-request-pre-approval-requested-items-inner) | Details about each requested access item. | [required]
**RequestedBy** | [**AccessItemRequesterDto1**](access-item-requester-dto1) |  | [required]
**RequestedItemsStatus** | [**[]AccessRequestPostApprovalRequestedItemsStatusInner**](access-request-post-approval-requested-items-status-inner) | Details about the outcome of each requested access item. | [required]
**Source** | [**AccountUncorrelatedSource**](account-uncorrelated-source) |  | [required]
**Status** |  **Enum** [  "Success",    "Failed",    "Terminated" ] | The overall status of the collection. | [required]
**Started** | **System.DateTime** | The date and time when the account collection started. | [required]
**Completed** | **System.DateTime** | The date and time when the account collection finished. | [required]
**Errors** | **[]String** | List of any accumulated error messages that occurred during provisioning. | [required]
**Warnings** | **[]String** | List of any accumulated warning messages that occurred during provisioning. | [required]
**Stats** | [**AccountsCollectedForAggregationStats**](accounts-collected-for-aggregation-stats) |  | [required]
**Identity** | [**IdentityDeletedIdentity**](identity-deleted-identity) |  | [required]
**Account** | [**AccountUncorrelatedAccount**](account-uncorrelated-account) |  | [required]
**Changes** | [**[]IdentityAttributesChangedChangesInner**](identity-attributes-changed-changes-inner) | List of identity's attributes that changed. | [required]
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Account attributes. The attributes' contents depend on the source's account schema. | [required]
**EntitlementCount** | **Int32** | The number of entitlements associated with this account. | [optional] 
**Campaign** | [**CampaignGeneratedCampaign**](campaign-generated-campaign) |  | [required]
**Certification** | [**CertificationSignedOffCertification**](certification-signed-off-certification) |  | [required]
**TrackingNumber** | **String** | Provisioning request's reference number. Useful for tracking status in the 'Account Activity' search interface. | [required]
**Sources** | **String** | Sources the provisioning transactions were performed on. Sources are comma separated. | [required]
**Action** | **String** | Origin of the provisioning request. | [optional] 
**Recipient** | [**ProvisioningCompletedRecipient**](provisioning-completed-recipient) |  | [required]
**Requester** | [**ProvisioningCompletedRequester**](provisioning-completed-requester) |  | [optional] 
**AccountRequests** | [**[]ProvisioningCompletedAccountRequestsInner**](provisioning-completed-account-requests-inner) | List of provisioning instructions to perform on an account-by-account basis. | [required]
**FileName** | **String** | Report file name. | [required]
**OwnerEmail** | **String** | Email address of the identity who owns the saved search. | [required]
**OwnerName** | **String** | Name of the identity who owns the saved search. | [required]
**Query** | **String** | Search query used to generate the report. | [required]
**SearchName** | **String** | Saved search name. | [required]
**SearchResults** | [**SavedSearchCompleteSearchResults**](saved-search-complete-search-results) |  | [required]
**SignedS3Url** | **String** | The Amazon S3 URL to download the report from. | [required]
**Uuid** | **String** | Identity's universal unique identifier (UUID) on the source. The source system generates the UUID. | [required]
**Id** | **String** | Source's unique ID. | [required]
**NativeIdentifier** | **String** | Account's unique ID on the source. | [required]
**SourceId** | **String** | Source ID. | [required]
**SourceName** | **String** | Source name. | [required]
**IdentityId** | **String** | ID of the identity correlated with the account. | [required]
**IdentityName** | **String** | Name of the identity correlated with the account. | [required]
**Name** | **String** | Source name. | [required]
**Type** | **String** | Connection type. | [required]
**Created** | **System.DateTime** | Date and time when the status change occurred. | [required]
**Connector** | **String** | Connector type used to connect to the source. | [required]
**Actor** | [**SourceUpdatedActor**](source-updated-actor) |  | [required]
**Deleted** | **System.DateTime** | Date and time when the source was deleted. | [required]
**Modified** | **System.DateTime** | Date and time when the source was modified. | [required]
**Application** | [**VAClusterStatusChangeEventApplication**](va-cluster-status-change-event-application) |  | [required]
**HealthCheckResult** | [**VAClusterStatusChangeEventHealthCheckResult**](va-cluster-status-change-event-health-check-result) |  | [required]
**PreviousHealthCheckResult** | [**VAClusterStatusChangeEventPreviousHealthCheckResult**](va-cluster-status-change-event-previous-health-check-result) |  | [required]

## Examples

- Prepare the resource
```powershell
$TriggerExampleInput = Initialize-PSSailpoint.BetaTriggerExampleInput  -AccessRequestId 2c91808b6ef1d43e016efba0ce470904 `
 -RequestedFor null `
 -RequestedItems null `
 -RequestedBy null `
 -RequestedItemsStatus null `
 -Source null `
 -Status Success `
 -Started 2020-06-29T22:01:50.474Z `
 -Completed 2020-06-29T22:02:04.090Z `
 -Errors null `
 -Warnings null `
 -Stats null `
 -Identity null `
 -Account null `
 -Changes null `
 -Attributes {firstname=John, lastname=Doe, email=john.doe@gmail.com, department=Sales, displayName=John Doe, created=2020-04-27T16:48:33.597Z, employeeNumber=E009, uid=E009, inactive=true, phone=null, identificationNumber=E009} `
 -EntitlementCount 0 `
 -Campaign null `
 -Certification null `
 -TrackingNumber 4b4d982dddff4267ab12f0f1e72b5a6d `
 -Sources Corp AD, Corp LDAP, Corp Salesforce `
 -Action IdentityRefresh `
 -Recipient null `
 -Requester null `
 -AccountRequests null `
 -FileName Modified.zip `
 -OwnerEmail test@sailpoint.com `
 -OwnerName Cloud Support `
 -Query modified:[now-7y/d TO now] `
 -SearchName Modified Activity `
 -SearchResults null `
 -SignedS3Url https://sptcbu-org-data-useast1.s3.amazonaws.com/arsenal-john/reports/Events%20Export.2020-05-06%2018%2759%20GMT.3e580592-86e4-4953-8aea-49e6ef20a086.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200506T185919Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=AKIAV5E54XOGTS4Q4L7A%2F20200506%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2e732bb97a12a1fd8a215613e3c31fcdae8ba1fb6a25916843ab5b51d2ddefbc `
 -Uuid b7264868-7201-415f-9118-b581d431c688 `
 -Id 2c9180866166b5b0016167c32ef31a66 `
 -NativeIdentifier E009 `
 -SourceId 2c918082814e693601816e09471b29b6 `
 -SourceName Active Directory `
 -IdentityId ee769173319b41d19ccec6c235423237b `
 -IdentityName john.doe `
 -Name Test source `
 -Type DIRECT_CONNECT `
 -Created 2020-06-29T22:01:50.474Z `
 -Connector active-directory `
 -Actor null `
 -Deleted 2021-03-29T22:01:50.474Z `
 -Modified 2021-03-29T22:01:50.474Z `
 -Application null `
 -HealthCheckResult null `
 -PreviousHealthCheckResult null
```

- Convert the resource to JSON
```powershell
$TriggerExampleInput | ConvertTo-JSON
```


[[Back to top]](#) 

