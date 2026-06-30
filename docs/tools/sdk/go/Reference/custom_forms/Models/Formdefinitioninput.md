---
id: v1-formdefinitioninput
title: Formdefinitioninput
pagination_label: Formdefinitioninput
sidebar_label: Formdefinitioninput
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Formdefinitioninput', 'V1Formdefinitioninput'] 
slug: /tools/sdk/go/customforms/models/formdefinitioninput
tags: ['SDK', 'Software Development Kit', 'Formdefinitioninput', 'V1Formdefinitioninput']
---

# Formdefinitioninput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier for the form input. | [optional] 
**Type** | Pointer to **string** | FormDefinitionInputType value. STRING FormDefinitionInputTypeString | [optional] 
**Label** | Pointer to **string** | Name for the form input. | [optional] 
**Description** | Pointer to **string** | Form input's description. | [optional] 

## Methods

### NewFormdefinitioninput

`func NewFormdefinitioninput() *Formdefinitioninput`

NewFormdefinitioninput instantiates a new Formdefinitioninput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormdefinitioninputWithDefaults

`func NewFormdefinitioninputWithDefaults() *Formdefinitioninput`

NewFormdefinitioninputWithDefaults instantiates a new Formdefinitioninput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Formdefinitioninput) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Formdefinitioninput) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Formdefinitioninput) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Formdefinitioninput) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Formdefinitioninput) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Formdefinitioninput) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Formdefinitioninput) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Formdefinitioninput) HasType() bool`

HasType returns a boolean if a field has been set.

### GetLabel

`func (o *Formdefinitioninput) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *Formdefinitioninput) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *Formdefinitioninput) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *Formdefinitioninput) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetDescription

`func (o *Formdefinitioninput) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Formdefinitioninput) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Formdefinitioninput) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Formdefinitioninput) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


