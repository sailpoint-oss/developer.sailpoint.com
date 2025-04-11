---
id: saved-search-name
title: SavedSearchName
pagination_label: SavedSearchName
sidebar_label: SavedSearchName
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SavedSearchName', 'SavedSearchName'] 
slug: /tools/sdk/go/v3/models/saved-search-name
tags: ['SDK', 'Software Development Kit', 'SavedSearchName', 'SavedSearchName']
---

# SavedSearchName

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the saved search.  | [optional] 
**Description** | Pointer to **NullableString** | The description of the saved search.  | [optional] 

## Methods

### NewSavedSearchName

`func NewSavedSearchName() *SavedSearchName`

NewSavedSearchName instantiates a new SavedSearchName object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedSearchNameWithDefaults

`func NewSavedSearchNameWithDefaults() *SavedSearchName`

NewSavedSearchNameWithDefaults instantiates a new SavedSearchName object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SavedSearchName) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SavedSearchName) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SavedSearchName) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SavedSearchName) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *SavedSearchName) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SavedSearchName) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SavedSearchName) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SavedSearchName) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *SavedSearchName) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *SavedSearchName) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil

