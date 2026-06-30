---
id: v1-rolemetadatabulkupdatebyidrequest-values-inner
title: RolemetadatabulkupdatebyidrequestValuesInner
pagination_label: RolemetadatabulkupdatebyidrequestValuesInner
sidebar_label: RolemetadatabulkupdatebyidrequestValuesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RolemetadatabulkupdatebyidrequestValuesInner', 'V1RolemetadatabulkupdatebyidrequestValuesInner'] 
slug: /tools/sdk/go/roles/models/rolemetadatabulkupdatebyidrequest-values-inner
tags: ['SDK', 'Software Development Kit', 'RolemetadatabulkupdatebyidrequestValuesInner', 'V1RolemetadatabulkupdatebyidrequestValuesInner']
---

# RolemetadatabulkupdatebyidrequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **string** | the key of metadata attribute | 
**Values** | **[]string** | the values of attribute to be updated | 

## Methods

### NewRolemetadatabulkupdatebyidrequestValuesInner

`func NewRolemetadatabulkupdatebyidrequestValuesInner(attribute string, values []string, ) *RolemetadatabulkupdatebyidrequestValuesInner`

NewRolemetadatabulkupdatebyidrequestValuesInner instantiates a new RolemetadatabulkupdatebyidrequestValuesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolemetadatabulkupdatebyidrequestValuesInnerWithDefaults

`func NewRolemetadatabulkupdatebyidrequestValuesInnerWithDefaults() *RolemetadatabulkupdatebyidrequestValuesInner`

NewRolemetadatabulkupdatebyidrequestValuesInnerWithDefaults instantiates a new RolemetadatabulkupdatebyidrequestValuesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *RolemetadatabulkupdatebyidrequestValuesInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *RolemetadatabulkupdatebyidrequestValuesInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *RolemetadatabulkupdatebyidrequestValuesInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.


### GetValues

`func (o *RolemetadatabulkupdatebyidrequestValuesInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *RolemetadatabulkupdatebyidrequestValuesInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *RolemetadatabulkupdatebyidrequestValuesInner) SetValues(v []string)`

SetValues sets Values field to given value.


### SetValuesNil

`func (o *RolemetadatabulkupdatebyidrequestValuesInner) SetValuesNil(b bool)`

 SetValuesNil sets the value for Values to be an explicit nil

### UnsetValues
`func (o *RolemetadatabulkupdatebyidrequestValuesInner) UnsetValues()`

UnsetValues ensures that no value is present for Values, not even an explicit nil

