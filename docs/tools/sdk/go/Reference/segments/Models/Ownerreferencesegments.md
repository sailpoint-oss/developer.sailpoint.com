---
id: v1-ownerreferencesegments
title: Ownerreferencesegments
pagination_label: Ownerreferencesegments
sidebar_label: Ownerreferencesegments
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Ownerreferencesegments', 'V1Ownerreferencesegments'] 
slug: /tools/sdk/go/segments/models/ownerreferencesegments
tags: ['SDK', 'Software Development Kit', 'Ownerreferencesegments', 'V1Ownerreferencesegments']
---

# Ownerreferencesegments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Owner type. This field must be either left null or set to 'IDENTITY' on input, otherwise a 400 Bad Request error will result. | [optional] 
**Id** | Pointer to **string** | Identity id | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the owner. It may be left null or omitted in a POST or PATCH. If set, it must match the current value of the owner's display name, otherwise a 400 Bad Request error will result. | [optional] 

## Methods

### NewOwnerreferencesegments

`func NewOwnerreferencesegments() *Ownerreferencesegments`

NewOwnerreferencesegments instantiates a new Ownerreferencesegments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOwnerreferencesegmentsWithDefaults

`func NewOwnerreferencesegmentsWithDefaults() *Ownerreferencesegments`

NewOwnerreferencesegmentsWithDefaults instantiates a new Ownerreferencesegments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Ownerreferencesegments) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Ownerreferencesegments) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Ownerreferencesegments) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Ownerreferencesegments) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Ownerreferencesegments) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Ownerreferencesegments) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Ownerreferencesegments) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Ownerreferencesegments) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Ownerreferencesegments) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Ownerreferencesegments) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Ownerreferencesegments) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Ownerreferencesegments) HasName() bool`

HasName returns a boolean if a field has been set.


