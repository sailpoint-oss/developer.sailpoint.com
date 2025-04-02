---
id: password-policy-holders-dto-attributes
title: PasswordPolicyHoldersDtoAttributes
pagination_label: PasswordPolicyHoldersDtoAttributes
sidebar_label: PasswordPolicyHoldersDtoAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordPolicyHoldersDtoAttributes', 'PasswordPolicyHoldersDtoAttributes'] 
slug: /tools/sdk/go//models/password-policy-holders-dto-attributes
tags: ['SDK', 'Software Development Kit', 'PasswordPolicyHoldersDtoAttributes', 'PasswordPolicyHoldersDtoAttributes']
---

# PasswordPolicyHoldersDtoAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityAttr** | Pointer to [**[]PasswordPolicyHoldersDtoAttributesIdentityAttrInner**](password-policy-holders-dto-attributes-identity-attr-inner) | Attributes of PasswordPolicyHoldersDto | [optional] 

## Methods

### NewPasswordPolicyHoldersDtoAttributes

`func NewPasswordPolicyHoldersDtoAttributes() *PasswordPolicyHoldersDtoAttributes`

NewPasswordPolicyHoldersDtoAttributes instantiates a new PasswordPolicyHoldersDtoAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordPolicyHoldersDtoAttributesWithDefaults

`func NewPasswordPolicyHoldersDtoAttributesWithDefaults() *PasswordPolicyHoldersDtoAttributes`

NewPasswordPolicyHoldersDtoAttributesWithDefaults instantiates a new PasswordPolicyHoldersDtoAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityAttr

`func (o *PasswordPolicyHoldersDtoAttributes) GetIdentityAttr() []PasswordPolicyHoldersDtoAttributesIdentityAttrInner`

GetIdentityAttr returns the IdentityAttr field if non-nil, zero value otherwise.

### GetIdentityAttrOk

`func (o *PasswordPolicyHoldersDtoAttributes) GetIdentityAttrOk() (*[]PasswordPolicyHoldersDtoAttributesIdentityAttrInner, bool)`

GetIdentityAttrOk returns a tuple with the IdentityAttr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttr

`func (o *PasswordPolicyHoldersDtoAttributes) SetIdentityAttr(v []PasswordPolicyHoldersDtoAttributesIdentityAttrInner)`

SetIdentityAttr sets IdentityAttr field to given value.

### HasIdentityAttr

`func (o *PasswordPolicyHoldersDtoAttributes) HasIdentityAttr() bool`

HasIdentityAttr returns a boolean if a field has been set.


