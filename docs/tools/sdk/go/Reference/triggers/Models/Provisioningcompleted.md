---
id: v1-provisioningcompleted
title: Provisioningcompleted
pagination_label: Provisioningcompleted
sidebar_label: Provisioningcompleted
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Provisioningcompleted', 'V1Provisioningcompleted'] 
slug: /tools/sdk/go/triggers/models/provisioningcompleted
tags: ['SDK', 'Software Development Kit', 'Provisioningcompleted', 'V1Provisioningcompleted']
---

# Provisioningcompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TrackingNumber** | **string** | The reference number of the provisioning request. Useful for tracking status in the Account Activity search interface. | 
**Sources** | **string** | One or more sources that the provisioning transaction(s) were done against.  Sources are comma separated. | 
**Action** | Pointer to **NullableString** | Origin of where the provisioning request came from. | [optional] 
**Errors** | Pointer to **[]string** | A list of any accumulated error messages that occurred during provisioning. | [optional] 
**Warnings** | Pointer to **[]string** | A list of any accumulated warning messages that occurred during provisioning. | [optional] 
**Recipient** | [**ProvisioningcompletedRecipient**](provisioningcompleted-recipient) |  | 
**Requester** | Pointer to [**NullableProvisioningcompletedRequester**](provisioningcompleted-requester) |  | [optional] 
**AccountRequests** | [**[]ProvisioningcompletedAccountRequestsInner**](provisioningcompleted-account-requests-inner) | A list of provisioning instructions to be executed on a per-account basis. The order in which operations are executed may not always be predictable. | 

## Methods

### NewProvisioningcompleted

`func NewProvisioningcompleted(trackingNumber string, sources string, recipient ProvisioningcompletedRecipient, accountRequests []ProvisioningcompletedAccountRequestsInner, ) *Provisioningcompleted`

NewProvisioningcompleted instantiates a new Provisioningcompleted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningcompletedWithDefaults

`func NewProvisioningcompletedWithDefaults() *Provisioningcompleted`

NewProvisioningcompletedWithDefaults instantiates a new Provisioningcompleted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTrackingNumber

`func (o *Provisioningcompleted) GetTrackingNumber() string`

GetTrackingNumber returns the TrackingNumber field if non-nil, zero value otherwise.

### GetTrackingNumberOk

`func (o *Provisioningcompleted) GetTrackingNumberOk() (*string, bool)`

GetTrackingNumberOk returns a tuple with the TrackingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingNumber

`func (o *Provisioningcompleted) SetTrackingNumber(v string)`

SetTrackingNumber sets TrackingNumber field to given value.


### GetSources

`func (o *Provisioningcompleted) GetSources() string`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *Provisioningcompleted) GetSourcesOk() (*string, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *Provisioningcompleted) SetSources(v string)`

SetSources sets Sources field to given value.


### GetAction

`func (o *Provisioningcompleted) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *Provisioningcompleted) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *Provisioningcompleted) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *Provisioningcompleted) HasAction() bool`

HasAction returns a boolean if a field has been set.

### SetActionNil

`func (o *Provisioningcompleted) SetActionNil(b bool)`

 SetActionNil sets the value for Action to be an explicit nil

### UnsetAction
`func (o *Provisioningcompleted) UnsetAction()`

UnsetAction ensures that no value is present for Action, not even an explicit nil
### GetErrors

`func (o *Provisioningcompleted) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *Provisioningcompleted) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *Provisioningcompleted) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *Provisioningcompleted) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### SetErrorsNil

`func (o *Provisioningcompleted) SetErrorsNil(b bool)`

 SetErrorsNil sets the value for Errors to be an explicit nil

### UnsetErrors
`func (o *Provisioningcompleted) UnsetErrors()`

UnsetErrors ensures that no value is present for Errors, not even an explicit nil
### GetWarnings

`func (o *Provisioningcompleted) GetWarnings() []string`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Provisioningcompleted) GetWarningsOk() (*[]string, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Provisioningcompleted) SetWarnings(v []string)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Provisioningcompleted) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### SetWarningsNil

`func (o *Provisioningcompleted) SetWarningsNil(b bool)`

 SetWarningsNil sets the value for Warnings to be an explicit nil

### UnsetWarnings
`func (o *Provisioningcompleted) UnsetWarnings()`

UnsetWarnings ensures that no value is present for Warnings, not even an explicit nil
### GetRecipient

`func (o *Provisioningcompleted) GetRecipient() ProvisioningcompletedRecipient`

GetRecipient returns the Recipient field if non-nil, zero value otherwise.

### GetRecipientOk

`func (o *Provisioningcompleted) GetRecipientOk() (*ProvisioningcompletedRecipient, bool)`

GetRecipientOk returns a tuple with the Recipient field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecipient

`func (o *Provisioningcompleted) SetRecipient(v ProvisioningcompletedRecipient)`

SetRecipient sets Recipient field to given value.


### GetRequester

`func (o *Provisioningcompleted) GetRequester() ProvisioningcompletedRequester`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *Provisioningcompleted) GetRequesterOk() (*ProvisioningcompletedRequester, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *Provisioningcompleted) SetRequester(v ProvisioningcompletedRequester)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *Provisioningcompleted) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### SetRequesterNil

`func (o *Provisioningcompleted) SetRequesterNil(b bool)`

 SetRequesterNil sets the value for Requester to be an explicit nil

### UnsetRequester
`func (o *Provisioningcompleted) UnsetRequester()`

UnsetRequester ensures that no value is present for Requester, not even an explicit nil
### GetAccountRequests

`func (o *Provisioningcompleted) GetAccountRequests() []ProvisioningcompletedAccountRequestsInner`

GetAccountRequests returns the AccountRequests field if non-nil, zero value otherwise.

### GetAccountRequestsOk

`func (o *Provisioningcompleted) GetAccountRequestsOk() (*[]ProvisioningcompletedAccountRequestsInner, bool)`

GetAccountRequestsOk returns a tuple with the AccountRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountRequests

`func (o *Provisioningcompleted) SetAccountRequests(v []ProvisioningcompletedAccountRequestsInner)`

SetAccountRequests sets AccountRequests field to given value.



