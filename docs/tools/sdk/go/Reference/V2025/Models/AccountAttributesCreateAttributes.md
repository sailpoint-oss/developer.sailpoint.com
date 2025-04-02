---
id: account-attributes-create-attributes
title: AccountAttributesCreateAttributes
pagination_label: AccountAttributesCreateAttributes
sidebar_label: AccountAttributesCreateAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAttributesCreateAttributes', 'AccountAttributesCreateAttributes'] 
slug: /tools/sdk/go//models/account-attributes-create-attributes
tags: ['SDK', 'Software Development Kit', 'AccountAttributesCreateAttributes', 'AccountAttributesCreateAttributes']
---

# AccountAttributesCreateAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **string** | Target source to create an account | 

## Methods

### NewAccountAttributesCreateAttributes

`func NewAccountAttributesCreateAttributes(sourceId string, ) *AccountAttributesCreateAttributes`

NewAccountAttributesCreateAttributes instantiates a new AccountAttributesCreateAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAttributesCreateAttributesWithDefaults

`func NewAccountAttributesCreateAttributesWithDefaults() *AccountAttributesCreateAttributes`

NewAccountAttributesCreateAttributesWithDefaults instantiates a new AccountAttributesCreateAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceId

`func (o *AccountAttributesCreateAttributes) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *AccountAttributesCreateAttributes) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *AccountAttributesCreateAttributes) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.



