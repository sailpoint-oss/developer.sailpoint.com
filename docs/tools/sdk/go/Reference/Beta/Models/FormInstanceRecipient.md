---
id: beta-form-instance-recipient
title: FormInstanceRecipient
pagination_label: FormInstanceRecipient
sidebar_label: FormInstanceRecipient
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormInstanceRecipient', 'BetaFormInstanceRecipient'] 
slug: /tools/sdk/go/beta/models/form-instance-recipient
tags: ['SDK', 'Software Development Kit', 'FormInstanceRecipient', 'BetaFormInstanceRecipient']
---

# FormInstanceRecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID is a unique identifier | [optional] 
**Type** | Pointer to **string** | Type is a FormInstanceRecipientType value IDENTITY FormInstanceRecipientIdentity | [optional] 

## Methods

### NewFormInstanceRecipient

`func NewFormInstanceRecipient() *FormInstanceRecipient`

NewFormInstanceRecipient instantiates a new FormInstanceRecipient object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormInstanceRecipientWithDefaults

`func NewFormInstanceRecipientWithDefaults() *FormInstanceRecipient`

NewFormInstanceRecipientWithDefaults instantiates a new FormInstanceRecipient object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *FormInstanceRecipient) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FormInstanceRecipient) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FormInstanceRecipient) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *FormInstanceRecipient) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *FormInstanceRecipient) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FormInstanceRecipient) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FormInstanceRecipient) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *FormInstanceRecipient) HasType() bool`

HasType returns a boolean if a field has been set.


