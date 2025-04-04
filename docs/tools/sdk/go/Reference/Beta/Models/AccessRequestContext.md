---
id: beta-access-request-context
title: AccessRequestContext
pagination_label: AccessRequestContext
sidebar_label: AccessRequestContext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestContext', 'BetaAccessRequestContext'] 
slug: /tools/sdk/go/beta/models/access-request-context
tags: ['SDK', 'Software Development Kit', 'AccessRequestContext', 'BetaAccessRequestContext']
---

# AccessRequestContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContextAttributes** | Pointer to [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 

## Methods

### NewAccessRequestContext

`func NewAccessRequestContext() *AccessRequestContext`

NewAccessRequestContext instantiates a new AccessRequestContext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestContextWithDefaults

`func NewAccessRequestContextWithDefaults() *AccessRequestContext`

NewAccessRequestContextWithDefaults instantiates a new AccessRequestContext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContextAttributes

`func (o *AccessRequestContext) GetContextAttributes() []ContextAttributeDto`

GetContextAttributes returns the ContextAttributes field if non-nil, zero value otherwise.

### GetContextAttributesOk

`func (o *AccessRequestContext) GetContextAttributesOk() (*[]ContextAttributeDto, bool)`

GetContextAttributesOk returns a tuple with the ContextAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContextAttributes

`func (o *AccessRequestContext) SetContextAttributes(v []ContextAttributeDto)`

SetContextAttributes sets ContextAttributes field to given value.

### HasContextAttributes

`func (o *AccessRequestContext) HasContextAttributes() bool`

HasContextAttributes returns a boolean if a field has been set.


