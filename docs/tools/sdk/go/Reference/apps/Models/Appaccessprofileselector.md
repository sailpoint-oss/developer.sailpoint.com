---
id: v1-appaccessprofileselector
title: Appaccessprofileselector
pagination_label: Appaccessprofileselector
sidebar_label: Appaccessprofileselector
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Appaccessprofileselector', 'V1Appaccessprofileselector'] 
slug: /tools/sdk/go/apps/models/appaccessprofileselector
tags: ['SDK', 'Software Development Kit', 'Appaccessprofileselector', 'V1Appaccessprofileselector']
---

# Appaccessprofileselector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** | Pointer to **string** | The application id | [optional] 
**AccountMatchConfig** | Pointer to [**AppaccessprofileselectorAccountMatchConfig**](appaccessprofileselector-account-match-config) |  | [optional] 

## Methods

### NewAppaccessprofileselector

`func NewAppaccessprofileselector() *Appaccessprofileselector`

NewAppaccessprofileselector instantiates a new Appaccessprofileselector object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppaccessprofileselectorWithDefaults

`func NewAppaccessprofileselectorWithDefaults() *Appaccessprofileselector`

NewAppaccessprofileselectorWithDefaults instantiates a new Appaccessprofileselector object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicationId

`func (o *Appaccessprofileselector) GetApplicationId() string`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *Appaccessprofileselector) GetApplicationIdOk() (*string, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *Appaccessprofileselector) SetApplicationId(v string)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *Appaccessprofileselector) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### GetAccountMatchConfig

`func (o *Appaccessprofileselector) GetAccountMatchConfig() AppaccessprofileselectorAccountMatchConfig`

GetAccountMatchConfig returns the AccountMatchConfig field if non-nil, zero value otherwise.

### GetAccountMatchConfigOk

`func (o *Appaccessprofileselector) GetAccountMatchConfigOk() (*AppaccessprofileselectorAccountMatchConfig, bool)`

GetAccountMatchConfigOk returns a tuple with the AccountMatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountMatchConfig

`func (o *Appaccessprofileselector) SetAccountMatchConfig(v AppaccessprofileselectorAccountMatchConfig)`

SetAccountMatchConfig sets AccountMatchConfig field to given value.

### HasAccountMatchConfig

`func (o *Appaccessprofileselector) HasAccountMatchConfig() bool`

HasAccountMatchConfig returns a boolean if a field has been set.


