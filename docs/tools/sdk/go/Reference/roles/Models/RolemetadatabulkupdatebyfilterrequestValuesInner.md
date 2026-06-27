---
id: v1-rolemetadatabulkupdatebyfilterrequest-values-inner
title: RolemetadatabulkupdatebyfilterrequestValuesInner
pagination_label: RolemetadatabulkupdatebyfilterrequestValuesInner
sidebar_label: RolemetadatabulkupdatebyfilterrequestValuesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RolemetadatabulkupdatebyfilterrequestValuesInner', 'V1RolemetadatabulkupdatebyfilterrequestValuesInner'] 
slug: /tools/sdk/go/roles/models/rolemetadatabulkupdatebyfilterrequest-values-inner
tags: ['SDK', 'Software Development Kit', 'RolemetadatabulkupdatebyfilterrequestValuesInner', 'V1RolemetadatabulkupdatebyfilterrequestValuesInner']
---

# RolemetadatabulkupdatebyfilterrequestValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeKey** | Pointer to **string** | the key of metadata attribute | [optional] 
**Values** | **[]string** | the values of attribute to be updated | 

## Methods

### NewRolemetadatabulkupdatebyfilterrequestValuesInner

`func NewRolemetadatabulkupdatebyfilterrequestValuesInner(values []string, ) *RolemetadatabulkupdatebyfilterrequestValuesInner`

NewRolemetadatabulkupdatebyfilterrequestValuesInner instantiates a new RolemetadatabulkupdatebyfilterrequestValuesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolemetadatabulkupdatebyfilterrequestValuesInnerWithDefaults

`func NewRolemetadatabulkupdatebyfilterrequestValuesInnerWithDefaults() *RolemetadatabulkupdatebyfilterrequestValuesInner`

NewRolemetadatabulkupdatebyfilterrequestValuesInnerWithDefaults instantiates a new RolemetadatabulkupdatebyfilterrequestValuesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeKey

`func (o *RolemetadatabulkupdatebyfilterrequestValuesInner) GetAttributeKey() string`

GetAttributeKey returns the AttributeKey field if non-nil, zero value otherwise.

### GetAttributeKeyOk

`func (o *RolemetadatabulkupdatebyfilterrequestValuesInner) GetAttributeKeyOk() (*string, bool)`

GetAttributeKeyOk returns a tuple with the AttributeKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeKey

`func (o *RolemetadatabulkupdatebyfilterrequestValuesInner) SetAttributeKey(v string)`

SetAttributeKey sets AttributeKey field to given value.

### HasAttributeKey

`func (o *RolemetadatabulkupdatebyfilterrequestValuesInner) HasAttributeKey() bool`

HasAttributeKey returns a boolean if a field has been set.

### GetValues

`func (o *RolemetadatabulkupdatebyfilterrequestValuesInner) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *RolemetadatabulkupdatebyfilterrequestValuesInner) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *RolemetadatabulkupdatebyfilterrequestValuesInner) SetValues(v []string)`

SetValues sets Values field to given value.


### SetValuesNil

`func (o *RolemetadatabulkupdatebyfilterrequestValuesInner) SetValuesNil(b bool)`

 SetValuesNil sets the value for Values to be an explicit nil

### UnsetValues
`func (o *RolemetadatabulkupdatebyfilterrequestValuesInner) UnsetValues()`

UnsetValues ensures that no value is present for Values, not even an explicit nil

