---
id: v1-accountupdated
title: Accountupdated
pagination_label: Accountupdated
sidebar_label: Accountupdated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountupdated', 'V1Accountupdated'] 
slug: /tools/sdk/go/triggers/models/accountupdated
tags: ['SDK', 'Software Development Kit', 'Accountupdated', 'V1Accountupdated']
---

# Accountupdated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Event** | [**AccountupdatedEvent**](accountupdated-event) |  | 
**Source** | [**Accountsourcereference**](accountsourcereference) |  | 
**Account** | [**Accountv2**](accountv2) |  | 
**Identity** | [**Identityreference2**](identityreference2) |  | 
**AccountChangeTypes** | **[]string** | The types of changes that occurred to the account. | 
**SingleValueAttributeChanges** | [**[]AccountupdatedSingleValueAttributeChangesInner**](accountupdated-single-value-attribute-changes-inner) | Details about the single-value attribute changes that occurred to the account. | 
**MultiValueAttributeChanges** | [**[]AccountupdatedMultiValueAttributeChangesInner**](accountupdated-multi-value-attribute-changes-inner) | Details about the multi-value attribute changes that occurred to the account. | 
**EntitlementChanges** | [**[]AccountupdatedEntitlementChangesInner**](accountupdated-entitlement-changes-inner) | Details about the entitlement changes that occurred to the account. | 

## Methods

### NewAccountupdated

`func NewAccountupdated(event AccountupdatedEvent, source Accountsourcereference, account Accountv2, identity Identityreference2, accountChangeTypes []string, singleValueAttributeChanges []AccountupdatedSingleValueAttributeChangesInner, multiValueAttributeChanges []AccountupdatedMultiValueAttributeChangesInner, entitlementChanges []AccountupdatedEntitlementChangesInner, ) *Accountupdated`

NewAccountupdated instantiates a new Accountupdated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountupdatedWithDefaults

`func NewAccountupdatedWithDefaults() *Accountupdated`

NewAccountupdatedWithDefaults instantiates a new Accountupdated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEvent

`func (o *Accountupdated) GetEvent() AccountupdatedEvent`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *Accountupdated) GetEventOk() (*AccountupdatedEvent, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *Accountupdated) SetEvent(v AccountupdatedEvent)`

SetEvent sets Event field to given value.


### GetSource

`func (o *Accountupdated) GetSource() Accountsourcereference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Accountupdated) GetSourceOk() (*Accountsourcereference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Accountupdated) SetSource(v Accountsourcereference)`

SetSource sets Source field to given value.


### GetAccount

`func (o *Accountupdated) GetAccount() Accountv2`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *Accountupdated) GetAccountOk() (*Accountv2, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *Accountupdated) SetAccount(v Accountv2)`

SetAccount sets Account field to given value.


### GetIdentity

`func (o *Accountupdated) GetIdentity() Identityreference2`

GetIdentity returns the Identity field if non-nil, zero value otherwise.

### GetIdentityOk

`func (o *Accountupdated) GetIdentityOk() (*Identityreference2, bool)`

GetIdentityOk returns a tuple with the Identity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentity

`func (o *Accountupdated) SetIdentity(v Identityreference2)`

SetIdentity sets Identity field to given value.


### GetAccountChangeTypes

`func (o *Accountupdated) GetAccountChangeTypes() []string`

GetAccountChangeTypes returns the AccountChangeTypes field if non-nil, zero value otherwise.

### GetAccountChangeTypesOk

`func (o *Accountupdated) GetAccountChangeTypesOk() (*[]string, bool)`

GetAccountChangeTypesOk returns a tuple with the AccountChangeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountChangeTypes

`func (o *Accountupdated) SetAccountChangeTypes(v []string)`

SetAccountChangeTypes sets AccountChangeTypes field to given value.


### GetSingleValueAttributeChanges

`func (o *Accountupdated) GetSingleValueAttributeChanges() []AccountupdatedSingleValueAttributeChangesInner`

GetSingleValueAttributeChanges returns the SingleValueAttributeChanges field if non-nil, zero value otherwise.

### GetSingleValueAttributeChangesOk

`func (o *Accountupdated) GetSingleValueAttributeChangesOk() (*[]AccountupdatedSingleValueAttributeChangesInner, bool)`

GetSingleValueAttributeChangesOk returns a tuple with the SingleValueAttributeChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSingleValueAttributeChanges

`func (o *Accountupdated) SetSingleValueAttributeChanges(v []AccountupdatedSingleValueAttributeChangesInner)`

SetSingleValueAttributeChanges sets SingleValueAttributeChanges field to given value.


### SetSingleValueAttributeChangesNil

`func (o *Accountupdated) SetSingleValueAttributeChangesNil(b bool)`

 SetSingleValueAttributeChangesNil sets the value for SingleValueAttributeChanges to be an explicit nil

### UnsetSingleValueAttributeChanges
`func (o *Accountupdated) UnsetSingleValueAttributeChanges()`

UnsetSingleValueAttributeChanges ensures that no value is present for SingleValueAttributeChanges, not even an explicit nil
### GetMultiValueAttributeChanges

`func (o *Accountupdated) GetMultiValueAttributeChanges() []AccountupdatedMultiValueAttributeChangesInner`

GetMultiValueAttributeChanges returns the MultiValueAttributeChanges field if non-nil, zero value otherwise.

### GetMultiValueAttributeChangesOk

`func (o *Accountupdated) GetMultiValueAttributeChangesOk() (*[]AccountupdatedMultiValueAttributeChangesInner, bool)`

GetMultiValueAttributeChangesOk returns a tuple with the MultiValueAttributeChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiValueAttributeChanges

`func (o *Accountupdated) SetMultiValueAttributeChanges(v []AccountupdatedMultiValueAttributeChangesInner)`

SetMultiValueAttributeChanges sets MultiValueAttributeChanges field to given value.


### SetMultiValueAttributeChangesNil

`func (o *Accountupdated) SetMultiValueAttributeChangesNil(b bool)`

 SetMultiValueAttributeChangesNil sets the value for MultiValueAttributeChanges to be an explicit nil

### UnsetMultiValueAttributeChanges
`func (o *Accountupdated) UnsetMultiValueAttributeChanges()`

UnsetMultiValueAttributeChanges ensures that no value is present for MultiValueAttributeChanges, not even an explicit nil
### GetEntitlementChanges

`func (o *Accountupdated) GetEntitlementChanges() []AccountupdatedEntitlementChangesInner`

GetEntitlementChanges returns the EntitlementChanges field if non-nil, zero value otherwise.

### GetEntitlementChangesOk

`func (o *Accountupdated) GetEntitlementChangesOk() (*[]AccountupdatedEntitlementChangesInner, bool)`

GetEntitlementChangesOk returns a tuple with the EntitlementChanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementChanges

`func (o *Accountupdated) SetEntitlementChanges(v []AccountupdatedEntitlementChangesInner)`

SetEntitlementChanges sets EntitlementChanges field to given value.


### SetEntitlementChangesNil

`func (o *Accountupdated) SetEntitlementChangesNil(b bool)`

 SetEntitlementChangesNil sets the value for EntitlementChanges to be an explicit nil

### UnsetEntitlementChanges
`func (o *Accountupdated) UnsetEntitlementChanges()`

UnsetEntitlementChanges ensures that no value is present for EntitlementChanges, not even an explicit nil

