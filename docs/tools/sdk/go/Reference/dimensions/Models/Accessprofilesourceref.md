---
id: v1-accessprofilesourceref
title: Accessprofilesourceref
pagination_label: Accessprofilesourceref
sidebar_label: Accessprofilesourceref
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessprofilesourceref', 'V1Accessprofilesourceref'] 
slug: /tools/sdk/go/dimensions/models/accessprofilesourceref
tags: ['SDK', 'Software Development Kit', 'Accessprofilesourceref', 'V1Accessprofilesourceref']
---

# Accessprofilesourceref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the source the access profile is associated with. | [optional] 
**Type** | Pointer to **string** | Source's DTO type. | [optional] 
**Name** | Pointer to **string** | Source name. | [optional] 

## Methods

### NewAccessprofilesourceref

`func NewAccessprofilesourceref() *Accessprofilesourceref`

NewAccessprofilesourceref instantiates a new Accessprofilesourceref object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessprofilesourcerefWithDefaults

`func NewAccessprofilesourcerefWithDefaults() *Accessprofilesourceref`

NewAccessprofilesourcerefWithDefaults instantiates a new Accessprofilesourceref object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessprofilesourceref) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessprofilesourceref) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessprofilesourceref) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessprofilesourceref) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Accessprofilesourceref) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accessprofilesourceref) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accessprofilesourceref) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Accessprofilesourceref) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *Accessprofilesourceref) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accessprofilesourceref) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accessprofilesourceref) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accessprofilesourceref) HasName() bool`

HasName returns a boolean if a field has been set.


