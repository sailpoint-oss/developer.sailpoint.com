---
id: v1-formowner
title: Formowner
pagination_label: Formowner
sidebar_label: Formowner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Formowner', 'V1Formowner'] 
slug: /tools/sdk/go/customforms/models/formowner
tags: ['SDK', 'Software Development Kit', 'Formowner', 'V1Formowner']
---

# Formowner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | FormOwnerType value. IDENTITY FormOwnerTypeIdentity | [optional] 
**Id** | Pointer to **string** | Unique identifier of the form's owner. | [optional] 
**Name** | Pointer to **string** | Name of the form's owner. | [optional] 

## Methods

### NewFormowner

`func NewFormowner() *Formowner`

NewFormowner instantiates a new Formowner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormownerWithDefaults

`func NewFormownerWithDefaults() *Formowner`

NewFormownerWithDefaults instantiates a new Formowner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Formowner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Formowner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Formowner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Formowner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Formowner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Formowner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Formowner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Formowner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Formowner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Formowner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Formowner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Formowner) HasName() bool`

HasName returns a boolean if a field has been set.


