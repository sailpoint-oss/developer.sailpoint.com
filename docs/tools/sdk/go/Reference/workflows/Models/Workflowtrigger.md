---
id: v1-workflowtrigger
title: Workflowtrigger
pagination_label: Workflowtrigger
sidebar_label: Workflowtrigger
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workflowtrigger', 'V1Workflowtrigger'] 
slug: /tools/sdk/go/workflows/models/workflowtrigger
tags: ['SDK', 'Software Development Kit', 'Workflowtrigger', 'V1Workflowtrigger']
---

# Workflowtrigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The trigger type | 
**DisplayName** | Pointer to **NullableString** | The trigger display name | [optional] 
**Attributes** | **map[string]interface{}** | Workflow Trigger Attributes. | 

## Methods

### NewWorkflowtrigger

`func NewWorkflowtrigger(type_ string, attributes map[string]interface{}, ) *Workflowtrigger`

NewWorkflowtrigger instantiates a new Workflowtrigger object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowtriggerWithDefaults

`func NewWorkflowtriggerWithDefaults() *Workflowtrigger`

NewWorkflowtriggerWithDefaults instantiates a new Workflowtrigger object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Workflowtrigger) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Workflowtrigger) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Workflowtrigger) SetType(v string)`

SetType sets Type field to given value.


### GetDisplayName

`func (o *Workflowtrigger) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Workflowtrigger) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Workflowtrigger) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Workflowtrigger) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### SetDisplayNameNil

`func (o *Workflowtrigger) SetDisplayNameNil(b bool)`

 SetDisplayNameNil sets the value for DisplayName to be an explicit nil

### UnsetDisplayName
`func (o *Workflowtrigger) UnsetDisplayName()`

UnsetDisplayName ensures that no value is present for DisplayName, not even an explicit nil
### GetAttributes

`func (o *Workflowtrigger) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Workflowtrigger) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Workflowtrigger) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### SetAttributesNil

`func (o *Workflowtrigger) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *Workflowtrigger) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil

