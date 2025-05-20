---
id: beta-password-sync-group
title: PasswordSyncGroup
pagination_label: PasswordSyncGroup
sidebar_label: PasswordSyncGroup
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordSyncGroup', 'BetaPasswordSyncGroup'] 
slug: /tools/sdk/go/beta/models/password-sync-group
tags: ['SDK', 'Software Development Kit', 'PasswordSyncGroup', 'BetaPasswordSyncGroup']
---

# PasswordSyncGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the sync group | [optional] 
**Name** | Pointer to **string** | Name of the sync group | [optional] 
**PasswordPolicyId** | Pointer to **string** | ID of the password policy | [optional] 
**SourceIds** | Pointer to **[]string** | List of password managed sources IDs | [optional] 
**Created** | Pointer to **NullableTime** | The date and time this sync group was created | [optional] 
**Modified** | Pointer to **NullableTime** | The date and time this sync group was last modified | [optional] 

## Methods

### NewPasswordSyncGroup

`func NewPasswordSyncGroup() *PasswordSyncGroup`

NewPasswordSyncGroup instantiates a new PasswordSyncGroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordSyncGroupWithDefaults

`func NewPasswordSyncGroupWithDefaults() *PasswordSyncGroup`

NewPasswordSyncGroupWithDefaults instantiates a new PasswordSyncGroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PasswordSyncGroup) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PasswordSyncGroup) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PasswordSyncGroup) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *PasswordSyncGroup) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *PasswordSyncGroup) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PasswordSyncGroup) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PasswordSyncGroup) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PasswordSyncGroup) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPasswordPolicyId

`func (o *PasswordSyncGroup) GetPasswordPolicyId() string`

GetPasswordPolicyId returns the PasswordPolicyId field if non-nil, zero value otherwise.

### GetPasswordPolicyIdOk

`func (o *PasswordSyncGroup) GetPasswordPolicyIdOk() (*string, bool)`

GetPasswordPolicyIdOk returns a tuple with the PasswordPolicyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordPolicyId

`func (o *PasswordSyncGroup) SetPasswordPolicyId(v string)`

SetPasswordPolicyId sets PasswordPolicyId field to given value.

### HasPasswordPolicyId

`func (o *PasswordSyncGroup) HasPasswordPolicyId() bool`

HasPasswordPolicyId returns a boolean if a field has been set.

### GetSourceIds

`func (o *PasswordSyncGroup) GetSourceIds() []string`

GetSourceIds returns the SourceIds field if non-nil, zero value otherwise.

### GetSourceIdsOk

`func (o *PasswordSyncGroup) GetSourceIdsOk() (*[]string, bool)`

GetSourceIdsOk returns a tuple with the SourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIds

`func (o *PasswordSyncGroup) SetSourceIds(v []string)`

SetSourceIds sets SourceIds field to given value.

### HasSourceIds

`func (o *PasswordSyncGroup) HasSourceIds() bool`

HasSourceIds returns a boolean if a field has been set.

### GetCreated

`func (o *PasswordSyncGroup) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PasswordSyncGroup) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PasswordSyncGroup) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *PasswordSyncGroup) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *PasswordSyncGroup) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *PasswordSyncGroup) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *PasswordSyncGroup) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *PasswordSyncGroup) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *PasswordSyncGroup) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *PasswordSyncGroup) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *PasswordSyncGroup) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *PasswordSyncGroup) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil

