---
id: v2024-source-app-account-source
title: SourceAppAccountSource
pagination_label: SourceAppAccountSource
sidebar_label: SourceAppAccountSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceAppAccountSource', 'V2024SourceAppAccountSource'] 
slug: /tools/sdk/go/v2024/models/source-app-account-source
tags: ['SDK', 'Software Development Kit', 'SourceAppAccountSource', 'V2024SourceAppAccountSource']
---

# SourceAppAccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The source ID | [optional] 
**Type** | Pointer to **string** | The source type, will always be \"SOURCE\" | [optional] 
**Name** | Pointer to **string** | The source name | [optional] 
**UseForPasswordManagement** | Pointer to **bool** | If the source is used for password management | [optional] [default to false]
**PasswordPolicies** | Pointer to [**[]BaseReferenceDto**](base-reference-dto) | The password policies for the source | [optional] 

## Methods

### NewSourceAppAccountSource

`func NewSourceAppAccountSource() *SourceAppAccountSource`

NewSourceAppAccountSource instantiates a new SourceAppAccountSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceAppAccountSourceWithDefaults

`func NewSourceAppAccountSourceWithDefaults() *SourceAppAccountSource`

NewSourceAppAccountSourceWithDefaults instantiates a new SourceAppAccountSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceAppAccountSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceAppAccountSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceAppAccountSource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceAppAccountSource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *SourceAppAccountSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceAppAccountSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceAppAccountSource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceAppAccountSource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *SourceAppAccountSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceAppAccountSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceAppAccountSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceAppAccountSource) HasName() bool`

HasName returns a boolean if a field has been set.

### GetUseForPasswordManagement

`func (o *SourceAppAccountSource) GetUseForPasswordManagement() bool`

GetUseForPasswordManagement returns the UseForPasswordManagement field if non-nil, zero value otherwise.

### GetUseForPasswordManagementOk

`func (o *SourceAppAccountSource) GetUseForPasswordManagementOk() (*bool, bool)`

GetUseForPasswordManagementOk returns a tuple with the UseForPasswordManagement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseForPasswordManagement

`func (o *SourceAppAccountSource) SetUseForPasswordManagement(v bool)`

SetUseForPasswordManagement sets UseForPasswordManagement field to given value.

### HasUseForPasswordManagement

`func (o *SourceAppAccountSource) HasUseForPasswordManagement() bool`

HasUseForPasswordManagement returns a boolean if a field has been set.

### GetPasswordPolicies

`func (o *SourceAppAccountSource) GetPasswordPolicies() []BaseReferenceDto`

GetPasswordPolicies returns the PasswordPolicies field if non-nil, zero value otherwise.

### GetPasswordPoliciesOk

`func (o *SourceAppAccountSource) GetPasswordPoliciesOk() (*[]BaseReferenceDto, bool)`

GetPasswordPoliciesOk returns a tuple with the PasswordPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordPolicies

`func (o *SourceAppAccountSource) SetPasswordPolicies(v []BaseReferenceDto)`

SetPasswordPolicies sets PasswordPolicies field to given value.

### HasPasswordPolicies

`func (o *SourceAppAccountSource) HasPasswordPolicies() bool`

HasPasswordPolicies returns a boolean if a field has been set.

### SetPasswordPoliciesNil

`func (o *SourceAppAccountSource) SetPasswordPoliciesNil(b bool)`

 SetPasswordPoliciesNil sets the value for PasswordPolicies to be an explicit nil

### UnsetPasswordPolicies
`func (o *SourceAppAccountSource) UnsetPasswordPolicies()`

UnsetPasswordPolicies ensures that no value is present for PasswordPolicies, not even an explicit nil

