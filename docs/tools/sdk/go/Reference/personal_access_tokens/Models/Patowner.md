---
id: v1-patowner
title: Patowner
pagination_label: Patowner
sidebar_label: Patowner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Patowner', 'V1Patowner'] 
slug: /tools/sdk/go/personalaccesstokens/models/patowner
tags: ['SDK', 'Software Development Kit', 'Patowner', 'V1Patowner']
---

# Patowner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Personal access token owner's DTO type. | [optional] 
**Id** | Pointer to **string** | Personal access token owner's identity ID. | [optional] 
**Name** | Pointer to **string** | Personal access token owner's human-readable display name. | [optional] 

## Methods

### NewPatowner

`func NewPatowner() *Patowner`

NewPatowner instantiates a new Patowner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatownerWithDefaults

`func NewPatownerWithDefaults() *Patowner`

NewPatownerWithDefaults instantiates a new Patowner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Patowner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Patowner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Patowner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Patowner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Patowner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Patowner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Patowner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Patowner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Patowner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Patowner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Patowner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Patowner) HasName() bool`

HasName returns a boolean if a field has been set.


