---
id: v1-identityattributepreview
title: Identityattributepreview
pagination_label: Identityattributepreview
sidebar_label: Identityattributepreview
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityattributepreview', 'V1Identityattributepreview'] 
slug: /tools/sdk/go/identityprofiles/models/identityattributepreview
tags: ['SDK', 'Software Development Kit', 'Identityattributepreview', 'V1Identityattributepreview']
---

# Identityattributepreview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the attribute that is being previewed. | [optional] 
**Value** | Pointer to **string** | Value that was derived during the preview. | [optional] 
**PreviousValue** | Pointer to **string** | The value of the attribute before the preview. | [optional] 
**ErrorMessages** | Pointer to [**[]Errormessagedto**](errormessagedto) | List of error messages | [optional] 

## Methods

### NewIdentityattributepreview

`func NewIdentityattributepreview() *Identityattributepreview`

NewIdentityattributepreview instantiates a new Identityattributepreview object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityattributepreviewWithDefaults

`func NewIdentityattributepreviewWithDefaults() *Identityattributepreview`

NewIdentityattributepreviewWithDefaults instantiates a new Identityattributepreview object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Identityattributepreview) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identityattributepreview) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identityattributepreview) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Identityattributepreview) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *Identityattributepreview) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Identityattributepreview) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Identityattributepreview) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Identityattributepreview) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetPreviousValue

`func (o *Identityattributepreview) GetPreviousValue() string`

GetPreviousValue returns the PreviousValue field if non-nil, zero value otherwise.

### GetPreviousValueOk

`func (o *Identityattributepreview) GetPreviousValueOk() (*string, bool)`

GetPreviousValueOk returns a tuple with the PreviousValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousValue

`func (o *Identityattributepreview) SetPreviousValue(v string)`

SetPreviousValue sets PreviousValue field to given value.

### HasPreviousValue

`func (o *Identityattributepreview) HasPreviousValue() bool`

HasPreviousValue returns a boolean if a field has been set.

### GetErrorMessages

`func (o *Identityattributepreview) GetErrorMessages() []Errormessagedto`

GetErrorMessages returns the ErrorMessages field if non-nil, zero value otherwise.

### GetErrorMessagesOk

`func (o *Identityattributepreview) GetErrorMessagesOk() (*[]Errormessagedto, bool)`

GetErrorMessagesOk returns a tuple with the ErrorMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessages

`func (o *Identityattributepreview) SetErrorMessages(v []Errormessagedto)`

SetErrorMessages sets ErrorMessages field to given value.

### HasErrorMessages

`func (o *Identityattributepreview) HasErrorMessages() bool`

HasErrorMessages returns a boolean if a field has been set.


