---
id: v1-formdefinitiondynamicschemarequest
title: Formdefinitiondynamicschemarequest
pagination_label: Formdefinitiondynamicschemarequest
sidebar_label: Formdefinitiondynamicschemarequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Formdefinitiondynamicschemarequest', 'V1Formdefinitiondynamicschemarequest'] 
slug: /tools/sdk/go/customforms/models/formdefinitiondynamicschemarequest
tags: ['SDK', 'Software Development Kit', 'Formdefinitiondynamicschemarequest', 'V1Formdefinitiondynamicschemarequest']
---

# Formdefinitiondynamicschemarequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | Pointer to [**FormdefinitiondynamicschemarequestAttributes**](formdefinitiondynamicschemarequest-attributes) |  | [optional] 
**Description** | Pointer to **string** | Description is the form definition dynamic schema description text | [optional] 
**Id** | Pointer to **string** | ID is a unique identifier | [optional] 
**Type** | Pointer to **string** | Type is the form definition dynamic schema type | [optional] 
**VersionNumber** | Pointer to **int64** | VersionNumber is the form definition dynamic schema version number | [optional] 

## Methods

### NewFormdefinitiondynamicschemarequest

`func NewFormdefinitiondynamicschemarequest() *Formdefinitiondynamicschemarequest`

NewFormdefinitiondynamicschemarequest instantiates a new Formdefinitiondynamicschemarequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormdefinitiondynamicschemarequestWithDefaults

`func NewFormdefinitiondynamicschemarequestWithDefaults() *Formdefinitiondynamicschemarequest`

NewFormdefinitiondynamicschemarequestWithDefaults instantiates a new Formdefinitiondynamicschemarequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributes

`func (o *Formdefinitiondynamicschemarequest) GetAttributes() FormdefinitiondynamicschemarequestAttributes`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Formdefinitiondynamicschemarequest) GetAttributesOk() (*FormdefinitiondynamicschemarequestAttributes, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Formdefinitiondynamicschemarequest) SetAttributes(v FormdefinitiondynamicschemarequestAttributes)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Formdefinitiondynamicschemarequest) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetDescription

`func (o *Formdefinitiondynamicschemarequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Formdefinitiondynamicschemarequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Formdefinitiondynamicschemarequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Formdefinitiondynamicschemarequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetId

`func (o *Formdefinitiondynamicschemarequest) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Formdefinitiondynamicschemarequest) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Formdefinitiondynamicschemarequest) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Formdefinitiondynamicschemarequest) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Formdefinitiondynamicschemarequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Formdefinitiondynamicschemarequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Formdefinitiondynamicschemarequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Formdefinitiondynamicschemarequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetVersionNumber

`func (o *Formdefinitiondynamicschemarequest) GetVersionNumber() int64`

GetVersionNumber returns the VersionNumber field if non-nil, zero value otherwise.

### GetVersionNumberOk

`func (o *Formdefinitiondynamicschemarequest) GetVersionNumberOk() (*int64, bool)`

GetVersionNumberOk returns a tuple with the VersionNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersionNumber

`func (o *Formdefinitiondynamicschemarequest) SetVersionNumber(v int64)`

SetVersionNumber sets VersionNumber field to given value.

### HasVersionNumber

`func (o *Formdefinitiondynamicschemarequest) HasVersionNumber() bool`

HasVersionNumber returns a boolean if a field has been set.


