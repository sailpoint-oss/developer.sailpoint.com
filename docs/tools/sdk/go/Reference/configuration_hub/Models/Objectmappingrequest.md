---
id: v1-objectmappingrequest
title: Objectmappingrequest
pagination_label: Objectmappingrequest
sidebar_label: Objectmappingrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Objectmappingrequest', 'V1Objectmappingrequest'] 
slug: /tools/sdk/go/configurationhub/models/objectmappingrequest
tags: ['SDK', 'Software Development Kit', 'Objectmappingrequest', 'V1Objectmappingrequest']
---

# Objectmappingrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectType** | **string** | Type of the object the mapping value applies to, must be one from enum | 
**JsonPath** | **string** | JSONPath expression denoting the path within the object where the mapping value should be applied | 
**SourceValue** | **string** | Original value at the jsonPath location within the object | 
**TargetValue** | **string** | Value to be assigned at the jsonPath location within the object | 
**Enabled** | Pointer to **bool** | Whether or not this object mapping is enabled | [optional] [default to false]

## Methods

### NewObjectmappingrequest

`func NewObjectmappingrequest(objectType string, jsonPath string, sourceValue string, targetValue string, ) *Objectmappingrequest`

NewObjectmappingrequest instantiates a new Objectmappingrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectmappingrequestWithDefaults

`func NewObjectmappingrequestWithDefaults() *Objectmappingrequest`

NewObjectmappingrequestWithDefaults instantiates a new Objectmappingrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectType

`func (o *Objectmappingrequest) GetObjectType() string`

GetObjectType returns the ObjectType field if non-nil, zero value otherwise.

### GetObjectTypeOk

`func (o *Objectmappingrequest) GetObjectTypeOk() (*string, bool)`

GetObjectTypeOk returns a tuple with the ObjectType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectType

`func (o *Objectmappingrequest) SetObjectType(v string)`

SetObjectType sets ObjectType field to given value.


### GetJsonPath

`func (o *Objectmappingrequest) GetJsonPath() string`

GetJsonPath returns the JsonPath field if non-nil, zero value otherwise.

### GetJsonPathOk

`func (o *Objectmappingrequest) GetJsonPathOk() (*string, bool)`

GetJsonPathOk returns a tuple with the JsonPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJsonPath

`func (o *Objectmappingrequest) SetJsonPath(v string)`

SetJsonPath sets JsonPath field to given value.


### GetSourceValue

`func (o *Objectmappingrequest) GetSourceValue() string`

GetSourceValue returns the SourceValue field if non-nil, zero value otherwise.

### GetSourceValueOk

`func (o *Objectmappingrequest) GetSourceValueOk() (*string, bool)`

GetSourceValueOk returns a tuple with the SourceValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceValue

`func (o *Objectmappingrequest) SetSourceValue(v string)`

SetSourceValue sets SourceValue field to given value.


### GetTargetValue

`func (o *Objectmappingrequest) GetTargetValue() string`

GetTargetValue returns the TargetValue field if non-nil, zero value otherwise.

### GetTargetValueOk

`func (o *Objectmappingrequest) GetTargetValueOk() (*string, bool)`

GetTargetValueOk returns a tuple with the TargetValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetValue

`func (o *Objectmappingrequest) SetTargetValue(v string)`

SetTargetValue sets TargetValue field to given value.


### GetEnabled

`func (o *Objectmappingrequest) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Objectmappingrequest) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Objectmappingrequest) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Objectmappingrequest) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.


