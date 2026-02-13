---
id: v2025-account-updated
title: AccountUpdated
pagination_label: AccountUpdated
sidebar_label: AccountUpdated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountUpdated', 'V2025AccountUpdated'] 
slug: /tools/sdk/go/v2025/models/account-updated
tags: ['SDK', 'Software Development Kit', 'AccountUpdated', 'V2025AccountUpdated']
---

# AccountUpdated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Event** | [**AccountUpdatedEvent**](account-updated-event) |  | 
**Source** | [**AccountSourceReference**](account-source-reference) |  | 
**Account** | [**AccountV2**](account-v2) |  | 
**Identity** | [**IdentityReference1**](identity-reference1) |  | 
**AccountChangeTypes** | **[]string** | The types of changes that occurred to the account. | 
**SingleValueAttributeChanges** | [**[]AccountUpdatedSingleValueAttributeChangesInner**](account-updated-single-value-attribute-changes-inner) | Details about the single-value attribute changes that occurred to the account. | 
**MultiValueAttributeChanges** | [**[]AccountUpdatedMultiValueAttributeChangesInner**](account-updated-multi-value-attribute-changes-inner) | Details about the multi-value attribute changes that occurred to the account. | 
**EntitlementChanges** | [**[]AccountUpdatedEntitlementChangesInner**](account-updated-entitlement-changes-inner) | Details about the entitlement changes that occurred to the account. | 

## Methods

### NewAccountUpdated

`func NewAccountUpdated(event AccountUpdatedEvent, source AccountSourceReference, account AccountV2, identity IdentityReference1, accountChangeTypes []string, singleValueAttributeChanges []AccountUpdatedSingleValueAttributeChangesInner, multiValueAttributeChanges []AccountUpdatedMultiValueAttributeChangesInner, entitlementChanges []AccountUpdatedEntitlementChangesInner, ) *AccountUpdated`

NewAccountUpdated instantiates a new AccountUpdated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountUpdatedWithDefaults

`func NewAccountUpdatedWithDefaults() *AccountUpdated`

NewAccountUpdatedWithDefaults instantiates a new AccountUpdated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEvent

`func (o *AccountUpdated) GetEvent() AccountUpdatedEvent`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *AccountUpdated) GetEventOk() (*AccountUpdatedEvent, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *AccountUpdated) SetEvent(v AccountUpdatedEvent)`

SetEvent sets Event field to given value.


### GetSource

`func (o *AccountUpdated) GetSource() AccountSourceReference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AccountUpdated) GetSourceOk() (*AccountSourceReference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AccountUpdated) SetSource(v AccountSourceReference)`

SetSource sets Source field to given value.


### GetAccount

`func (o *AccountUpdated) GetAccount() AccountV2`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *AccountUpdated) GetAccountOk() (*AccountV2, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *AccountUpdated) SetAccount(v AccountV2)`

SetAccount sets Account field to given value.


### GetIdentity

`func (o *AccountUpdated) GetIdentity() IdentityReference1`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *AccountUpdated) GetIdentityOk() (*IdentityReference1, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *AccountUpdated) SetIdentity(v IdentityReference1)`

SetIdentity sets Identity field to given value.


### GetAccountChangeTypes

`func (o *AccountUpdated) GetAccountChangeTypes() []string`

GetAccountChangeTypes returns the AccountChangeTypes field if non-nil, zero value otherwise.

### GetAccountChangeTypesOk

`func (o *AccountUpdated) GetAccountChangeTypesOk() (*[]string, bool)`

GetAccountChangeTypesOk returns a tuple with the AccountChangeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountChangeTypes

`func (o *AccountUpdated) SetAccountChangeTypes(v []string)`

SetAccountChangeTypes sets AccountChangeTypes field to given value.


### GetSingleValueAttributeChanges

`func (o *AccountUpdated) GetSingleValueAttributeChanges() []AccountUpdatedSingleValueAttributeChangesInner`

GetSingleValueAttributeChanges returns the SingleValueAttributeChanges field if non-nil, zero value otherwise.

### GetSingleValueAttributeChangesOk

`func (o *AccountUpdated) GetSingleValueAttributeChangesOk() (*[]AccountUpdatedSingleValueAttributeChangesInner, bool)`

GetSingleValueAttributeChangesOk returns a tuple with the SingleValueAttributeChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSingleValueAttributeChanges

`func (o *AccountUpdated) SetSingleValueAttributeChanges(v []AccountUpdatedSingleValueAttributeChangesInner)`

SetSingleValueAttributeChanges sets SingleValueAttributeChanges field to given value.


### SetSingleValueAttributeChangesNil

`func (o *AccountUpdated) SetSingleValueAttributeChangesNil(b bool)`

 SetSingleValueAttributeChangesNil sets the value for SingleValueAttributeChanges to be an explicit nil

### UnsetSingleValueAttributeChanges
`func (o *AccountUpdated) UnsetSingleValueAttributeChanges()`

UnsetSingleValueAttributeChanges ensures that no value is present for SingleValueAttributeChanges, not even an explicit nil
### GetMultiValueAttributeChanges

`func (o *AccountUpdated) GetMultiValueAttributeChanges() []AccountUpdatedMultiValueAttributeChangesInner`

GetMultiValueAttributeChanges returns the MultiValueAttributeChanges field if non-nil, zero value otherwise.

### GetMultiValueAttributeChangesOk

`func (o *AccountUpdated) GetMultiValueAttributeChangesOk() (*[]AccountUpdatedMultiValueAttributeChangesInner, bool)`

GetMultiValueAttributeChangesOk returns a tuple with the MultiValueAttributeChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiValueAttributeChanges

`func (o *AccountUpdated) SetMultiValueAttributeChanges(v []AccountUpdatedMultiValueAttributeChangesInner)`

SetMultiValueAttributeChanges sets MultiValueAttributeChanges field to given value.


### SetMultiValueAttributeChangesNil

`func (o *AccountUpdated) SetMultiValueAttributeChangesNil(b bool)`

 SetMultiValueAttributeChangesNil sets the value for MultiValueAttributeChanges to be an explicit nil

### UnsetMultiValueAttributeChanges
`func (o *AccountUpdated) UnsetMultiValueAttributeChanges()`

UnsetMultiValueAttributeChanges ensures that no value is present for MultiValueAttributeChanges, not even an explicit nil
### GetEntitlementChanges

`func (o *AccountUpdated) GetEntitlementChanges() []AccountUpdatedEntitlementChangesInner`

GetEntitlementChanges returns the EntitlementChanges field if non-nil, zero value otherwise.

### GetEntitlementChangesOk

`func (o *AccountUpdated) GetEntitlementChangesOk() (*[]AccountUpdatedEntitlementChangesInner, bool)`

GetEntitlementChangesOk returns a tuple with the EntitlementChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementChanges

`func (o *AccountUpdated) SetEntitlementChanges(v []AccountUpdatedEntitlementChangesInner)`

SetEntitlementChanges sets EntitlementChanges field to given value.


### SetEntitlementChangesNil

`func (o *AccountUpdated) SetEntitlementChangesNil(b bool)`

 SetEntitlementChangesNil sets the value for EntitlementChanges to be an explicit nil

### UnsetEntitlementChanges
`func (o *AccountUpdated) UnsetEntitlementChanges()`

UnsetEntitlementChanges ensures that no value is present for EntitlementChanges, not even an explicit nil

