---
id: v1-configurationitemrequest
title: Configurationitemrequest
pagination_label: Configurationitemrequest
sidebar_label: Configurationitemrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Configurationitemrequest', 'V1Configurationitemrequest'] 
slug: /tools/sdk/go/workreassignment/models/configurationitemrequest
tags: ['SDK', 'Software Development Kit', 'Configurationitemrequest', 'V1Configurationitemrequest']
---

# Configurationitemrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReassignedFromId** | Pointer to **string** | The identity id to reassign an item from | [optional] 
**ReassignedToId** | Pointer to **string** | The identity id to reassign an item to | [optional] 
**ConfigType** | Pointer to [**Configtypeenum**](configtypeenum) |  | [optional] 
**StartDate** | Pointer to **SailPointTime** | The date from which to start reassigning work items | [optional] 
**EndDate** | Pointer to **NullableTime** | The date from which to stop reassigning work items.  If this is an null string it indicates a permanent reassignment. | [optional] 

## Methods

### NewConfigurationitemrequest

`func NewConfigurationitemrequest() *Configurationitemrequest`

NewConfigurationitemrequest instantiates a new Configurationitemrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigurationitemrequestWithDefaults

`func NewConfigurationitemrequestWithDefaults() *Configurationitemrequest`

NewConfigurationitemrequestWithDefaults instantiates a new Configurationitemrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReassignedFromId

`func (o *Configurationitemrequest) GetReassignedFromId() string`

GetReassignedFromId returns the ReassignedFromId field if non-nil, zero value otherwise.

### GetReassignedFromIdOk

`func (o *Configurationitemrequest) GetReassignedFromIdOk() (*string, bool)`

GetReassignedFromIdOk returns a tuple with the ReassignedFromId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedFromId

`func (o *Configurationitemrequest) SetReassignedFromId(v string)`

SetReassignedFromId sets ReassignedFromId field to given value.

### HasReassignedFromId

`func (o *Configurationitemrequest) HasReassignedFromId() bool`

HasReassignedFromId returns a boolean if a field has been set.

### GetReassignedToId

`func (o *Configurationitemrequest) GetReassignedToId() string`

GetReassignedToId returns the ReassignedToId field if non-nil, zero value otherwise.

### GetReassignedToIdOk

`func (o *Configurationitemrequest) GetReassignedToIdOk() (*string, bool)`

GetReassignedToIdOk returns a tuple with the ReassignedToId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedToId

`func (o *Configurationitemrequest) SetReassignedToId(v string)`

SetReassignedToId sets ReassignedToId field to given value.

### HasReassignedToId

`func (o *Configurationitemrequest) HasReassignedToId() bool`

HasReassignedToId returns a boolean if a field has been set.

### GetConfigType

`func (o *Configurationitemrequest) GetConfigType() Configtypeenum`

GetConfigType returns the ConfigType field if non-nil, zero value otherwise.

### GetConfigTypeOk

`func (o *Configurationitemrequest) GetConfigTypeOk() (*Configtypeenum, bool)`

GetConfigTypeOk returns a tuple with the ConfigType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigType

`func (o *Configurationitemrequest) SetConfigType(v Configtypeenum)`

SetConfigType sets ConfigType field to given value.

### HasConfigType

`func (o *Configurationitemrequest) HasConfigType() bool`

HasConfigType returns a boolean if a field has been set.

### GetStartDate

`func (o *Configurationitemrequest) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Configurationitemrequest) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Configurationitemrequest) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *Configurationitemrequest) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetEndDate

`func (o *Configurationitemrequest) GetEndDate() SailPointTime`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *Configurationitemrequest) GetEndDateOk() (*SailPointTime, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *Configurationitemrequest) SetEndDate(v SailPointTime)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *Configurationitemrequest) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### SetEndDateNil

`func (o *Configurationitemrequest) SetEndDateNil(b bool)`

 SetEndDateNil sets the value for EndDate to be an explicit nil

### UnsetEndDate
`func (o *Configurationitemrequest) UnsetEndDate()`

UnsetEndDate ensures that no value is present for EndDate, not even an explicit nil

