---
id: v1-passwordsyncgroup
title: Passwordsyncgroup
pagination_label: Passwordsyncgroup
sidebar_label: Passwordsyncgroup
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Passwordsyncgroup', 'V1Passwordsyncgroup'] 
slug: /tools/sdk/go/passwordsyncgroups/models/passwordsyncgroup
tags: ['SDK', 'Software Development Kit', 'Passwordsyncgroup', 'V1Passwordsyncgroup']
---

# Passwordsyncgroup

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

### NewPasswordsyncgroup

`func NewPasswordsyncgroup() *Passwordsyncgroup`

NewPasswordsyncgroup instantiates a new Passwordsyncgroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordsyncgroupWithDefaults

`func NewPasswordsyncgroupWithDefaults() *Passwordsyncgroup`

NewPasswordsyncgroupWithDefaults instantiates a new Passwordsyncgroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Passwordsyncgroup) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Passwordsyncgroup) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Passwordsyncgroup) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Passwordsyncgroup) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Passwordsyncgroup) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Passwordsyncgroup) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Passwordsyncgroup) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Passwordsyncgroup) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPasswordPolicyId

`func (o *Passwordsyncgroup) GetPasswordPolicyId() string`

GetPasswordPolicyId returns the PasswordPolicyId field if non-nil, zero value otherwise.

### GetPasswordPolicyIdOk

`func (o *Passwordsyncgroup) GetPasswordPolicyIdOk() (*string, bool)`

GetPasswordPolicyIdOk returns a tuple with the PasswordPolicyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordPolicyId

`func (o *Passwordsyncgroup) SetPasswordPolicyId(v string)`

SetPasswordPolicyId sets PasswordPolicyId field to given value.

### HasPasswordPolicyId

`func (o *Passwordsyncgroup) HasPasswordPolicyId() bool`

HasPasswordPolicyId returns a boolean if a field has been set.

### GetSourceIds

`func (o *Passwordsyncgroup) GetSourceIds() []string`

GetSourceIds returns the SourceIds field if non-nil, zero value otherwise.

### GetSourceIdsOk

`func (o *Passwordsyncgroup) GetSourceIdsOk() (*[]string, bool)`

GetSourceIdsOk returns a tuple with the SourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIds

`func (o *Passwordsyncgroup) SetSourceIds(v []string)`

SetSourceIds sets SourceIds field to given value.

### HasSourceIds

`func (o *Passwordsyncgroup) HasSourceIds() bool`

HasSourceIds returns a boolean if a field has been set.

### GetCreated

`func (o *Passwordsyncgroup) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Passwordsyncgroup) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Passwordsyncgroup) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Passwordsyncgroup) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *Passwordsyncgroup) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *Passwordsyncgroup) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *Passwordsyncgroup) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Passwordsyncgroup) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Passwordsyncgroup) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Passwordsyncgroup) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *Passwordsyncgroup) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *Passwordsyncgroup) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil

