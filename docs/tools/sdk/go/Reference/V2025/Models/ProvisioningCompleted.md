---
id: provisioning-completed
title: ProvisioningCompleted
pagination_label: ProvisioningCompleted
sidebar_label: ProvisioningCompleted
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ProvisioningCompleted', 'ProvisioningCompleted'] 
slug: /tools/sdk/go//models/provisioning-completed
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompleted', 'ProvisioningCompleted']
---

# ProvisioningCompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TrackingNumber** | **string** | The reference number of the provisioning request. Useful for tracking status in the Account Activity search interface. | 
**Sources** | **string** | One or more sources that the provisioning transaction(s) were done against.  Sources are comma separated. | 
**Action** | Pointer to **NullableString** | Origin of where the provisioning request came from. | [optional] 
**Errors** | Pointer to **[]string** | A list of any accumulated error messages that occurred during provisioning. | [optional] 
**Warnings** | Pointer to **[]string** | A list of any accumulated warning messages that occurred during provisioning. | [optional] 
**Recipient** | [**ProvisioningCompletedRecipient**](provisioning-completed-recipient) |  | 
**Requester** | Pointer to [**NullableProvisioningCompletedRequester**](provisioning-completed-requester) |  | [optional] 
**AccountRequests** | [**[]ProvisioningCompletedAccountRequestsInner**](provisioning-completed-account-requests-inner) | A list of provisioning instructions to perform on an account-by-account basis. | 

## Methods

### NewProvisioningCompleted

`func NewProvisioningCompleted(trackingNumber string, sources string, recipient ProvisioningCompletedRecipient, accountRequests []ProvisioningCompletedAccountRequestsInner, ) *ProvisioningCompleted`

NewProvisioningCompleted instantiates a new ProvisioningCompleted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningCompletedWithDefaults

`func NewProvisioningCompletedWithDefaults() *ProvisioningCompleted`

NewProvisioningCompletedWithDefaults instantiates a new ProvisioningCompleted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTrackingNumber

`func (o *ProvisioningCompleted) GetTrackingNumber() string`

GetTrackingNumber returns the TrackingNumber field if non-nil, zero value otherwise.

### GetTrackingNumberOk

`func (o *ProvisioningCompleted) GetTrackingNumberOk() (*string, bool)`

GetTrackingNumberOk returns a tuple with the TrackingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingNumber

`func (o *ProvisioningCompleted) SetTrackingNumber(v string)`

SetTrackingNumber sets TrackingNumber field to given value.


### GetSources

`func (o *ProvisioningCompleted) GetSources() string`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *ProvisioningCompleted) GetSourcesOk() (*string, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *ProvisioningCompleted) SetSources(v string)`

SetSources sets Sources field to given value.


### GetAction

`func (o *ProvisioningCompleted) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *ProvisioningCompleted) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *ProvisioningCompleted) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *ProvisioningCompleted) HasAction() bool`

HasAction returns a boolean if a field has been set.

### SetActionNil

`func (o *ProvisioningCompleted) SetActionNil(b bool)`

 SetActionNil sets the value for Action to be an explicit nil

### UnsetAction
`func (o *ProvisioningCompleted) UnsetAction()`

UnsetAction ensures that no value is present for Action, not even an explicit nil
### GetErrors

`func (o *ProvisioningCompleted) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ProvisioningCompleted) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ProvisioningCompleted) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *ProvisioningCompleted) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### SetErrorsNil

`func (o *ProvisioningCompleted) SetErrorsNil(b bool)`

 SetErrorsNil sets the value for Errors to be an explicit nil

### UnsetErrors
`func (o *ProvisioningCompleted) UnsetErrors()`

UnsetErrors ensures that no value is present for Errors, not even an explicit nil
### GetWarnings

`func (o *ProvisioningCompleted) GetWarnings() []string`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProvisioningCompleted) GetWarningsOk() (*[]string, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProvisioningCompleted) SetWarnings(v []string)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProvisioningCompleted) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### SetWarningsNil

`func (o *ProvisioningCompleted) SetWarningsNil(b bool)`

 SetWarningsNil sets the value for Warnings to be an explicit nil

### UnsetWarnings
`func (o *ProvisioningCompleted) UnsetWarnings()`

UnsetWarnings ensures that no value is present for Warnings, not even an explicit nil
### GetRecipient

`func (o *ProvisioningCompleted) GetRecipient() ProvisioningCompletedRecipient`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *ProvisioningCompleted) GetRecipientOk() (*ProvisioningCompletedRecipient, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *ProvisioningCompleted) SetRecipient(v ProvisioningCompletedRecipient)`

SetRecipient sets Recipient field to given value.


### GetRequester

`func (o *ProvisioningCompleted) GetRequester() ProvisioningCompletedRequester`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *ProvisioningCompleted) GetRequesterOk() (*ProvisioningCompletedRequester, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *ProvisioningCompleted) SetRequester(v ProvisioningCompletedRequester)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *ProvisioningCompleted) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### SetRequesterNil

`func (o *ProvisioningCompleted) SetRequesterNil(b bool)`

 SetRequesterNil sets the value for Requester to be an explicit nil

### UnsetRequester
`func (o *ProvisioningCompleted) UnsetRequester()`

UnsetRequester ensures that no value is present for Requester, not even an explicit nil
### GetAccountRequests

`func (o *ProvisioningCompleted) GetAccountRequests() []ProvisioningCompletedAccountRequestsInner`

GetAccountRequests returns the AccountRequests field if non-nil, zero value otherwise.

### GetAccountRequestsOk

`func (o *ProvisioningCompleted) GetAccountRequestsOk() (*[]ProvisioningCompletedAccountRequestsInner, bool)`

GetAccountRequestsOk returns a tuple with the AccountRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountRequests

`func (o *ProvisioningCompleted) SetAccountRequests(v []ProvisioningCompletedAccountRequestsInner)`

SetAccountRequests sets AccountRequests field to given value.



