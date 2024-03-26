---
id: account-attributes
title: AccountAttributes
pagination_label: AccountAttributes
sidebar_label: AccountAttributes
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccountAttributes'] 
slug: /tools/sdk/go/v3/models/account-attributes
tags: ['SDK', 'Software Development Kit', 'AccountAttributes']
---

# AccountAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** |  **map[string]interface{}** | The schema attribute values for the account | 

## Methods

### NewAccountAttributes

`func NewAccountAttributes(attributes map[string]interface{}, ) *AccountAttributes`

NewAccountAttributes instantiates a new AccountAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAttributesWithDefaults

`func NewAccountAttributesWithDefaults() *AccountAttributes`

NewAccountAttributesWithDefaults instantiates a new AccountAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributes

`func (o *AccountAttributes) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AccountAttributes) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AccountAttributes) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.



[[Back to top]](#) 


