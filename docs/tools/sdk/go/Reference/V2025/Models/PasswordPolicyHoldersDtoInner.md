---
id: password-policy-holders-dto-inner
title: PasswordPolicyHoldersDtoInner
pagination_label: PasswordPolicyHoldersDtoInner
sidebar_label: PasswordPolicyHoldersDtoInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordPolicyHoldersDtoInner', 'PasswordPolicyHoldersDtoInner'] 
slug: /tools/sdk/go//models/password-policy-holders-dto-inner
tags: ['SDK', 'Software Development Kit', 'PasswordPolicyHoldersDtoInner', 'PasswordPolicyHoldersDtoInner']
---

# PasswordPolicyHoldersDtoInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PolicyId** | Pointer to **string** | The password policy Id. | [optional] 
**PolicyName** | Pointer to **string** | The name of the password policy. | [optional] 
**Selectors** | Pointer to [**PasswordPolicyHoldersDtoAttributes**](password-policy-holders-dto-attributes) |  | [optional] 

## Methods

### NewPasswordPolicyHoldersDtoInner

`func NewPasswordPolicyHoldersDtoInner() *PasswordPolicyHoldersDtoInner`

NewPasswordPolicyHoldersDtoInner instantiates a new PasswordPolicyHoldersDtoInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordPolicyHoldersDtoInnerWithDefaults

`func NewPasswordPolicyHoldersDtoInnerWithDefaults() *PasswordPolicyHoldersDtoInner`

NewPasswordPolicyHoldersDtoInnerWithDefaults instantiates a new PasswordPolicyHoldersDtoInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicyId

`func (o *PasswordPolicyHoldersDtoInner) GetPolicyId() string`

GetPolicyId returns the PolicyId field if non-nil, zero value otherwise.

### GetPolicyIdOk

`func (o *PasswordPolicyHoldersDtoInner) GetPolicyIdOk() (*string, bool)`

GetPolicyIdOk returns a tuple with the PolicyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyId

`func (o *PasswordPolicyHoldersDtoInner) SetPolicyId(v string)`

SetPolicyId sets PolicyId field to given value.

### HasPolicyId

`func (o *PasswordPolicyHoldersDtoInner) HasPolicyId() bool`

HasPolicyId returns a boolean if a field has been set.

### GetPolicyName

`func (o *PasswordPolicyHoldersDtoInner) GetPolicyName() string`

GetPolicyName returns the PolicyName field if non-nil, zero value otherwise.

### GetPolicyNameOk

`func (o *PasswordPolicyHoldersDtoInner) GetPolicyNameOk() (*string, bool)`

GetPolicyNameOk returns a tuple with the PolicyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyName

`func (o *PasswordPolicyHoldersDtoInner) SetPolicyName(v string)`

SetPolicyName sets PolicyName field to given value.

### HasPolicyName

`func (o *PasswordPolicyHoldersDtoInner) HasPolicyName() bool`

HasPolicyName returns a boolean if a field has been set.

### GetSelectors

`func (o *PasswordPolicyHoldersDtoInner) GetSelectors() PasswordPolicyHoldersDtoAttributes`

GetSelectors returns the Selectors field if non-nil, zero value otherwise.

### GetSelectorsOk

`func (o *PasswordPolicyHoldersDtoInner) GetSelectorsOk() (*PasswordPolicyHoldersDtoAttributes, bool)`

GetSelectorsOk returns a tuple with the Selectors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectors

`func (o *PasswordPolicyHoldersDtoInner) SetSelectors(v PasswordPolicyHoldersDtoAttributes)`

SetSelectors sets Selectors field to given value.

### HasSelectors

`func (o *PasswordPolicyHoldersDtoInner) HasSelectors() bool`

HasSelectors returns a boolean if a field has been set.


