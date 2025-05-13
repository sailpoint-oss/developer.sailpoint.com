---
id: beta-identity-attribute-preview
title: IdentityAttributePreview
pagination_label: IdentityAttributePreview
sidebar_label: IdentityAttributePreview
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityAttributePreview', 'BetaIdentityAttributePreview'] 
slug: /tools/sdk/go/beta/models/identity-attribute-preview
tags: ['SDK', 'Software Development Kit', 'IdentityAttributePreview', 'BetaIdentityAttributePreview']
---

# IdentityAttributePreview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the attribute that is being previewed. | [optional] 
**Value** | Pointer to **string** | Value that was derived during the preview. | [optional] 
**PreviousValue** | Pointer to **string** | The value of the attribute before the preview. | [optional] 
**ErrorMessages** | Pointer to [**[]ErrorMessageDto**](error-message-dto) |  | [optional] 

## Methods

### NewIdentityAttributePreview

`func NewIdentityAttributePreview() *IdentityAttributePreview`

NewIdentityAttributePreview instantiates a new IdentityAttributePreview object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityAttributePreviewWithDefaults

`func NewIdentityAttributePreviewWithDefaults() *IdentityAttributePreview`

NewIdentityAttributePreviewWithDefaults instantiates a new IdentityAttributePreview object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *IdentityAttributePreview) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityAttributePreview) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityAttributePreview) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentityAttributePreview) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *IdentityAttributePreview) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *IdentityAttributePreview) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *IdentityAttributePreview) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *IdentityAttributePreview) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetPreviousValue

`func (o *IdentityAttributePreview) GetPreviousValue() string`

GetPreviousValue returns the PreviousValue field if non-nil, zero value otherwise.

### GetPreviousValueOk

`func (o *IdentityAttributePreview) GetPreviousValueOk() (*string, bool)`

GetPreviousValueOk returns a tuple with the PreviousValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousValue

`func (o *IdentityAttributePreview) SetPreviousValue(v string)`

SetPreviousValue sets PreviousValue field to given value.

### HasPreviousValue

`func (o *IdentityAttributePreview) HasPreviousValue() bool`

HasPreviousValue returns a boolean if a field has been set.

### GetErrorMessages

`func (o *IdentityAttributePreview) GetErrorMessages() []ErrorMessageDto`

GetErrorMessages returns the ErrorMessages field if non-nil, zero value otherwise.

### GetErrorMessagesOk

`func (o *IdentityAttributePreview) GetErrorMessagesOk() (*[]ErrorMessageDto, bool)`

GetErrorMessagesOk returns a tuple with the ErrorMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessages

`func (o *IdentityAttributePreview) SetErrorMessages(v []ErrorMessageDto)`

SetErrorMessages sets ErrorMessages field to given value.

### HasErrorMessages

`func (o *IdentityAttributePreview) HasErrorMessages() bool`

HasErrorMessages returns a boolean if a field has been set.


