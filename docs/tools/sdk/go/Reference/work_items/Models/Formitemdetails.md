---
id: v1-formitemdetails
title: Formitemdetails
pagination_label: Formitemdetails
sidebar_label: Formitemdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Formitemdetails', 'V1Formitemdetails'] 
slug: /tools/sdk/go/workitems/models/formitemdetails
tags: ['SDK', 'Software Development Kit', 'Formitemdetails', 'V1Formitemdetails']
---

# Formitemdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **NullableString** | Name of the FormItem | [optional] 

## Methods

### NewFormitemdetails

`func NewFormitemdetails() *Formitemdetails`

NewFormitemdetails instantiates a new Formitemdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormitemdetailsWithDefaults

`func NewFormitemdetailsWithDefaults() *Formitemdetails`

NewFormitemdetailsWithDefaults instantiates a new Formitemdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Formitemdetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Formitemdetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Formitemdetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Formitemdetails) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Formitemdetails) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Formitemdetails) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

