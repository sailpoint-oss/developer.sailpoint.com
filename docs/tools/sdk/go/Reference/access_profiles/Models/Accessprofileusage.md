---
id: v1-accessprofileusage
title: Accessprofileusage
pagination_label: Accessprofileusage
sidebar_label: Accessprofileusage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessprofileusage', 'V1Accessprofileusage'] 
slug: /tools/sdk/go/accessprofiles/models/accessprofileusage
tags: ['SDK', 'Software Development Kit', 'Accessprofileusage', 'V1Accessprofileusage']
---

# Accessprofileusage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessProfileId** | Pointer to **string** | ID of the Access Profile that is in use | [optional] 
**UsedBy** | Pointer to [**[]AccessprofileusageUsedByInner**](accessprofileusage-used-by-inner) | List of references to objects which are using the indicated Access Profile | [optional] 

## Methods

### NewAccessprofileusage

`func NewAccessprofileusage() *Accessprofileusage`

NewAccessprofileusage instantiates a new Accessprofileusage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessprofileusageWithDefaults

`func NewAccessprofileusageWithDefaults() *Accessprofileusage`

NewAccessprofileusageWithDefaults instantiates a new Accessprofileusage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessProfileId

`func (o *Accessprofileusage) GetAccessProfileId() string`

GetAccessProfileId returns the AccessProfileId field if non-nil, zero value otherwise.

### GetAccessProfileIdOk

`func (o *Accessprofileusage) GetAccessProfileIdOk() (*string, bool)`

GetAccessProfileIdOk returns a tuple with the AccessProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfileId

`func (o *Accessprofileusage) SetAccessProfileId(v string)`

SetAccessProfileId sets AccessProfileId field to given value.

### HasAccessProfileId

`func (o *Accessprofileusage) HasAccessProfileId() bool`

HasAccessProfileId returns a boolean if a field has been set.

### GetUsedBy

`func (o *Accessprofileusage) GetUsedBy() []AccessprofileusageUsedByInner`

GetUsedBy returns the UsedBy field if non-nil, zero value otherwise.

### GetUsedByOk

`func (o *Accessprofileusage) GetUsedByOk() (*[]AccessprofileusageUsedByInner, bool)`

GetUsedByOk returns a tuple with the UsedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedBy

`func (o *Accessprofileusage) SetUsedBy(v []AccessprofileusageUsedByInner)`

SetUsedBy sets UsedBy field to given value.

### HasUsedBy

`func (o *Accessprofileusage) HasUsedBy() bool`

HasUsedBy returns a boolean if a field has been set.


