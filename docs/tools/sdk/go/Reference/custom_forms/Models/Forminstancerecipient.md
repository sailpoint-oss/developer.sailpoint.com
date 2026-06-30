---
id: v1-forminstancerecipient
title: Forminstancerecipient
pagination_label: Forminstancerecipient
sidebar_label: Forminstancerecipient
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Forminstancerecipient', 'V1Forminstancerecipient'] 
slug: /tools/sdk/go/customforms/models/forminstancerecipient
tags: ['SDK', 'Software Development Kit', 'Forminstancerecipient', 'V1Forminstancerecipient']
---

# Forminstancerecipient

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID is a unique identifier | [optional] 
**Type** | Pointer to **string** | Type is a FormInstanceRecipientType value IDENTITY FormInstanceRecipientIdentity | [optional] 

## Methods

### NewForminstancerecipient

`func NewForminstancerecipient() *Forminstancerecipient`

NewForminstancerecipient instantiates a new Forminstancerecipient object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForminstancerecipientWithDefaults

`func NewForminstancerecipientWithDefaults() *Forminstancerecipient`

NewForminstancerecipientWithDefaults instantiates a new Forminstancerecipient object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Forminstancerecipient) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Forminstancerecipient) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Forminstancerecipient) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Forminstancerecipient) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Forminstancerecipient) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Forminstancerecipient) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Forminstancerecipient) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Forminstancerecipient) HasType() bool`

HasType returns a boolean if a field has been set.


