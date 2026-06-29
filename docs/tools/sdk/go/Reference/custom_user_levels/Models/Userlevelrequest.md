---
id: v1-userlevelrequest
title: Userlevelrequest
pagination_label: Userlevelrequest
sidebar_label: Userlevelrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Userlevelrequest', 'V1Userlevelrequest'] 
slug: /tools/sdk/go/customuserlevels/models/userlevelrequest
tags: ['SDK', 'Software Development Kit', 'Userlevelrequest', 'V1Userlevelrequest']
---

# Userlevelrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the user level. | 
**Description** | **string** | A brief description of the user level. | 
**Owner** | [**Publicidentity**](publicidentity) |  | 
**RightSets** | Pointer to **[]string** | A list of rights associated with the user level. | [optional] 

## Methods

### NewUserlevelrequest

`func NewUserlevelrequest(name string, description string, owner Publicidentity, ) *Userlevelrequest`

NewUserlevelrequest instantiates a new Userlevelrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserlevelrequestWithDefaults

`func NewUserlevelrequestWithDefaults() *Userlevelrequest`

NewUserlevelrequestWithDefaults instantiates a new Userlevelrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Userlevelrequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Userlevelrequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Userlevelrequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *Userlevelrequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Userlevelrequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Userlevelrequest) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetOwner

`func (o *Userlevelrequest) GetOwner() Publicidentity`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Userlevelrequest) GetOwnerOk() (*Publicidentity, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Userlevelrequest) SetOwner(v Publicidentity)`

SetOwner sets Owner field to given value.


### GetRightSets

`func (o *Userlevelrequest) GetRightSets() []string`

GetRightSets returns the RightSets field if non-nil, zero value otherwise.

### GetRightSetsOk

`func (o *Userlevelrequest) GetRightSetsOk() (*[]string, bool)`

GetRightSetsOk returns a tuple with the RightSets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightSets

`func (o *Userlevelrequest) SetRightSets(v []string)`

SetRightSets sets RightSets field to given value.

### HasRightSets

`func (o *Userlevelrequest) HasRightSets() bool`

HasRightSets returns a boolean if a field has been set.


