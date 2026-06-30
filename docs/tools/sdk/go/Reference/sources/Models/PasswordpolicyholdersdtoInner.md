---
id: v1-passwordpolicyholdersdto-inner
title: PasswordpolicyholdersdtoInner
pagination_label: PasswordpolicyholdersdtoInner
sidebar_label: PasswordpolicyholdersdtoInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordpolicyholdersdtoInner', 'V1PasswordpolicyholdersdtoInner'] 
slug: /tools/sdk/go/sources/models/passwordpolicyholdersdto-inner
tags: ['SDK', 'Software Development Kit', 'PasswordpolicyholdersdtoInner', 'V1PasswordpolicyholdersdtoInner']
---

# PasswordpolicyholdersdtoInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PolicyId** | Pointer to **string** | The password policy Id. | [optional] 
**PolicyName** | Pointer to **string** | The name of the password policy. | [optional] 
**Selectors** | Pointer to [**Passwordpolicyholdersdtoattributes**](passwordpolicyholdersdtoattributes) |  | [optional] 

## Methods

### NewPasswordpolicyholdersdtoInner

`func NewPasswordpolicyholdersdtoInner() *PasswordpolicyholdersdtoInner`

NewPasswordpolicyholdersdtoInner instantiates a new PasswordpolicyholdersdtoInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordpolicyholdersdtoInnerWithDefaults

`func NewPasswordpolicyholdersdtoInnerWithDefaults() *PasswordpolicyholdersdtoInner`

NewPasswordpolicyholdersdtoInnerWithDefaults instantiates a new PasswordpolicyholdersdtoInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicyId

`func (o *PasswordpolicyholdersdtoInner) GetPolicyId() string`

GetPolicyId returns the PolicyId field if non-nil, zero value otherwise.

### GetPolicyIdOk

`func (o *PasswordpolicyholdersdtoInner) GetPolicyIdOk() (*string, bool)`

GetPolicyIdOk returns a tuple with the PolicyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyId

`func (o *PasswordpolicyholdersdtoInner) SetPolicyId(v string)`

SetPolicyId sets PolicyId field to given value.

### HasPolicyId

`func (o *PasswordpolicyholdersdtoInner) HasPolicyId() bool`

HasPolicyId returns a boolean if a field has been set.

### GetPolicyName

`func (o *PasswordpolicyholdersdtoInner) GetPolicyName() string`

GetPolicyName returns the PolicyName field if non-nil, zero value otherwise.

### GetPolicyNameOk

`func (o *PasswordpolicyholdersdtoInner) GetPolicyNameOk() (*string, bool)`

GetPolicyNameOk returns a tuple with the PolicyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyName

`func (o *PasswordpolicyholdersdtoInner) SetPolicyName(v string)`

SetPolicyName sets PolicyName field to given value.

### HasPolicyName

`func (o *PasswordpolicyholdersdtoInner) HasPolicyName() bool`

HasPolicyName returns a boolean if a field has been set.

### GetSelectors

`func (o *PasswordpolicyholdersdtoInner) GetSelectors() Passwordpolicyholdersdtoattributes`

GetSelectors returns the Selectors field if non-nil, zero value otherwise.

### GetSelectorsOk

`func (o *PasswordpolicyholdersdtoInner) GetSelectorsOk() (*Passwordpolicyholdersdtoattributes, bool)`

GetSelectorsOk returns a tuple with the Selectors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectors

`func (o *PasswordpolicyholdersdtoInner) SetSelectors(v Passwordpolicyholdersdtoattributes)`

SetSelectors sets Selectors field to given value.

### HasSelectors

`func (o *PasswordpolicyholdersdtoInner) HasSelectors() bool`

HasSelectors returns a boolean if a field has been set.


