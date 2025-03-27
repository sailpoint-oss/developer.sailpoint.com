---
id: v2024-configuration-item-request
title: ConfigurationItemRequest
pagination_label: ConfigurationItemRequest
sidebar_label: ConfigurationItemRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConfigurationItemRequest', 'V2024ConfigurationItemRequest'] 
slug: /tools/sdk/go/v2024/models/configuration-item-request
tags: ['SDK', 'Software Development Kit', 'ConfigurationItemRequest', 'V2024ConfigurationItemRequest']
---

# ConfigurationItemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignedFromId** | Pointer to **string** | The identity id to reassign an item from | [optional] 
**ReassignedToId** | Pointer to **string** | The identity id to reassign an item to | [optional] 
**ConfigType** | Pointer to [**ConfigTypeEnum**](config-type-enum) |  | [optional] 
**StartDate** | Pointer to **time.Time** | The date from which to start reassigning work items | [optional] 
**EndDate** | Pointer to **NullableTime** | The date from which to stop reassigning work items.  If this is an null string it indicates a permanent reassignment. | [optional] 

## Methods

### NewConfigurationItemRequest

`func NewConfigurationItemRequest() *ConfigurationItemRequest`

NewConfigurationItemRequest instantiates a new ConfigurationItemRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigurationItemRequestWithDefaults

`func NewConfigurationItemRequestWithDefaults() *ConfigurationItemRequest`

NewConfigurationItemRequestWithDefaults instantiates a new ConfigurationItemRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReassignedFromId

`func (o *ConfigurationItemRequest) GetReassignedFromId() string`

GetReassignedFromId returns the ReassignedFromId field if non-nil, zero value otherwise.

### GetReassignedFromIdOk

`func (o *ConfigurationItemRequest) GetReassignedFromIdOk() (*string, bool)`

GetReassignedFromIdOk returns a tuple with the ReassignedFromId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedFromId

`func (o *ConfigurationItemRequest) SetReassignedFromId(v string)`

SetReassignedFromId sets ReassignedFromId field to given value.

### HasReassignedFromId

`func (o *ConfigurationItemRequest) HasReassignedFromId() bool`

HasReassignedFromId returns a boolean if a field has been set.

### GetReassignedToId

`func (o *ConfigurationItemRequest) GetReassignedToId() string`

GetReassignedToId returns the ReassignedToId field if non-nil, zero value otherwise.

### GetReassignedToIdOk

`func (o *ConfigurationItemRequest) GetReassignedToIdOk() (*string, bool)`

GetReassignedToIdOk returns a tuple with the ReassignedToId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedToId

`func (o *ConfigurationItemRequest) SetReassignedToId(v string)`

SetReassignedToId sets ReassignedToId field to given value.

### HasReassignedToId

`func (o *ConfigurationItemRequest) HasReassignedToId() bool`

HasReassignedToId returns a boolean if a field has been set.

### GetConfigType

`func (o *ConfigurationItemRequest) GetConfigType() ConfigTypeEnum`

GetConfigType returns the ConfigType field if non-nil, zero value otherwise.

### GetConfigTypeOk

`func (o *ConfigurationItemRequest) GetConfigTypeOk() (*ConfigTypeEnum, bool)`

GetConfigTypeOk returns a tuple with the ConfigType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigType

`func (o *ConfigurationItemRequest) SetConfigType(v ConfigTypeEnum)`

SetConfigType sets ConfigType field to given value.

### HasConfigType

`func (o *ConfigurationItemRequest) HasConfigType() bool`

HasConfigType returns a boolean if a field has been set.

### GetStartDate

`func (o *ConfigurationItemRequest) GetStartDate() time.Time`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *ConfigurationItemRequest) GetStartDateOk() (*time.Time, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *ConfigurationItemRequest) SetStartDate(v time.Time)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *ConfigurationItemRequest) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ConfigurationItemRequest) GetEndDate() time.Time`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ConfigurationItemRequest) GetEndDateOk() (*time.Time, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ConfigurationItemRequest) SetEndDate(v time.Time)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ConfigurationItemRequest) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### SetEndDateNil

`func (o *ConfigurationItemRequest) SetEndDateNil(b bool)`

 SetEndDateNil sets the value for EndDate to be an explicit nil

### UnsetEndDate
`func (o *ConfigurationItemRequest) UnsetEndDate()`

UnsetEndDate ensures that no value is present for EndDate, not even an explicit nil

