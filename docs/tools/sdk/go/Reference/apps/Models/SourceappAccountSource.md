---
id: v1-sourceapp-account-source
title: SourceappAccountSource
pagination_label: SourceappAccountSource
sidebar_label: SourceappAccountSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceappAccountSource', 'V1SourceappAccountSource'] 
slug: /tools/sdk/go/apps/models/sourceapp-account-source
tags: ['SDK', 'Software Development Kit', 'SourceappAccountSource', 'V1SourceappAccountSource']
---

# SourceappAccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The source ID | [optional] 
**Type** | Pointer to **string** | The source type, will always be \"SOURCE\" | [optional] 
**Name** | Pointer to **string** | The source name | [optional] 
**UseForPasswordManagement** | Pointer to **bool** | If the source is used for password management | [optional] [default to false]
**PasswordPolicies** | Pointer to [**[]Basereferencedto**](basereferencedto) | The password policies for the source | [optional] 

## Methods

### NewSourceappAccountSource

`func NewSourceappAccountSource() *SourceappAccountSource`

NewSourceappAccountSource instantiates a new SourceappAccountSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceappAccountSourceWithDefaults

`func NewSourceappAccountSourceWithDefaults() *SourceappAccountSource`

NewSourceappAccountSourceWithDefaults instantiates a new SourceappAccountSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceappAccountSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceappAccountSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceappAccountSource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceappAccountSource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *SourceappAccountSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceappAccountSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceappAccountSource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceappAccountSource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *SourceappAccountSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceappAccountSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceappAccountSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceappAccountSource) HasName() bool`

HasName returns a boolean if a field has been set.

### GetUseForPasswordManagement

`func (o *SourceappAccountSource) GetUseForPasswordManagement() bool`

GetUseForPasswordManagement returns the UseForPasswordManagement field if non-nil, zero value otherwise.

### GetUseForPasswordManagementOk

`func (o *SourceappAccountSource) GetUseForPasswordManagementOk() (*bool, bool)`

GetUseForPasswordManagementOk returns a tuple with the UseForPasswordManagement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseForPasswordManagement

`func (o *SourceappAccountSource) SetUseForPasswordManagement(v bool)`

SetUseForPasswordManagement sets UseForPasswordManagement field to given value.

### HasUseForPasswordManagement

`func (o *SourceappAccountSource) HasUseForPasswordManagement() bool`

HasUseForPasswordManagement returns a boolean if a field has been set.

### GetPasswordPolicies

`func (o *SourceappAccountSource) GetPasswordPolicies() []Basereferencedto`

GetPasswordPolicies returns the PasswordPolicies field if non-nil, zero value otherwise.

### GetPasswordPoliciesOk

`func (o *SourceappAccountSource) GetPasswordPoliciesOk() (*[]Basereferencedto, bool)`

GetPasswordPoliciesOk returns a tuple with the PasswordPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordPolicies

`func (o *SourceappAccountSource) SetPasswordPolicies(v []Basereferencedto)`

SetPasswordPolicies sets PasswordPolicies field to given value.

### HasPasswordPolicies

`func (o *SourceappAccountSource) HasPasswordPolicies() bool`

HasPasswordPolicies returns a boolean if a field has been set.

### SetPasswordPoliciesNil

`func (o *SourceappAccountSource) SetPasswordPoliciesNil(b bool)`

 SetPasswordPoliciesNil sets the value for PasswordPolicies to be an explicit nil

### UnsetPasswordPolicies
`func (o *SourceappAccountSource) UnsetPasswordPolicies()`

UnsetPasswordPolicies ensures that no value is present for PasswordPolicies, not even an explicit nil

