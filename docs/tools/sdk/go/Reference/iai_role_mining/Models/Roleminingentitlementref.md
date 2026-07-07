---
id: v1-roleminingentitlementref
title: Roleminingentitlementref
pagination_label: Roleminingentitlementref
sidebar_label: Roleminingentitlementref
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingentitlementref', 'V1Roleminingentitlementref'] 
slug: /tools/sdk/go/iairolemining/models/roleminingentitlementref
tags: ['SDK', 'Software Development Kit', 'Roleminingentitlementref', 'V1Roleminingentitlementref']
---

# Roleminingentitlementref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the entitlement | [optional] 
**Name** | Pointer to **string** | Name of the entitlement | [optional] 
**Description** | Pointer to **NullableString** | Description forthe entitlement | [optional] 
**Attribute** | Pointer to **string** | The entitlement attribute | [optional] 

## Methods

### NewRoleminingentitlementref

`func NewRoleminingentitlementref() *Roleminingentitlementref`

NewRoleminingentitlementref instantiates a new Roleminingentitlementref object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingentitlementrefWithDefaults

`func NewRoleminingentitlementrefWithDefaults() *Roleminingentitlementref`

NewRoleminingentitlementrefWithDefaults instantiates a new Roleminingentitlementref object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Roleminingentitlementref) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Roleminingentitlementref) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Roleminingentitlementref) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Roleminingentitlementref) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Roleminingentitlementref) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Roleminingentitlementref) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Roleminingentitlementref) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Roleminingentitlementref) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Roleminingentitlementref) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Roleminingentitlementref) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Roleminingentitlementref) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Roleminingentitlementref) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Roleminingentitlementref) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Roleminingentitlementref) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAttribute

`func (o *Roleminingentitlementref) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Roleminingentitlementref) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Roleminingentitlementref) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Roleminingentitlementref) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.


