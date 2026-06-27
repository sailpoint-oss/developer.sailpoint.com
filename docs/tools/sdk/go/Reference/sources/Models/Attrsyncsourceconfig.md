---
id: v1-attrsyncsourceconfig
title: Attrsyncsourceconfig
pagination_label: Attrsyncsourceconfig
sidebar_label: Attrsyncsourceconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Attrsyncsourceconfig', 'V1Attrsyncsourceconfig'] 
slug: /tools/sdk/go/sources/models/attrsyncsourceconfig
tags: ['SDK', 'Software Development Kit', 'Attrsyncsourceconfig', 'V1Attrsyncsourceconfig']
---

# Attrsyncsourceconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**Attrsyncsource**](attrsyncsource) |  | 
**Attributes** | [**[]Attrsyncsourceattributeconfig**](attrsyncsourceattributeconfig) | Attribute synchronization configuration for specific identity attributes in the context of a source | 

## Methods

### NewAttrsyncsourceconfig

`func NewAttrsyncsourceconfig(source Attrsyncsource, attributes []Attrsyncsourceattributeconfig, ) *Attrsyncsourceconfig`

NewAttrsyncsourceconfig instantiates a new Attrsyncsourceconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttrsyncsourceconfigWithDefaults

`func NewAttrsyncsourceconfigWithDefaults() *Attrsyncsourceconfig`

NewAttrsyncsourceconfigWithDefaults instantiates a new Attrsyncsourceconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSource

`func (o *Attrsyncsourceconfig) GetSource() Attrsyncsource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Attrsyncsourceconfig) GetSourceOk() (*Attrsyncsource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Attrsyncsourceconfig) SetSource(v Attrsyncsource)`

SetSource sets Source field to given value.


### GetAttributes

`func (o *Attrsyncsourceconfig) GetAttributes() []Attrsyncsourceattributeconfig`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Attrsyncsourceconfig) GetAttributesOk() (*[]Attrsyncsourceattributeconfig, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Attrsyncsourceconfig) SetAttributes(v []Attrsyncsourceattributeconfig)`

SetAttributes sets Attributes field to given value.



