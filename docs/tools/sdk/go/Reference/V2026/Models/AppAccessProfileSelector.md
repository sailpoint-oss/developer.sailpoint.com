---
id: v2026-app-access-profile-selector
title: AppAccessProfileSelector
pagination_label: AppAccessProfileSelector
sidebar_label: AppAccessProfileSelector
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AppAccessProfileSelector', 'V2026AppAccessProfileSelector'] 
slug: /tools/sdk/go/v2026/models/app-access-profile-selector
tags: ['SDK', 'Software Development Kit', 'AppAccessProfileSelector', 'V2026AppAccessProfileSelector']
---

# AppAccessProfileSelector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationId** | Pointer to **string** | The application id | [optional] 
**AccountMatchConfig** | Pointer to [**AppAccessProfileSelectorAccountMatchConfig**](app-access-profile-selector-account-match-config) |  | [optional] 

## Methods

### NewAppAccessProfileSelector

`func NewAppAccessProfileSelector() *AppAccessProfileSelector`

NewAppAccessProfileSelector instantiates a new AppAccessProfileSelector object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppAccessProfileSelectorWithDefaults

`func NewAppAccessProfileSelectorWithDefaults() *AppAccessProfileSelector`

NewAppAccessProfileSelectorWithDefaults instantiates a new AppAccessProfileSelector object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicationId

`func (o *AppAccessProfileSelector) GetApplicationId() string`

GetApplicationId returns the ApplicationId field if non-nil, zero value otherwise.

### GetApplicationIdOk

`func (o *AppAccessProfileSelector) GetApplicationIdOk() (*string, bool)`

GetApplicationIdOk returns a tuple with the ApplicationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationId

`func (o *AppAccessProfileSelector) SetApplicationId(v string)`

SetApplicationId sets ApplicationId field to given value.

### HasApplicationId

`func (o *AppAccessProfileSelector) HasApplicationId() bool`

HasApplicationId returns a boolean if a field has been set.

### GetAccountMatchConfig

`func (o *AppAccessProfileSelector) GetAccountMatchConfig() AppAccessProfileSelectorAccountMatchConfig`

GetAccountMatchConfig returns the AccountMatchConfig field if non-nil, zero value otherwise.

### GetAccountMatchConfigOk

`func (o *AppAccessProfileSelector) GetAccountMatchConfigOk() (*AppAccessProfileSelectorAccountMatchConfig, bool)`

GetAccountMatchConfigOk returns a tuple with the AccountMatchConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountMatchConfig

`func (o *AppAccessProfileSelector) SetAccountMatchConfig(v AppAccessProfileSelectorAccountMatchConfig)`

SetAccountMatchConfig sets AccountMatchConfig field to given value.

### HasAccountMatchConfig

`func (o *AppAccessProfileSelector) HasAccountMatchConfig() bool`

HasAccountMatchConfig returns a boolean if a field has been set.


