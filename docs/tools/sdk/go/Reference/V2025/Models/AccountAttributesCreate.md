---
id: account-attributes-create
title: AccountAttributesCreate
pagination_label: AccountAttributesCreate
sidebar_label: AccountAttributesCreate
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAttributesCreate', 'AccountAttributesCreate'] 
slug: /tools/sdk/go//models/account-attributes-create
tags: ['SDK', 'Software Development Kit', 'AccountAttributesCreate', 'AccountAttributesCreate']
---

# AccountAttributesCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | [**AccountAttributesCreateAttributes**](account-attributes-create-attributes) |  | 

## Methods

### NewAccountAttributesCreate

`func NewAccountAttributesCreate(attributes AccountAttributesCreateAttributes, ) *AccountAttributesCreate`

NewAccountAttributesCreate instantiates a new AccountAttributesCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAttributesCreateWithDefaults

`func NewAccountAttributesCreateWithDefaults() *AccountAttributesCreate`

NewAccountAttributesCreateWithDefaults instantiates a new AccountAttributesCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributes

`func (o *AccountAttributesCreate) GetAttributes() AccountAttributesCreateAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AccountAttributesCreate) GetAttributesOk() (*AccountAttributesCreateAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AccountAttributesCreate) SetAttributes(v AccountAttributesCreateAttributes)`

SetAttributes sets Attributes field to given value.



