---
id: v1-workflowlibraryformfields
title: Workflowlibraryformfields
pagination_label: Workflowlibraryformfields
sidebar_label: Workflowlibraryformfields
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workflowlibraryformfields', 'V1Workflowlibraryformfields'] 
slug: /tools/sdk/go/workflows/models/workflowlibraryformfields
tags: ['SDK', 'Software Development Kit', 'Workflowlibraryformfields', 'V1Workflowlibraryformfields']
---

# Workflowlibraryformfields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the form field | [optional] 
**HelpText** | Pointer to **string** | Describes the form field in the UI | [optional] 
**Label** | Pointer to **string** | A human readable name for this form field in the UI | [optional] 
**Name** | Pointer to **string** | The name of the input attribute | [optional] 
**Required** | Pointer to **bool** | Denotes if this field is a required attribute | [optional] [default to false]
**Type** | Pointer to **NullableString** | The type of the form field | [optional] 

## Methods

### NewWorkflowlibraryformfields

`func NewWorkflowlibraryformfields() *Workflowlibraryformfields`

NewWorkflowlibraryformfields instantiates a new Workflowlibraryformfields object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowlibraryformfieldsWithDefaults

`func NewWorkflowlibraryformfieldsWithDefaults() *Workflowlibraryformfields`

NewWorkflowlibraryformfieldsWithDefaults instantiates a new Workflowlibraryformfields object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *Workflowlibraryformfields) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Workflowlibraryformfields) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Workflowlibraryformfields) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Workflowlibraryformfields) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHelpText

`func (o *Workflowlibraryformfields) GetHelpText() string`

GetHelpText returns the HelpText field if non-nil, zero value otherwise.

### GetHelpTextOk

`func (o *Workflowlibraryformfields) GetHelpTextOk() (*string, bool)`

GetHelpTextOk returns a tuple with the HelpText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHelpText

`func (o *Workflowlibraryformfields) SetHelpText(v string)`

SetHelpText sets HelpText field to given value.

### HasHelpText

`func (o *Workflowlibraryformfields) HasHelpText() bool`

HasHelpText returns a boolean if a field has been set.

### GetLabel

`func (o *Workflowlibraryformfields) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *Workflowlibraryformfields) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *Workflowlibraryformfields) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *Workflowlibraryformfields) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetName

`func (o *Workflowlibraryformfields) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Workflowlibraryformfields) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Workflowlibraryformfields) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Workflowlibraryformfields) HasName() bool`

HasName returns a boolean if a field has been set.

### GetRequired

`func (o *Workflowlibraryformfields) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *Workflowlibraryformfields) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *Workflowlibraryformfields) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *Workflowlibraryformfields) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetType

`func (o *Workflowlibraryformfields) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Workflowlibraryformfields) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Workflowlibraryformfields) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Workflowlibraryformfields) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *Workflowlibraryformfields) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *Workflowlibraryformfields) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil

