---
id: v1-attrsyncsourceattributeconfig
title: Attrsyncsourceattributeconfig
pagination_label: Attrsyncsourceattributeconfig
sidebar_label: Attrsyncsourceattributeconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Attrsyncsourceattributeconfig', 'V1Attrsyncsourceattributeconfig'] 
slug: /tools/sdk/go/sources/models/attrsyncsourceattributeconfig
tags: ['SDK', 'Software Development Kit', 'Attrsyncsourceattributeconfig', 'V1Attrsyncsourceattributeconfig']
---

# Attrsyncsourceattributeconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the identity attribute | 
**DisplayName** | **string** | Display name of the identity attribute | 
**Enabled** | **bool** | Determines whether or not the attribute is enabled for synchronization | 
**Target** | **string** | Name of the source account attribute to which the identity attribute value will be synchronized if enabled | 

## Methods

### NewAttrsyncsourceattributeconfig

`func NewAttrsyncsourceattributeconfig(name string, displayName string, enabled bool, target string, ) *Attrsyncsourceattributeconfig`

NewAttrsyncsourceattributeconfig instantiates a new Attrsyncsourceattributeconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttrsyncsourceattributeconfigWithDefaults

`func NewAttrsyncsourceattributeconfigWithDefaults() *Attrsyncsourceattributeconfig`

NewAttrsyncsourceattributeconfigWithDefaults instantiates a new Attrsyncsourceattributeconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Attrsyncsourceattributeconfig) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Attrsyncsourceattributeconfig) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Attrsyncsourceattributeconfig) SetName(v string)`

SetName sets Name field to given value.


### GetDisplayName

`func (o *Attrsyncsourceattributeconfig) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Attrsyncsourceattributeconfig) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Attrsyncsourceattributeconfig) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetEnabled

`func (o *Attrsyncsourceattributeconfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Attrsyncsourceattributeconfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Attrsyncsourceattributeconfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.


### GetTarget

`func (o *Attrsyncsourceattributeconfig) GetTarget() string`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *Attrsyncsourceattributeconfig) GetTargetOk() (*string, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *Attrsyncsourceattributeconfig) SetTarget(v string)`

SetTarget sets Target field to given value.



