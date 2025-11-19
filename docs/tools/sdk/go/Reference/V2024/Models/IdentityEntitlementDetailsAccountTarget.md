---
id: v2024-identity-entitlement-details-account-target
title: IdentityEntitlementDetailsAccountTarget
pagination_label: IdentityEntitlementDetailsAccountTarget
sidebar_label: IdentityEntitlementDetailsAccountTarget
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityEntitlementDetailsAccountTarget', 'V2024IdentityEntitlementDetailsAccountTarget'] 
slug: /tools/sdk/go/v2024/models/identity-entitlement-details-account-target
tags: ['SDK', 'Software Development Kit', 'IdentityEntitlementDetailsAccountTarget', 'V2024IdentityEntitlementDetailsAccountTarget']
---

# IdentityEntitlementDetailsAccountTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | The id of account | [optional] 
**AccountName** | Pointer to **string** | The name of account | [optional] 
**AccountUUID** | Pointer to **NullableString** | The UUID representation of the account if available | [optional] 
**SourceId** | Pointer to **string** | The id of Source | [optional] 
**SourceName** | Pointer to **string** | The name of Source | [optional] 
**RemoveDate** | Pointer to **NullableString** | The removal date scheduled for the entitlement on the Identity | [optional] 
**AssignmentId** | Pointer to **NullableString** | The assignmentId of the entitlement on the Identity | [optional] 
**Revocable** | Pointer to **bool** | If the entitlement can be revoked | [optional] [default to false]

## Methods

### NewIdentityEntitlementDetailsAccountTarget

`func NewIdentityEntitlementDetailsAccountTarget() *IdentityEntitlementDetailsAccountTarget`

NewIdentityEntitlementDetailsAccountTarget instantiates a new IdentityEntitlementDetailsAccountTarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityEntitlementDetailsAccountTargetWithDefaults

`func NewIdentityEntitlementDetailsAccountTargetWithDefaults() *IdentityEntitlementDetailsAccountTarget`

NewIdentityEntitlementDetailsAccountTargetWithDefaults instantiates a new IdentityEntitlementDetailsAccountTarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *IdentityEntitlementDetailsAccountTarget) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *IdentityEntitlementDetailsAccountTarget) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *IdentityEntitlementDetailsAccountTarget) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *IdentityEntitlementDetailsAccountTarget) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAccountName

`func (o *IdentityEntitlementDetailsAccountTarget) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *IdentityEntitlementDetailsAccountTarget) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *IdentityEntitlementDetailsAccountTarget) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *IdentityEntitlementDetailsAccountTarget) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetAccountUUID

`func (o *IdentityEntitlementDetailsAccountTarget) GetAccountUUID() string`

GetAccountUUID returns the AccountUUID field if non-nil, zero value otherwise.

### GetAccountUUIDOk

`func (o *IdentityEntitlementDetailsAccountTarget) GetAccountUUIDOk() (*string, bool)`

GetAccountUUIDOk returns a tuple with the AccountUUID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountUUID

`func (o *IdentityEntitlementDetailsAccountTarget) SetAccountUUID(v string)`

SetAccountUUID sets AccountUUID field to given value.

### HasAccountUUID

`func (o *IdentityEntitlementDetailsAccountTarget) HasAccountUUID() bool`

HasAccountUUID returns a boolean if a field has been set.

### SetAccountUUIDNil

`func (o *IdentityEntitlementDetailsAccountTarget) SetAccountUUIDNil(b bool)`

 SetAccountUUIDNil sets the value for AccountUUID to be an explicit nil

### UnsetAccountUUID
`func (o *IdentityEntitlementDetailsAccountTarget) UnsetAccountUUID()`

UnsetAccountUUID ensures that no value is present for AccountUUID, not even an explicit nil
### GetSourceId

`func (o *IdentityEntitlementDetailsAccountTarget) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *IdentityEntitlementDetailsAccountTarget) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *IdentityEntitlementDetailsAccountTarget) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *IdentityEntitlementDetailsAccountTarget) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceName

`func (o *IdentityEntitlementDetailsAccountTarget) GetSourceName() string`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *IdentityEntitlementDetailsAccountTarget) GetSourceNameOk() (*string, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *IdentityEntitlementDetailsAccountTarget) SetSourceName(v string)`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *IdentityEntitlementDetailsAccountTarget) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### GetRemoveDate

`func (o *IdentityEntitlementDetailsAccountTarget) GetRemoveDate() string`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *IdentityEntitlementDetailsAccountTarget) GetRemoveDateOk() (*string, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *IdentityEntitlementDetailsAccountTarget) SetRemoveDate(v string)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *IdentityEntitlementDetailsAccountTarget) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *IdentityEntitlementDetailsAccountTarget) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *IdentityEntitlementDetailsAccountTarget) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil
### GetAssignmentId

`func (o *IdentityEntitlementDetailsAccountTarget) GetAssignmentId() string`

GetAssignmentId returns the AssignmentId field if non-nil, zero value otherwise.

### GetAssignmentIdOk

`func (o *IdentityEntitlementDetailsAccountTarget) GetAssignmentIdOk() (*string, bool)`

GetAssignmentIdOk returns a tuple with the AssignmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentId

`func (o *IdentityEntitlementDetailsAccountTarget) SetAssignmentId(v string)`

SetAssignmentId sets AssignmentId field to given value.

### HasAssignmentId

`func (o *IdentityEntitlementDetailsAccountTarget) HasAssignmentId() bool`

HasAssignmentId returns a boolean if a field has been set.

### SetAssignmentIdNil

`func (o *IdentityEntitlementDetailsAccountTarget) SetAssignmentIdNil(b bool)`

 SetAssignmentIdNil sets the value for AssignmentId to be an explicit nil

### UnsetAssignmentId
`func (o *IdentityEntitlementDetailsAccountTarget) UnsetAssignmentId()`

UnsetAssignmentId ensures that no value is present for AssignmentId, not even an explicit nil
### GetRevocable

`func (o *IdentityEntitlementDetailsAccountTarget) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *IdentityEntitlementDetailsAccountTarget) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *IdentityEntitlementDetailsAccountTarget) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.

### HasRevocable

`func (o *IdentityEntitlementDetailsAccountTarget) HasRevocable() bool`

HasRevocable returns a boolean if a field has been set.


