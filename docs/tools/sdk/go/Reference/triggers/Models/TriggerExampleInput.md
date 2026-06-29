---
id: v1-trigger-example-input
title: TriggerExampleInput
pagination_label: TriggerExampleInput
sidebar_label: TriggerExampleInput
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TriggerExampleInput', 'V1TriggerExampleInput'] 
slug: /tools/sdk/go/triggers/models/trigger-example-input
tags: ['SDK', 'Software Development Kit', 'TriggerExampleInput', 'V1TriggerExampleInput']
---

# TriggerExampleInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestId** | **string** | The unique ID of the access request. | 
**RequestedFor** | [**[]Accessitemrequestedfordto**](accessitemrequestedfordto) | Identities access was requested for. | 
**RequestedItems** | [**[]AccessrequestpreapprovalRequestedItemsInner**](accessrequestpreapproval-requested-items-inner) | Details of the access items being requested. | 
**RequestedBy** | [**Accessitemrequesterdto**](accessitemrequesterdto) |  | 
**RequestedItemsStatus** | [**[]AccessrequestpostapprovalRequestedItemsStatusInner**](accessrequestpostapproval-requested-items-status-inner) | Details on the outcome of each access item. | 
**Source** | [**Accountsourcereference**](accountsourcereference) |  | 
**Status** | **string** | The overall status of the collection. | 
**Started** | **SailPointTime** | The date and time when the account collection started. | 
**Completed** | **SailPointTime** | The date and time when the account collection finished. | 
**Errors** | **[]string** | A list of any accumulated error messages that occurred during provisioning. | 
**Warnings** | **[]string** | A list of any accumulated warning messages that occurred during provisioning. | 
**Stats** | [**AccountscollectedforaggregationStats**](accountscollectedforaggregation-stats) |  | 
**Identity** | [**IdentitydeletedIdentity**](identitydeleted-identity) |  | 
**Account** | [**Accountv2**](accountv2) |  | 
**Changes** | [**[]IdentityattributeschangedChangesInner**](identityattributeschanged-changes-inner) | A list of one or more identity attributes that changed on the identity. | 
**Attributes** | **map[string]interface{}** | The attributes of the account. The contents of attributes depends on the account schema for the source. | 
**EntitlementCount** | Pointer to **int32** | The number of entitlements associated with this account. | [optional] 
**Event** | [**AccountupdatedEvent**](accountupdated-event) |  | 
**AccountChangeTypes** | **[]string** | The types of changes that occurred to the account. | 
**SingleValueAttributeChanges** | [**[]MachineidentityupdatedSingleValueAttributeChangesInner**](machineidentityupdated-single-value-attribute-changes-inner) | Details about the single-value attribute changes that occurred. | 
**MultiValueAttributeChanges** | [**[]AccountupdatedMultiValueAttributeChangesInner**](accountupdated-multi-value-attribute-changes-inner) | Details about the multi-value attribute changes that occurred to the account. | 
**EntitlementChanges** | [**[]AccountupdatedEntitlementChangesInner**](accountupdated-entitlement-changes-inner) | Details about the entitlement changes that occurred to the account. | 
**Campaign** | [**CampaigngeneratedCampaign**](campaigngenerated-campaign) |  | 
**Certification** | [**CertificationsignedoffCertification**](certificationsignedoff-certification) |  | 
**EventType** | **string** | Type of the event. | 
**MachineIdentity** | [**MachineidentitydeletedMachineIdentity**](machineidentitydeleted-machine-identity) |  | 
**MachineIdentityChangeTypes** | **[]string** | Types of changes that occurred to the machine identity. | 
**UserEntitlementChanges** | [**MachineidentityupdatedUserEntitlementChanges**](machineidentityupdated-user-entitlement-changes) |  | 
**OwnerChanges** | [**MachineidentityupdatedOwnerChanges**](machineidentityupdated-owner-changes) |  | 
**TrackingNumber** | **string** | The reference number of the provisioning request. Useful for tracking status in the Account Activity search interface. | 
**Sources** | **string** | One or more sources that the provisioning transaction(s) were done against.  Sources are comma separated. | 
**Action** | Pointer to **NullableString** | Origin of where the provisioning request came from. | [optional] 
**Recipient** | [**ProvisioningcompletedRecipient**](provisioningcompleted-recipient) |  | 
**Requester** | Pointer to [**NullableProvisioningcompletedRequester**](provisioningcompleted-requester) |  | [optional] 
**AccountRequests** | [**[]ProvisioningcompletedAccountRequestsInner**](provisioningcompleted-account-requests-inner) | A list of provisioning instructions to be executed on a per-account basis. The order in which operations are executed may not always be predictable. | 
**FileName** | **string** | A name for the report file. | 
**OwnerEmail** | **string** | The email address of the identity that owns the saved search. | 
**OwnerName** | **string** | The name of the identity that owns the saved search. | 
**Query** | **string** | The search query that was used to generate the report. | 
**SearchName** | **string** | The name of the saved search. | 
**SearchResults** | [**SavedsearchcompleteSearchResults**](savedsearchcomplete-search-results) |  | 
**SignedS3Url** | **string** | The Amazon S3 URL to download the report from. | 
**Uuid** | Pointer to **string** | Source unique identifier for the identity. UUID is generated by the source system. | [optional] 
**Id** | **string** | The unique ID of the source. | 
**NativeIdentifier** | **string** | Unique ID of the account on the source. | 
**SourceId** | **string** | The ID of the source. | 
**SourceName** | **string** | The name of the source. | 
**IdentityId** | **string** | The ID of the identity that is correlated with this account. | 
**IdentityName** | **string** | The name of the identity that is correlated with this account. | 
**Name** | **string** | The user friendly name of the source. | 
**Type** | **string** | The connection type of the source. | 
**Created** | **SailPointTime** | The date and time the status change occurred. | 
**Connector** | **string** | The connector type used to connect to the source. | 
**Actor** | [**SourceupdatedActor**](sourceupdated-actor) |  | 
**Deleted** | **SailPointTime** | The date and time the source was deleted. | 
**Modified** | **SailPointTime** | The date and time the source was modified. | 
**Application** | [**VaclusterstatuschangeeventApplication**](vaclusterstatuschangeevent-application) |  | 
**HealthCheckResult** | [**VaclusterstatuschangeeventHealthCheckResult**](vaclusterstatuschangeevent-health-check-result) |  | 
**PreviousHealthCheckResult** | [**VaclusterstatuschangeeventPreviousHealthCheckResult**](vaclusterstatuschangeevent-previous-health-check-result) |  | 

## Methods

### NewTriggerExampleInput

`func NewTriggerExampleInput(accessRequestId string, requestedFor []Accessitemrequestedfordto, requestedItems []AccessrequestpreapprovalRequestedItemsInner, requestedBy Accessitemrequesterdto, requestedItemsStatus []AccessrequestpostapprovalRequestedItemsStatusInner, source Accountsourcereference, status string, started SailPointTime, completed SailPointTime, errors []string, warnings []string, stats AccountscollectedforaggregationStats, identity IdentitydeletedIdentity, account Accountv2, changes []IdentityattributeschangedChangesInner, attributes map[string]interface{}, event AccountupdatedEvent, accountChangeTypes []string, singleValueAttributeChanges []MachineidentityupdatedSingleValueAttributeChangesInner, multiValueAttributeChanges []AccountupdatedMultiValueAttributeChangesInner, entitlementChanges []AccountupdatedEntitlementChangesInner, campaign CampaigngeneratedCampaign, certification CertificationsignedoffCertification, eventType string, machineIdentity MachineidentitydeletedMachineIdentity, machineIdentityChangeTypes []string, userEntitlementChanges MachineidentityupdatedUserEntitlementChanges, ownerChanges MachineidentityupdatedOwnerChanges, trackingNumber string, sources string, recipient ProvisioningcompletedRecipient, accountRequests []ProvisioningcompletedAccountRequestsInner, fileName string, ownerEmail string, ownerName string, query string, searchName string, searchResults SavedsearchcompleteSearchResults, signedS3Url string, id string, nativeIdentifier string, sourceId string, sourceName string, identityId string, identityName string, name string, type_ string, created SailPointTime, connector string, actor SourceupdatedActor, deleted SailPointTime, modified SailPointTime, application VaclusterstatuschangeeventApplication, healthCheckResult VaclusterstatuschangeeventHealthCheckResult, previousHealthCheckResult VaclusterstatuschangeeventPreviousHealthCheckResult, ) *TriggerExampleInput`

NewTriggerExampleInput instantiates a new TriggerExampleInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTriggerExampleInputWithDefaults

`func NewTriggerExampleInputWithDefaults() *TriggerExampleInput`

NewTriggerExampleInputWithDefaults instantiates a new TriggerExampleInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestId

`func (o *TriggerExampleInput) GetAccessRequestId() string`

GetAccessRequestId returns the AccessRequestId field if non-nil, zero value otherwise.

### GetAccessRequestIdOk

`func (o *TriggerExampleInput) GetAccessRequestIdOk() (*string, bool)`

GetAccessRequestIdOk returns a tuple with the AccessRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestId

`func (o *TriggerExampleInput) SetAccessRequestId(v string)`

SetAccessRequestId sets AccessRequestId field to given value.


### GetRequestedFor

`func (o *TriggerExampleInput) GetRequestedFor() []Accessitemrequestedfordto`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *TriggerExampleInput) GetRequestedForOk() (*[]Accessitemrequestedfordto, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *TriggerExampleInput) SetRequestedFor(v []Accessitemrequestedfordto)`

SetRequestedFor sets RequestedFor field to given value.


### GetRequestedItems

`func (o *TriggerExampleInput) GetRequestedItems() []AccessrequestpreapprovalRequestedItemsInner`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *TriggerExampleInput) GetRequestedItemsOk() (*[]AccessrequestpreapprovalRequestedItemsInner, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *TriggerExampleInput) SetRequestedItems(v []AccessrequestpreapprovalRequestedItemsInner)`

SetRequestedItems sets RequestedItems field to given value.


### GetRequestedBy

`func (o *TriggerExampleInput) GetRequestedBy() Accessitemrequesterdto`

GetRequestedBy returns the RequestedBy field if non-nil, zero value otherwise.

### GetRequestedByOk

`func (o *TriggerExampleInput) GetRequestedByOk() (*Accessitemrequesterdto, bool)`

GetRequestedByOk returns a tuple with the RequestedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedBy

`func (o *TriggerExampleInput) SetRequestedBy(v Accessitemrequesterdto)`

SetRequestedBy sets RequestedBy field to given value.


### GetRequestedItemsStatus

`func (o *TriggerExampleInput) GetRequestedItemsStatus() []AccessrequestpostapprovalRequestedItemsStatusInner`

GetRequestedItemsStatus returns the RequestedItemsStatus field if non-nil, zero value otherwise.

### GetRequestedItemsStatusOk

`func (o *TriggerExampleInput) GetRequestedItemsStatusOk() (*[]AccessrequestpostapprovalRequestedItemsStatusInner, bool)`

GetRequestedItemsStatusOk returns a tuple with the RequestedItemsStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItemsStatus

`func (o *TriggerExampleInput) SetRequestedItemsStatus(v []AccessrequestpostapprovalRequestedItemsStatusInner)`

SetRequestedItemsStatus sets RequestedItemsStatus field to given value.


### GetSource

`func (o *TriggerExampleInput) GetSource() Accountsourcereference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *TriggerExampleInput) GetSourceOk() (*Accountsourcereference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *TriggerExampleInput) SetSource(v Accountsourcereference)`

SetSource sets Source field to given value.


### GetStatus

`func (o *TriggerExampleInput) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TriggerExampleInput) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TriggerExampleInput) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetStarted

`func (o *TriggerExampleInput) GetStarted() SailPointTime`

GetStarted returns the Started field if non-nil, zero value otherwise.

### GetStartedOk

`func (o *TriggerExampleInput) GetStartedOk() (*SailPointTime, bool)`

GetStartedOk returns a tuple with the Started field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStarted

`func (o *TriggerExampleInput) SetStarted(v SailPointTime)`

SetStarted sets Started field to given value.


### GetCompleted

`func (o *TriggerExampleInput) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *TriggerExampleInput) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *TriggerExampleInput) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.


### GetErrors

`func (o *TriggerExampleInput) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *TriggerExampleInput) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *TriggerExampleInput) SetErrors(v []string)`

SetErrors sets Errors field to given value.


### SetErrorsNil

`func (o *TriggerExampleInput) SetErrorsNil(b bool)`

 SetErrorsNil sets the value for Errors to be an explicit nil

### UnsetErrors
`func (o *TriggerExampleInput) UnsetErrors()`

UnsetErrors ensures that no value is present for Errors, not even an explicit nil
### GetWarnings

`func (o *TriggerExampleInput) GetWarnings() []string`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TriggerExampleInput) GetWarningsOk() (*[]string, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TriggerExampleInput) SetWarnings(v []string)`

SetWarnings sets Warnings field to given value.


### SetWarningsNil

`func (o *TriggerExampleInput) SetWarningsNil(b bool)`

 SetWarningsNil sets the value for Warnings to be an explicit nil

### UnsetWarnings
`func (o *TriggerExampleInput) UnsetWarnings()`

UnsetWarnings ensures that no value is present for Warnings, not even an explicit nil
### GetStats

`func (o *TriggerExampleInput) GetStats() AccountscollectedforaggregationStats`

GetStats returns the Stats field if non-nil, zero value otherwise.

### GetStatsOk

`func (o *TriggerExampleInput) GetStatsOk() (*AccountscollectedforaggregationStats, bool)`

GetStatsOk returns a tuple with the Stats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStats

`func (o *TriggerExampleInput) SetStats(v AccountscollectedforaggregationStats)`

SetStats sets Stats field to given value.


### GetIdentity

`func (o *TriggerExampleInput) GetIdentity() IdentitydeletedIdentity`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *TriggerExampleInput) GetIdentityOk() (*IdentitydeletedIdentity, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *TriggerExampleInput) SetIdentity(v IdentitydeletedIdentity)`

SetIdentity sets Identity field to given value.


### GetAccount

`func (o *TriggerExampleInput) GetAccount() Accountv2`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *TriggerExampleInput) GetAccountOk() (*Accountv2, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *TriggerExampleInput) SetAccount(v Accountv2)`

SetAccount sets Account field to given value.


### GetChanges

`func (o *TriggerExampleInput) GetChanges() []IdentityattributeschangedChangesInner`

GetChanges returns the Changes field if non-nil, zero value otherwise.

### GetChangesOk

`func (o *TriggerExampleInput) GetChangesOk() (*[]IdentityattributeschangedChangesInner, bool)`

GetChangesOk returns a tuple with the Changes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChanges

`func (o *TriggerExampleInput) SetChanges(v []IdentityattributeschangedChangesInner)`

SetChanges sets Changes field to given value.


### GetAttributes

`func (o *TriggerExampleInput) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *TriggerExampleInput) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *TriggerExampleInput) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### GetEntitlementCount

`func (o *TriggerExampleInput) GetEntitlementCount() int32`

GetEntitlementCount returns the EntitlementCount field if non-nil, zero value otherwise.

### GetEntitlementCountOk

`func (o *TriggerExampleInput) GetEntitlementCountOk() (*int32, bool)`

GetEntitlementCountOk returns a tuple with the EntitlementCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementCount

`func (o *TriggerExampleInput) SetEntitlementCount(v int32)`

SetEntitlementCount sets EntitlementCount field to given value.

### HasEntitlementCount

`func (o *TriggerExampleInput) HasEntitlementCount() bool`

HasEntitlementCount returns a boolean if a field has been set.

### GetEvent

`func (o *TriggerExampleInput) GetEvent() AccountupdatedEvent`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *TriggerExampleInput) GetEventOk() (*AccountupdatedEvent, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *TriggerExampleInput) SetEvent(v AccountupdatedEvent)`

SetEvent sets Event field to given value.


### GetAccountChangeTypes

`func (o *TriggerExampleInput) GetAccountChangeTypes() []string`

GetAccountChangeTypes returns the AccountChangeTypes field if non-nil, zero value otherwise.

### GetAccountChangeTypesOk

`func (o *TriggerExampleInput) GetAccountChangeTypesOk() (*[]string, bool)`

GetAccountChangeTypesOk returns a tuple with the AccountChangeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountChangeTypes

`func (o *TriggerExampleInput) SetAccountChangeTypes(v []string)`

SetAccountChangeTypes sets AccountChangeTypes field to given value.


### GetSingleValueAttributeChanges

`func (o *TriggerExampleInput) GetSingleValueAttributeChanges() []MachineidentityupdatedSingleValueAttributeChangesInner`

GetSingleValueAttributeChanges returns the SingleValueAttributeChanges field if non-nil, zero value otherwise.

### GetSingleValueAttributeChangesOk

`func (o *TriggerExampleInput) GetSingleValueAttributeChangesOk() (*[]MachineidentityupdatedSingleValueAttributeChangesInner, bool)`

GetSingleValueAttributeChangesOk returns a tuple with the SingleValueAttributeChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSingleValueAttributeChanges

`func (o *TriggerExampleInput) SetSingleValueAttributeChanges(v []MachineidentityupdatedSingleValueAttributeChangesInner)`

SetSingleValueAttributeChanges sets SingleValueAttributeChanges field to given value.


### SetSingleValueAttributeChangesNil

`func (o *TriggerExampleInput) SetSingleValueAttributeChangesNil(b bool)`

 SetSingleValueAttributeChangesNil sets the value for SingleValueAttributeChanges to be an explicit nil

### UnsetSingleValueAttributeChanges
`func (o *TriggerExampleInput) UnsetSingleValueAttributeChanges()`

UnsetSingleValueAttributeChanges ensures that no value is present for SingleValueAttributeChanges, not even an explicit nil
### GetMultiValueAttributeChanges

`func (o *TriggerExampleInput) GetMultiValueAttributeChanges() []AccountupdatedMultiValueAttributeChangesInner`

GetMultiValueAttributeChanges returns the MultiValueAttributeChanges field if non-nil, zero value otherwise.

### GetMultiValueAttributeChangesOk

`func (o *TriggerExampleInput) GetMultiValueAttributeChangesOk() (*[]AccountupdatedMultiValueAttributeChangesInner, bool)`

GetMultiValueAttributeChangesOk returns a tuple with the MultiValueAttributeChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiValueAttributeChanges

`func (o *TriggerExampleInput) SetMultiValueAttributeChanges(v []AccountupdatedMultiValueAttributeChangesInner)`

SetMultiValueAttributeChanges sets MultiValueAttributeChanges field to given value.


### SetMultiValueAttributeChangesNil

`func (o *TriggerExampleInput) SetMultiValueAttributeChangesNil(b bool)`

 SetMultiValueAttributeChangesNil sets the value for MultiValueAttributeChanges to be an explicit nil

### UnsetMultiValueAttributeChanges
`func (o *TriggerExampleInput) UnsetMultiValueAttributeChanges()`

UnsetMultiValueAttributeChanges ensures that no value is present for MultiValueAttributeChanges, not even an explicit nil
### GetEntitlementChanges

`func (o *TriggerExampleInput) GetEntitlementChanges() []AccountupdatedEntitlementChangesInner`

GetEntitlementChanges returns the EntitlementChanges field if non-nil, zero value otherwise.

### GetEntitlementChangesOk

`func (o *TriggerExampleInput) GetEntitlementChangesOk() (*[]AccountupdatedEntitlementChangesInner, bool)`

GetEntitlementChangesOk returns a tuple with the EntitlementChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementChanges

`func (o *TriggerExampleInput) SetEntitlementChanges(v []AccountupdatedEntitlementChangesInner)`

SetEntitlementChanges sets EntitlementChanges field to given value.


### SetEntitlementChangesNil

`func (o *TriggerExampleInput) SetEntitlementChangesNil(b bool)`

 SetEntitlementChangesNil sets the value for EntitlementChanges to be an explicit nil

### UnsetEntitlementChanges
`func (o *TriggerExampleInput) UnsetEntitlementChanges()`

UnsetEntitlementChanges ensures that no value is present for EntitlementChanges, not even an explicit nil
### GetCampaign

`func (o *TriggerExampleInput) GetCampaign() CampaigngeneratedCampaign`

GetCampaign returns the Campaign field if non-nil, zero value otherwise.

### GetCampaignOk

`func (o *TriggerExampleInput) GetCampaignOk() (*CampaigngeneratedCampaign, bool)`

GetCampaignOk returns a tuple with the Campaign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaign

`func (o *TriggerExampleInput) SetCampaign(v CampaigngeneratedCampaign)`

SetCampaign sets Campaign field to given value.


### GetCertification

`func (o *TriggerExampleInput) GetCertification() CertificationsignedoffCertification`

GetCertification returns the Certification field if non-nil, zero value otherwise.

### GetCertificationOk

`func (o *TriggerExampleInput) GetCertificationOk() (*CertificationsignedoffCertification, bool)`

GetCertificationOk returns a tuple with the Certification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertification

`func (o *TriggerExampleInput) SetCertification(v CertificationsignedoffCertification)`

SetCertification sets Certification field to given value.


### GetEventType

`func (o *TriggerExampleInput) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *TriggerExampleInput) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *TriggerExampleInput) SetEventType(v string)`

SetEventType sets EventType field to given value.


### GetMachineIdentity

`func (o *TriggerExampleInput) GetMachineIdentity() MachineidentitydeletedMachineIdentity`

GetMachineIdentity returns the MachineIdentity field if non-nil, zero value otherwise.

### GetMachineIdentityOk

`func (o *TriggerExampleInput) GetMachineIdentityOk() (*MachineidentitydeletedMachineIdentity, bool)`

GetMachineIdentityOk returns a tuple with the MachineIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentity

`func (o *TriggerExampleInput) SetMachineIdentity(v MachineidentitydeletedMachineIdentity)`

SetMachineIdentity sets MachineIdentity field to given value.


### GetMachineIdentityChangeTypes

`func (o *TriggerExampleInput) GetMachineIdentityChangeTypes() []string`

GetMachineIdentityChangeTypes returns the MachineIdentityChangeTypes field if non-nil, zero value otherwise.

### GetMachineIdentityChangeTypesOk

`func (o *TriggerExampleInput) GetMachineIdentityChangeTypesOk() (*[]string, bool)`

GetMachineIdentityChangeTypesOk returns a tuple with the MachineIdentityChangeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineIdentityChangeTypes

`func (o *TriggerExampleInput) SetMachineIdentityChangeTypes(v []string)`

SetMachineIdentityChangeTypes sets MachineIdentityChangeTypes field to given value.


### GetUserEntitlementChanges

`func (o *TriggerExampleInput) GetUserEntitlementChanges() MachineidentityupdatedUserEntitlementChanges`

GetUserEntitlementChanges returns the UserEntitlementChanges field if non-nil, zero value otherwise.

### GetUserEntitlementChangesOk

`func (o *TriggerExampleInput) GetUserEntitlementChangesOk() (*MachineidentityupdatedUserEntitlementChanges, bool)`

GetUserEntitlementChangesOk returns a tuple with the UserEntitlementChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlementChanges

`func (o *TriggerExampleInput) SetUserEntitlementChanges(v MachineidentityupdatedUserEntitlementChanges)`

SetUserEntitlementChanges sets UserEntitlementChanges field to given value.


### GetOwnerChanges

`func (o *TriggerExampleInput) GetOwnerChanges() MachineidentityupdatedOwnerChanges`

GetOwnerChanges returns the OwnerChanges field if non-nil, zero value otherwise.

### GetOwnerChangesOk

`func (o *TriggerExampleInput) GetOwnerChangesOk() (*MachineidentityupdatedOwnerChanges, bool)`

GetOwnerChangesOk returns a tuple with the OwnerChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerChanges

`func (o *TriggerExampleInput) SetOwnerChanges(v MachineidentityupdatedOwnerChanges)`

SetOwnerChanges sets OwnerChanges field to given value.


### GetTrackingNumber

`func (o *TriggerExampleInput) GetTrackingNumber() string`

GetTrackingNumber returns the TrackingNumber field if non-nil, zero value otherwise.

### GetTrackingNumberOk

`func (o *TriggerExampleInput) GetTrackingNumberOk() (*string, bool)`

GetTrackingNumberOk returns a tuple with the TrackingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingNumber

`func (o *TriggerExampleInput) SetTrackingNumber(v string)`

SetTrackingNumber sets TrackingNumber field to given value.


### GetSources

`func (o *TriggerExampleInput) GetSources() string`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *TriggerExampleInput) GetSourcesOk() (*string, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *TriggerExampleInput) SetSources(v string)`

SetSources sets Sources field to given value.


### GetAction

`func (o *TriggerExampleInput) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *TriggerExampleInput) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *TriggerExampleInput) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *TriggerExampleInput) HasAction() bool`

HasAction returns a boolean if a field has been set.

### SetActionNil

`func (o *TriggerExampleInput) SetActionNil(b bool)`

 SetActionNil sets the value for Action to be an explicit nil

### UnsetAction
`func (o *TriggerExampleInput) UnsetAction()`

UnsetAction ensures that no value is present for Action, not even an explicit nil
### GetRecipient

`func (o *TriggerExampleInput) GetRecipient() ProvisioningcompletedRecipient`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *TriggerExampleInput) GetRecipientOk() (*ProvisioningcompletedRecipient, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *TriggerExampleInput) SetRecipient(v ProvisioningcompletedRecipient)`

SetRecipient sets Recipient field to given value.


### GetRequester

`func (o *TriggerExampleInput) GetRequester() ProvisioningcompletedRequester`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *TriggerExampleInput) GetRequesterOk() (*ProvisioningcompletedRequester, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *TriggerExampleInput) SetRequester(v ProvisioningcompletedRequester)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *TriggerExampleInput) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### SetRequesterNil

`func (o *TriggerExampleInput) SetRequesterNil(b bool)`

 SetRequesterNil sets the value for Requester to be an explicit nil

### UnsetRequester
`func (o *TriggerExampleInput) UnsetRequester()`

UnsetRequester ensures that no value is present for Requester, not even an explicit nil
### GetAccountRequests

`func (o *TriggerExampleInput) GetAccountRequests() []ProvisioningcompletedAccountRequestsInner`

GetAccountRequests returns the AccountRequests field if non-nil, zero value otherwise.

### GetAccountRequestsOk

`func (o *TriggerExampleInput) GetAccountRequestsOk() (*[]ProvisioningcompletedAccountRequestsInner, bool)`

GetAccountRequestsOk returns a tuple with the AccountRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountRequests

`func (o *TriggerExampleInput) SetAccountRequests(v []ProvisioningcompletedAccountRequestsInner)`

SetAccountRequests sets AccountRequests field to given value.


### GetFileName

`func (o *TriggerExampleInput) GetFileName() string`

GetFileName returns the FileName field if non-nil, zero value otherwise.

### GetFileNameOk

`func (o *TriggerExampleInput) GetFileNameOk() (*string, bool)`

GetFileNameOk returns a tuple with the FileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileName

`func (o *TriggerExampleInput) SetFileName(v string)`

SetFileName sets FileName field to given value.


### GetOwnerEmail

`func (o *TriggerExampleInput) GetOwnerEmail() string`

GetOwnerEmail returns the OwnerEmail field if non-nil, zero value otherwise.

### GetOwnerEmailOk

`func (o *TriggerExampleInput) GetOwnerEmailOk() (*string, bool)`

GetOwnerEmailOk returns a tuple with the OwnerEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerEmail

`func (o *TriggerExampleInput) SetOwnerEmail(v string)`

SetOwnerEmail sets OwnerEmail field to given value.


### GetOwnerName

`func (o *TriggerExampleInput) GetOwnerName() string`

GetOwnerName returns the OwnerName field if non-nil, zero value otherwise.

### GetOwnerNameOk

`func (o *TriggerExampleInput) GetOwnerNameOk() (*string, bool)`

GetOwnerNameOk returns a tuple with the OwnerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerName

`func (o *TriggerExampleInput) SetOwnerName(v string)`

SetOwnerName sets OwnerName field to given value.


### GetQuery

`func (o *TriggerExampleInput) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *TriggerExampleInput) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *TriggerExampleInput) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetSearchName

`func (o *TriggerExampleInput) GetSearchName() string`

GetSearchName returns the SearchName field if non-nil, zero value otherwise.

### GetSearchNameOk

`func (o *TriggerExampleInput) GetSearchNameOk() (*string, bool)`

GetSearchNameOk returns a tuple with the SearchName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchName

`func (o *TriggerExampleInput) SetSearchName(v string)`

SetSearchName sets SearchName field to given value.


### GetSearchResults

`func (o *TriggerExampleInput) GetSearchResults() SavedsearchcompleteSearchResults`

GetSearchResults returns the SearchResults field if non-nil, zero value otherwise.

### GetSearchResultsOk

`func (o *TriggerExampleInput) GetSearchResultsOk() (*SavedsearchcompleteSearchResults, bool)`

GetSearchResultsOk returns a tuple with the SearchResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchResults

`func (o *TriggerExampleInput) SetSearchResults(v SavedsearchcompleteSearchResults)`

SetSearchResults sets SearchResults field to given value.


### GetSignedS3Url

`func (o *TriggerExampleInput) GetSignedS3Url() string`

GetSignedS3Url returns the SignedS3Url field if non-nil, zero value otherwise.

### GetSignedS3UrlOk

`func (o *TriggerExampleInput) GetSignedS3UrlOk() (*string, bool)`

GetSignedS3UrlOk returns a tuple with the SignedS3Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignedS3Url

`func (o *TriggerExampleInput) SetSignedS3Url(v string)`

SetSignedS3Url sets SignedS3Url field to given value.


### GetUuid

`func (o *TriggerExampleInput) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *TriggerExampleInput) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *TriggerExampleInput) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *TriggerExampleInput) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetId

`func (o *TriggerExampleInput) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TriggerExampleInput) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TriggerExampleInput) SetId(v string)`

SetId sets Id field to given value.


### GetNativeIdentifier

`func (o *TriggerExampleInput) GetNativeIdentifier() string`

GetNativeIdentifier returns the NativeIdentifier field if non-nil, zero value otherwise.

### GetNativeIdentifierOk

`func (o *TriggerExampleInput) GetNativeIdentifierOk() (*string, bool)`

GetNativeIdentifierOk returns a tuple with the NativeIdentifier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentifier

`func (o *TriggerExampleInput) SetNativeIdentifier(v string)`

SetNativeIdentifier sets NativeIdentifier field to given value.


### GetSourceId

`func (o *TriggerExampleInput) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *TriggerExampleInput) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *TriggerExampleInput) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.


### GetSourceName

`func (o *TriggerExampleInput) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *TriggerExampleInput) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *TriggerExampleInput) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.


### GetIdentityId

`func (o *TriggerExampleInput) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *TriggerExampleInput) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *TriggerExampleInput) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.


### GetIdentityName

`func (o *TriggerExampleInput) GetIdentityName() string`

GetIdentityName returns the IdentityName field if non-nil, zero value otherwise.

### GetIdentityNameOk

`func (o *TriggerExampleInput) GetIdentityNameOk() (*string, bool)`

GetIdentityNameOk returns a tuple with the IdentityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityName

`func (o *TriggerExampleInput) SetIdentityName(v string)`

SetIdentityName sets IdentityName field to given value.


### GetName

`func (o *TriggerExampleInput) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TriggerExampleInput) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TriggerExampleInput) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *TriggerExampleInput) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TriggerExampleInput) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TriggerExampleInput) SetType(v string)`

SetType sets Type field to given value.


### GetCreated

`func (o *TriggerExampleInput) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *TriggerExampleInput) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *TriggerExampleInput) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetConnector

`func (o *TriggerExampleInput) GetConnector() string`

GetConnector returns the Connector field if non-nil, zero value otherwise.

### GetConnectorOk

`func (o *TriggerExampleInput) GetConnectorOk() (*string, bool)`

GetConnectorOk returns a tuple with the Connector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnector

`func (o *TriggerExampleInput) SetConnector(v string)`

SetConnector sets Connector field to given value.


### GetActor

`func (o *TriggerExampleInput) GetActor() SourceupdatedActor`

GetActor returns the Actor field if non-nil, zero value otherwise.

### GetActorOk

`func (o *TriggerExampleInput) GetActorOk() (*SourceupdatedActor, bool)`

GetActorOk returns a tuple with the Actor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActor

`func (o *TriggerExampleInput) SetActor(v SourceupdatedActor)`

SetActor sets Actor field to given value.


### GetDeleted

`func (o *TriggerExampleInput) GetDeleted() SailPointTime`

GetDeleted returns the Deleted field if non-nil, zero value otherwise.

### GetDeletedOk

`func (o *TriggerExampleInput) GetDeletedOk() (*SailPointTime, bool)`

GetDeletedOk returns a tuple with the Deleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleted

`func (o *TriggerExampleInput) SetDeleted(v SailPointTime)`

SetDeleted sets Deleted field to given value.


### GetModified

`func (o *TriggerExampleInput) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *TriggerExampleInput) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *TriggerExampleInput) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetApplication

`func (o *TriggerExampleInput) GetApplication() VaclusterstatuschangeeventApplication`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *TriggerExampleInput) GetApplicationOk() (*VaclusterstatuschangeeventApplication, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *TriggerExampleInput) SetApplication(v VaclusterstatuschangeeventApplication)`

SetApplication sets Application field to given value.


### GetHealthCheckResult

`func (o *TriggerExampleInput) GetHealthCheckResult() VaclusterstatuschangeeventHealthCheckResult`

GetHealthCheckResult returns the HealthCheckResult field if non-nil, zero value otherwise.

### GetHealthCheckResultOk

`func (o *TriggerExampleInput) GetHealthCheckResultOk() (*VaclusterstatuschangeeventHealthCheckResult, bool)`

GetHealthCheckResultOk returns a tuple with the HealthCheckResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealthCheckResult

`func (o *TriggerExampleInput) SetHealthCheckResult(v VaclusterstatuschangeeventHealthCheckResult)`

SetHealthCheckResult sets HealthCheckResult field to given value.


### GetPreviousHealthCheckResult

`func (o *TriggerExampleInput) GetPreviousHealthCheckResult() VaclusterstatuschangeeventPreviousHealthCheckResult`

GetPreviousHealthCheckResult returns the PreviousHealthCheckResult field if non-nil, zero value otherwise.

### GetPreviousHealthCheckResultOk

`func (o *TriggerExampleInput) GetPreviousHealthCheckResultOk() (*VaclusterstatuschangeeventPreviousHealthCheckResult, bool)`

GetPreviousHealthCheckResultOk returns a tuple with the PreviousHealthCheckResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousHealthCheckResult

`func (o *TriggerExampleInput) SetPreviousHealthCheckResult(v VaclusterstatuschangeeventPreviousHealthCheckResult)`

SetPreviousHealthCheckResult sets PreviousHealthCheckResult field to given value.



