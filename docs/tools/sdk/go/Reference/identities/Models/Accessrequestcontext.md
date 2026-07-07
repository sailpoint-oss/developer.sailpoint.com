---
id: v1-accessrequestcontext
title: Accessrequestcontext
pagination_label: Accessrequestcontext
sidebar_label: Accessrequestcontext
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestcontext', 'V1Accessrequestcontext'] 
slug: /tools/sdk/go/identities/models/accessrequestcontext
tags: ['SDK', 'Software Development Kit', 'Accessrequestcontext', 'V1Accessrequestcontext']
---

# Accessrequestcontext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContextAttributes** | Pointer to [**[]Contextattributedto**](contextattributedto) |  | [optional] 

## Methods

### NewAccessrequestcontext

`func NewAccessrequestcontext() *Accessrequestcontext`

NewAccessrequestcontext instantiates a new Accessrequestcontext object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestcontextWithDefaults

`func NewAccessrequestcontextWithDefaults() *Accessrequestcontext`

NewAccessrequestcontextWithDefaults instantiates a new Accessrequestcontext object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContextAttributes

`func (o *Accessrequestcontext) GetContextAttributes() []Contextattributedto`

GetContextAttributes returns the ContextAttributes field if non-nil, zero value otherwise.

### GetContextAttributesOk

`func (o *Accessrequestcontext) GetContextAttributesOk() (*[]Contextattributedto, bool)`

GetContextAttributesOk returns a tuple with the ContextAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContextAttributes

`func (o *Accessrequestcontext) SetContextAttributes(v []Contextattributedto)`

SetContextAttributes sets ContextAttributes field to given value.

### HasContextAttributes

`func (o *Accessrequestcontext) HasContextAttributes() bool`

HasContextAttributes returns a boolean if a field has been set.


