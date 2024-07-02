---
id: account-activity-searched-item
title: AccountActivitySearchedItem
pagination_label: AccountActivitySearchedItem
sidebar_label: AccountActivitySearchedItem
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccountActivitySearchedItem'] 
slug: /tools/sdk/go/v3/models/account-activity-searched-item
tags: ['SDK', 'Software Development Kit', 'AccountActivitySearchedItem']
---

# AccountActivitySearchedItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **string** |  | 
**Name** |  **string** |  | 
**Type** |  [**DocumentType**](document-type) |  | 
**Action** |  Pointer to **string** | Type of action performed in the activity. | [optional] 
**Created** |  Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** |  Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Stage** |  Pointer to **string** | Activity&#39;s current stage. | [optional] 
**Origin** |  Pointer to **NullableString** | Activity&#39;s origin. | [optional] 
**Status** |  Pointer to **string** | Activity&#39;s current status. | [optional] 
**Requester** |  Pointer to [**AccountSource**](account-source) |  | [optional] 
**Recipient** |  Pointer to [**AccountSource**](account-source) |  | [optional] 
**TrackingNumber** |  Pointer to **string** | Account activity&#39;s tracking number. | [optional] 
**Errors** |  Pointer to **[]string** | Errors provided by the source while completing account actions. | [optional] 
**Warnings** |  Pointer to **[]string** | Warnings provided by the source while completing account actions. | [optional] 
**Approvals** |  Pointer to [**[]Approval**](approval) | Approvals performed on an item during activity. | [optional] 
**OriginalRequests** |  Pointer to [**[]OriginalRequest**](original-request) | Original actions that triggered all individual source actions related to the account action. | [optional] 
**ExpansionItems** |  Pointer to [**[]ExpansionItem**](expansion-item) | Controls that translated the attribute requests into actual provisioning actions on the source. | [optional] 
**AccountRequests** |  Pointer to [**[]AccountRequest**](account-request) | Account data for each individual source action triggered by the original requests. | [optional] 
**Sources** |  Pointer to **string** | Sources involved in the account activity. | [optional] 

## Methods

### NewAccountActivitySearchedItem

`func NewAccountActivitySearchedItem(id string, name string, type_ DocumentType, ) *AccountActivitySearchedItem`

NewAccountActivitySearchedItem instantiates a new AccountActivitySearchedItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountActivitySearchedItemWithDefaults

`func NewAccountActivitySearchedItemWithDefaults() *AccountActivitySearchedItem`

NewAccountActivitySearchedItemWithDefaults instantiates a new AccountActivitySearchedItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountActivitySearchedItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountActivitySearchedItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountActivitySearchedItem) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountActivitySearchedItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountActivitySearchedItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountActivitySearchedItem) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *AccountActivitySearchedItem) GetType() DocumentType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountActivitySearchedItem) GetTypeOk() (*DocumentType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountActivitySearchedItem) SetType(v DocumentType)`

SetType sets Type field to given value.


### GetAction

`func (o *AccountActivitySearchedItem) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *AccountActivitySearchedItem) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *AccountActivitySearchedItem) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *AccountActivitySearchedItem) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetCreated

`func (o *AccountActivitySearchedItem) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *AccountActivitySearchedItem) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *AccountActivitySearchedItem) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *AccountActivitySearchedItem) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *AccountActivitySearchedItem) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *AccountActivitySearchedItem) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *AccountActivitySearchedItem) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *AccountActivitySearchedItem) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *AccountActivitySearchedItem) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *AccountActivitySearchedItem) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *AccountActivitySearchedItem) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *AccountActivitySearchedItem) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetStage

`func (o *AccountActivitySearchedItem) GetStage() string`

GetStage returns the Stage field if non-nil, zero value otherwise.

### GetStageOk

`func (o *AccountActivitySearchedItem) GetStageOk() (*string, bool)`

GetStageOk returns a tuple with the Stage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStage

`func (o *AccountActivitySearchedItem) SetStage(v string)`

SetStage sets Stage field to given value.

### HasStage

`func (o *AccountActivitySearchedItem) HasStage() bool`

HasStage returns a boolean if a field has been set.

### GetOrigin

`func (o *AccountActivitySearchedItem) GetOrigin() string`

GetOrigin returns the Origin field if non-nil, zero value otherwise.

### GetOriginOk

`func (o *AccountActivitySearchedItem) GetOriginOk() (*string, bool)`

GetOriginOk returns a tuple with the Origin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin

`func (o *AccountActivitySearchedItem) SetOrigin(v string)`

SetOrigin sets Origin field to given value.

### HasOrigin

`func (o *AccountActivitySearchedItem) HasOrigin() bool`

HasOrigin returns a boolean if a field has been set.

### SetOriginNil

`func (o *AccountActivitySearchedItem) SetOriginNil(b bool)`

 SetOriginNil sets the value for Origin to be an explicit nil

### UnsetOrigin
`func (o *AccountActivitySearchedItem) UnsetOrigin()`

UnsetOrigin ensures that no value is present for Origin, not even an explicit nil
### GetStatus

`func (o *AccountActivitySearchedItem) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AccountActivitySearchedItem) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AccountActivitySearchedItem) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AccountActivitySearchedItem) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetRequester

`func (o *AccountActivitySearchedItem) GetRequester() AccountSource`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *AccountActivitySearchedItem) GetRequesterOk() (*AccountSource, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *AccountActivitySearchedItem) SetRequester(v AccountSource)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *AccountActivitySearchedItem) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetRecipient

`func (o *AccountActivitySearchedItem) GetRecipient() AccountSource`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *AccountActivitySearchedItem) GetRecipientOk() (*AccountSource, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *AccountActivitySearchedItem) SetRecipient(v AccountSource)`

SetRecipient sets Recipient field to given value.

### HasRecipient

`func (o *AccountActivitySearchedItem) HasRecipient() bool`

HasRecipient returns a boolean if a field has been set.

### GetTrackingNumber

`func (o *AccountActivitySearchedItem) GetTrackingNumber() string`

GetTrackingNumber returns the TrackingNumber field if non-nil, zero value otherwise.

### GetTrackingNumberOk

`func (o *AccountActivitySearchedItem) GetTrackingNumberOk() (*string, bool)`

GetTrackingNumberOk returns a tuple with the TrackingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingNumber

`func (o *AccountActivitySearchedItem) SetTrackingNumber(v string)`

SetTrackingNumber sets TrackingNumber field to given value.

### HasTrackingNumber

`func (o *AccountActivitySearchedItem) HasTrackingNumber() bool`

HasTrackingNumber returns a boolean if a field has been set.

### GetErrors

`func (o *AccountActivitySearchedItem) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *AccountActivitySearchedItem) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *AccountActivitySearchedItem) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *AccountActivitySearchedItem) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### SetErrorsNil

`func (o *AccountActivitySearchedItem) SetErrorsNil(b bool)`

 SetErrorsNil sets the value for Errors to be an explicit nil

### UnsetErrors
`func (o *AccountActivitySearchedItem) UnsetErrors()`

UnsetErrors ensures that no value is present for Errors, not even an explicit nil
### GetWarnings

`func (o *AccountActivitySearchedItem) GetWarnings() []string`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AccountActivitySearchedItem) GetWarningsOk() (*[]string, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AccountActivitySearchedItem) SetWarnings(v []string)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AccountActivitySearchedItem) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### SetWarningsNil

`func (o *AccountActivitySearchedItem) SetWarningsNil(b bool)`

 SetWarningsNil sets the value for Warnings to be an explicit nil

### UnsetWarnings
`func (o *AccountActivitySearchedItem) UnsetWarnings()`

UnsetWarnings ensures that no value is present for Warnings, not even an explicit nil
### GetApprovals

`func (o *AccountActivitySearchedItem) GetApprovals() []Approval`

GetApprovals returns the Approvals field if non-nil, zero value otherwise.

### GetApprovalsOk

`func (o *AccountActivitySearchedItem) GetApprovalsOk() (*[]Approval, bool)`

GetApprovalsOk returns a tuple with the Approvals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovals

`func (o *AccountActivitySearchedItem) SetApprovals(v []Approval)`

SetApprovals sets Approvals field to given value.

### HasApprovals

`func (o *AccountActivitySearchedItem) HasApprovals() bool`

HasApprovals returns a boolean if a field has been set.

### GetOriginalRequests

`func (o *AccountActivitySearchedItem) GetOriginalRequests() []OriginalRequest`

GetOriginalRequests returns the OriginalRequests field if non-nil, zero value otherwise.

### GetOriginalRequestsOk

`func (o *AccountActivitySearchedItem) GetOriginalRequestsOk() (*[]OriginalRequest, bool)`

GetOriginalRequestsOk returns a tuple with the OriginalRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalRequests

`func (o *AccountActivitySearchedItem) SetOriginalRequests(v []OriginalRequest)`

SetOriginalRequests sets OriginalRequests field to given value.

### HasOriginalRequests

`func (o *AccountActivitySearchedItem) HasOriginalRequests() bool`

HasOriginalRequests returns a boolean if a field has been set.

### GetExpansionItems

`func (o *AccountActivitySearchedItem) GetExpansionItems() []ExpansionItem`

GetExpansionItems returns the ExpansionItems field if non-nil, zero value otherwise.

### GetExpansionItemsOk

`func (o *AccountActivitySearchedItem) GetExpansionItemsOk() (*[]ExpansionItem, bool)`

GetExpansionItemsOk returns a tuple with the ExpansionItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpansionItems

`func (o *AccountActivitySearchedItem) SetExpansionItems(v []ExpansionItem)`

SetExpansionItems sets ExpansionItems field to given value.

### HasExpansionItems

`func (o *AccountActivitySearchedItem) HasExpansionItems() bool`

HasExpansionItems returns a boolean if a field has been set.

### GetAccountRequests

`func (o *AccountActivitySearchedItem) GetAccountRequests() []AccountRequest`

GetAccountRequests returns the AccountRequests field if non-nil, zero value otherwise.

### GetAccountRequestsOk

`func (o *AccountActivitySearchedItem) GetAccountRequestsOk() (*[]AccountRequest, bool)`

GetAccountRequestsOk returns a tuple with the AccountRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountRequests

`func (o *AccountActivitySearchedItem) SetAccountRequests(v []AccountRequest)`

SetAccountRequests sets AccountRequests field to given value.

### HasAccountRequests

`func (o *AccountActivitySearchedItem) HasAccountRequests() bool`

HasAccountRequests returns a boolean if a field has been set.

### GetSources

`func (o *AccountActivitySearchedItem) GetSources() string`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *AccountActivitySearchedItem) GetSourcesOk() (*string, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *AccountActivitySearchedItem) SetSources(v string)`

SetSources sets Sources field to given value.

### HasSources

`func (o *AccountActivitySearchedItem) HasSources() bool`

HasSources returns a boolean if a field has been set.


[[Back to top]](#) 


