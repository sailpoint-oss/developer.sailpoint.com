---
id: v1-savedsearchname
title: Savedsearchname
pagination_label: Savedsearchname
sidebar_label: Savedsearchname
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Savedsearchname', 'V1Savedsearchname'] 
slug: /tools/sdk/go/savedsearch/models/savedsearchname
tags: ['SDK', 'Software Development Kit', 'Savedsearchname', 'V1Savedsearchname']
---

# Savedsearchname

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the saved search.  | [optional] 
**Description** | Pointer to **NullableString** | The description of the saved search.  | [optional] 

## Methods

### NewSavedsearchname

`func NewSavedsearchname() *Savedsearchname`

NewSavedsearchname instantiates a new Savedsearchname object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedsearchnameWithDefaults

`func NewSavedsearchnameWithDefaults() *Savedsearchname`

NewSavedsearchnameWithDefaults instantiates a new Savedsearchname object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Savedsearchname) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Savedsearchname) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Savedsearchname) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Savedsearchname) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Savedsearchname) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Savedsearchname) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Savedsearchname) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Savedsearchname) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Savedsearchname) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Savedsearchname) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil

